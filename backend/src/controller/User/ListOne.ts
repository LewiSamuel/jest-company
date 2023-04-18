/**
* Import modules
*/
import User from "../../model/User";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";
export default async (req, res) => {
  await listOne(User, req.params)
  .then(async (result:any) => {
    
    if(result){

      /**
       * Build response success
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "USER LIST ONE SUCCESS", result);
      return res.send(objResponse);
      
    }else{

      /**
       * Build response not found
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "USER LIST ONE NOT FOUND", result);
      return res.send(objResponse);
    }

  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "USER LIST ONE ERROR", err);
    return res.send(objResponse);

  });
}