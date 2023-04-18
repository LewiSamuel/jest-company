export default {
        post:{
            "tags": [ "User" ],
            "parameters": [
                {
                    "name": "Name",
                    "in": "formData",
                    "description": "Name of User",
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "Email",
                    "in": "formData",
                    "description": "Email of User",
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "Password",
                    "in": "formData",
                    "description": "Password of User",
                    "required": true,
                    "type": "string",
                },
                
            ],
            "responses": {
                "200": {
                    "description": "Successful save operation",
                    "schema": { 
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "example": "success"
                            },
                            "message": {
                                "type": "string",
                                "example": "USER SAVE SUCCESS"
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
                        "example": "USER SAVE ERROR"
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
