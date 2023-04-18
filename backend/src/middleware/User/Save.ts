/**
 * 
 * Middleware USER Save
 * Middle to save USER
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import bcrypt from "bcrypt";
import User from "../../model/User";


 export default async (req, res, next) => {
  const { Name, Email, Password, } = req.fields;

    
  /**
   * 
   *  Validations on field
   * Name of User
   * 
   * 
  */
  // Check if Name provided
  if(!Name){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Name is required", {});
    return res.status(400).send(objResponse);
  }
   
  // Validate length
  if(Name){
    // min length
    if(Name.length < 6){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Name size cannot be less than 6", {});
      return res.status(400).send(objResponse);
    }
    
    // max length
    if(Name.length > 255){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Name size cannot be greater than 255", {});
      return res.status(400).send(objResponse);
    }

  }

  /**
   * 
   *  Validations on field
   * Email of User
   * 
   * 
  */
  // Check if Email provided
  if(!Email){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Email is required", {});
    return res.status(400).send(objResponse);
  }
   
  // Check if already exists
  const existUserEmail = await listOne(User, {  Email: Email });
  if(existUserEmail){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "User already exists (Email)", {});
    return res.status(400).send(objResponse);
  }
  
  
  // Validate length
  if(Email){
    // min length
    if(Email.length < 6){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Email size cannot be less than 6", {});
      return res.status(400).send(objResponse);
    }
    
    // max length
    if(Email.length > 255){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Email size cannot be greater than 255", {});
      return res.status(400).send(objResponse);
    }

  }

  /**
   * 
   *  Validations on field
   * Password of User
   * 
   * 
  */
  // Check if Password provided
  if(!Password){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Password is required", {});
    return res.status(400).send(objResponse);
  }
   
  // Validate length
  if(Password){
    // min length
    if(Password.length < 6){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Password size cannot be less than 6", {});
      return res.status(400).send(objResponse);
    }
    
    // max length
    if(Password.length > 255){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Password size cannot be greater than 255", {});
      return res.status(400).send(objResponse);
    }

  }

  // criptography password
  req.fields.Password = await bcrypt.hash(Password, 3);
  
  next();
}