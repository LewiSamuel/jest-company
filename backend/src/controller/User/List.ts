/**
* Import modules
*/
import User from "../../model/User";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { list } from "../../middleware/pattern/dbMethods";
export default async (req, res) => { 

  await list( User, req.fields )
  .then(async (result:any) => {
    
      
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "USER LIST SUCCESS", result);
    return res.send(objResponse);


  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "USER LIST ERROR", err);
    return res.send(objResponse);

  });

}