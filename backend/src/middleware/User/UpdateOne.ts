/**
* 
* Middleware User Update One Field
* Middle to Update One Field Users
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import User from "../../model/User";

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
  const existUserId = await listOne( User, { id:id });
  if(!existUserId){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "User dont exists ( id )", {});
    return res.status(400).send(objResponse);
  }
  
  
  if(!User.rawAttributes[field]){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Attribute '" + field + "' dont exist in 'User'", {});
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