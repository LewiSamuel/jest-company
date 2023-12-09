/**
* Import modules
*/
import Post from "../../model/Post";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { updateOne } from "../../middleware/pattern/dbMethods";

export default async (req, res) => {

  await updateOne( Post, req.fields )
  .then(result => {

    if(result){

      /**
       * Build response success
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "POST UPDATE ONE SUCCESS", result);
      return res.send(objResponse);
      
    }else{
  
      /**
       * Build response not found
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "POST UPDATE ONE ERROR", result);
      return res.send(objResponse);
    }
  
  }).catch(err => {
  
    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "POST UPDATE ONE ERROR", err);
    return res.send(objResponse);
  
  });

}