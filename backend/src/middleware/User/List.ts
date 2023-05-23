/**
  * 
  * Middleware User List
  * Middle to List Users
  * 
  */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import bcrypt from "bcrypt";

export default async (req, res, next) => {
  const { Name, Email, Password, } = req.fields;

  // req.fields.Password = await bcrypt.hash(Password, 3);
  next();
}