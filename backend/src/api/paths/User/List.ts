export default {
        get:{
            "tags": [
              "User"
            ],
            "parameters": [
              {
                  "name": "Name",
                  "in": "formData",
                  "description": "Name of User",
                  "type": "string",
                },
                {
                  "name": "Email",
                  "in": "formData",
                  "description": "Email of User",
                  "type": "string",
                },
                {
                  "name": "Password",
                  "in": "formData",
                  "description": "Password of User",
                  "type": "string",
                },
                
            ],
            "responses": {
                "200": {
                    "description": "Successful list operation",
                    "schema": { 
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "example": "success"
                            },
                            "message": {
                                "type": "string",
                                "example": "USER LIST SUCCESS"
                            },
                            "data": {
                                "type": "array",
                                "items":{
                                "type": "object",
                            }
                        }
                    }
                }
            },
            "400": {
                "description": "Fail operation",
                "schema": {
                    "type": "object",
                    "properties": {
                        "status": {
                            "type": "string",
                            "example": "error"
                        },
                    "message": {
                        "type": "string",
                        "example": "USER LIST ERROR"
                    },
                    "data": {
                        "type": "object",
                        "example": {}
                    }
                }
            }
            },
        },
    }
}
