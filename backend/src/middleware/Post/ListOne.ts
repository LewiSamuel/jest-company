/**
 * 
 * Middleware Post List One
 * Middle to list one Post
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default async (req, res, next) => {
    const { id } = req.params;

    if(!id){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "id is required", {});
      return res.status(400).send(objResponse);
    }

    next();
}