/**
* 
* Middleware User Delete
* Middle to delete User
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
  const { id } = req.fields;

  /**
   * Fields required
   */
  if(!id){
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "id is required", {});
    return res.status(400).send(objResponse);
  }
  next();
}