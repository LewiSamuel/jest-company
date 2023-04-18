/**
* Import modules
*/
import Post from "../../model/Post";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { listOne } from "../../middleware/pattern/dbMethods";
import User from "../../model/User";
export default async (req, res) => {
  await listOne(Post, req.params)
  .then(async (result:any) => {
    
      let element = result;
      // ADD RELATION
      let objAuthor:any = await listOne(User, { id: element.Author });
      result.dataValues.Author = objAuthor.dataValues;
      
    if(result){

      /**
       * Build response success
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "POST LIST ONE SUCCESS", result);
      return res.send(objResponse);
      
    }else{

      /**
       * Build response not found
       */
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "POST LIST ONE NOT FOUND", result);
      return res.send(objResponse);
    }

  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "POST LIST ONE ERROR", err);
    return res.send(objResponse);

  });
}