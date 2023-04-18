import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { API_RESPONSE_STATUS, patternReponse } from "../pattern/apiResponse";

export default (req, res, next) => { 
    // get header authorization
    const authHeader = req.headers.authorization;

    // Erro caso nao tenha sido passado um token
    if(!authHeader){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "No Token Provided", {});
      return res.status(401).send(objResponse);
    }

    // Splitar Token
    const parts = authHeader.split(' ');
    
    // Erro Se não houver duas partes distintas apos o split
    if(parts.length !== 2){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Token Error", {});
      return res.status(401).send(objResponse);
    }

    // pega as duas partes do Token
    const [ scheme, token ] = parts; 

    // Erro ao nao existir 'Bearer' no token
    if(!/^Bearer$/i.test(scheme)){
      let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Token malfomatted", {});
      return res.status(401).send(objResponse);
    }

    jwt.verify( token, process.env.AUTH_CONFIG_SECRET, (err, decoded) => {
        if(err){
          let objResponse = patternReponse(API_RESPONSE_STATUS['error'], "Token invalid", {});
          return res.status(401).send(objResponse);
        }

        req.AuthId = decoded.id;
        return next();

    });

}