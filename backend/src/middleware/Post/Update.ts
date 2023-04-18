/**
* 
* Middleware POST Update
* Middle to Update POST
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import User from "../../model/User";
import Post from "../../model/Post";


export default async (req, res, next) => {
  const { id } = req.fields;
    
  if(!id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "id is required", {});
    return res.status(400).send(objResponse);
  }
  
  
  if(req.fields.Author){
    const resultPost:any = await listOne(User, {  Author: req.fields.Author });
            
    if(resultPost){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Author id not found!", {});
      return res.status(400).send(objResponse);
    }
    
  }

    next();
}