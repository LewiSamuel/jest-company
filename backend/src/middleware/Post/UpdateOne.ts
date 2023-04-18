/**
* 
* Middleware Post Update One Field
* Middle to Update One Field Posts
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import Post from "../../model/Post";

export default async (req, res, next) => {
  const { id, value } = req.fields;
  const { field } = req.params;

  if(!id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "id is required", {});
    return res.status(400).send(objResponse);
  }

  if(!field){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "field is required", {});
    return res.status(400).send(objResponse);
  }

  if(!value){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "value is required", {});
    return res.status(400).send(objResponse);
  }

  // Check if this object exists
  const existPostId = await listOne( Post, { id:id });
  if(!existPostId){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Post dont exists ( id )", {});
    return res.status(400).send(objResponse);
  }
  
  
  // check if foregin key exists
  if(req.fields.Author){
    const resultPost:any = await listOne( Post, { Author: req.fields.Author });
            
    if(resultPost){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Author id not found!", {});
      return res.status(400).send(objResponse);
    }

  }

  if(!Post.rawAttributes[field]){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Attribute '" + field + "' dont exist in 'Post'", {});
    return res.status(400).send(objResponse);
  }

  /**
  * build object to query
  */
  let aux = {}
  aux[req.params.field] = req.fields.value;  
  req.fields.updateField = aux;

  next();
}