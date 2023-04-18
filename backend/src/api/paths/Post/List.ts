export default {
        get:{
            "tags": [
              "Post"
            ],
            "parameters": [
              {
                  "name": "Img",
                  "in": "formData",
                  "description": "Img of Post",
                  "type": "string",
                },
                {
                  "name": "Description",
                  "in": "formData",
                  "description": "Description of Post",
                  "type": "string",
                },
                {
                  "name": "Author",
                  "in": "formData",
                  "description": "Author of Post",
                  "type": "number",
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
                                "example": "POST LIST SUCCESS"
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
                        "example": "POST LIST ERROR"
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
