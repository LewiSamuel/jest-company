/**
 * 
 * Middleware POST Save
 * Middle to save POST
 * 
 */
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";
import { listOne } from "../pattern/dbMethods";
import User from "../../model/User";
import fs from 'fs';

export default async (req, res, next) => {
  const { Description, Author, } = req.fields;

  console.log(req.fields, req.files)
  /**
   * 
   *  Validations on field
   * Description of Post
   * 
   * 
  */
  // Validate length
  if (Description) {
    // min length
    if (Description.length < 6) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Description size cannot be less than 6", {});
      return res.status(400).send(objResponse);
    }

    // max length
    if (Description.length > 1000) {
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Description size cannot be greater than 1000", {});
      return res.status(400).send(objResponse);
    }

  }

  /**
   * 
   *  Validations on field
   * Author of Post
   * 
   * 
  */
  // Check if Author provided
  if (!Author) {
    let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Author is required", {});
    return res.status(400).send(objResponse);
  }




  fs.readFile(req.files.Img.path, function (err, data) {

    var imageName = req.files.Img.name

    /// If there's an error
    if (!imageName) {

      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Img is invalid", {});
      return res.status(400).send(objResponse);

    } else {

      var newPath = "./public/post/img/" + new Date().getTime() + "." + imageName.split(".")[1];

      /// write file to uploads/fullsize folder
      fs.writeFile(newPath, data, function (err) {
        console.log(newPath)
        console.log(err)

        if (err) {
          let objResponse = patternReponse(API_RESPONSE_STATUS['error'], err, {});
          return res.status(400).send(objResponse);
        }

        req.fields.Img = newPath.replace("./public","");
        next();

      });
    }
  });


}