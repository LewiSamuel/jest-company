/**
* Import modules
*/
import Post from "../../model/Post";
import { API_RESPONSE_STATUS, patternReponse } from "../../middleware/pattern/apiResponse";
import { list, listOne } from "../../middleware/pattern/dbMethods";
import User from "../../model/User";
export default async (req, res) => { 

  await list( Post, req.fields )
  .then(async (result:any) => {
    
      /**
       *  ANALIZING ALL REGISTERS
       */
      // for (let i = 0; i < result.length; i++){
      //   let element = result[i];
      for(const [index, element] of result){
        // ADD RELATION
        // Author
        let objAuthor:any = await listOne(User, { id: element.Author });
        result[index].dataValues.Author = objAuthor.dataValues;
        
      }
      
    /**
     * Build response success
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['success'], "POST LIST SUCCESS", result);
    return res.send(objResponse);


  }).catch(err => {

    /**
     * Build response error
     */
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "POST LIST ERROR", []);
    return res.send(objResponse);

  });

}