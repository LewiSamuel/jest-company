/**
*    Standardize available statuses
*/
export const API_RESPONSE_STATUS = {
    success: "SUCCESS",
    error: "ERROR"
}



/**
* Standardize the default format for all API responses
* You can modify the params as you like but don't forget:
* THIS MIDDLEWARE IS PRESENT IN ALL ENDPOINTS
* 
* @param status Status of required action in API. 
* @param message Description of the result of the action called in the API   
* @param data Data resulting from the action on API
* @returns 
*/
export function patternReponse(status, message, data){
    return {
                status:status,
                message:message,
                data:data
            }
}
 