/**
* 
* Middleware Post Delete
* Middle to delete Post
* 
*/
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import Post from "../../model/Post";
import { Op } from "sequelize";
  
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