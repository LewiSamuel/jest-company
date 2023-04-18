/**
* 
* Middleware USER Update
* Middle to Update USER
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import User from "../../model/User";

import bcrypt from "bcrypt";


export default async (req, res, next) => {
  const { id } = req.fields;
    
  if(!id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "id is required", {});
    return res.status(400).send(objResponse);
  }
  
  

    // criptography password
    if(req.fields.Password)
    req.fields.Password = await bcrypt.hash(req.fields.Password, 3);
    
    next();
}