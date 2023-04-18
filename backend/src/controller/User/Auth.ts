/**
* Import modules
*/
import User from "../../model/User";
import bcrypt from 'bcrypt';
import { listOne } from "../../middleware/pattern/dbMethods";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";


export default async (req, res) => {

  // Get Variables
  const { Email, Password } = req.fields;

  // Operation
  const user = await listOne( User, { Email: Email });

  // erro caso nao exista um usuario com este email
  if(!user){
    let objResponseNfound = patternReponse(API_RESPONSE_STATUS['error'], "USER not found", {});
    return res.status(400).send(objResponseNfound);
  }

  // erro caso as senhas nao batam 
  if(!await bcrypt.compare(Password, user.Password)){
    let objResponseInvalidPwd = patternReponse(API_RESPONSE_STATUS['error'], "Invalid password", {});
    return res.status(400).send(objResponseInvalidPwd);
  }
  
  // gera Token
  user.dataValues.token = user.getToken();
  
  // retorna Usuario + token
  let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "User Authenticate", user);
  return res.send(objResponse);
}