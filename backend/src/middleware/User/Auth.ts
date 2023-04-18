/**
  * 
  * Middleware Auth
  * Middle to authenticate ( login )
  * 
  */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
 
export default async (req, res, next) => {
    const { Email, Password } = req.fields;

    /**
    * Fields required
    */
   
    if(!Email){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Email is required", {});
      return res.status(400).send(objResponse);
    }

    if(!Password){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Password is required", {});
      return res.status(400).send(objResponse);
    }

    next();
}