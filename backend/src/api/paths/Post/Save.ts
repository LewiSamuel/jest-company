export default {
        post:{
            "tags": [ "Post" ],
            "parameters": [
                {
                    "name": "Img",
                    "in": "formData",
                    "description": "Img of Post",
                    "required": false,
                    "type": "string",
                },
                {
                    "name": "Description",
                    "in": "formData",
                    "description": "Description of Post",
                    "required": false,
                    "type": "string",
                },
                {
                    "name": "Author",
                    "in": "formData",
                    "description": "Author of Post",
                    "required": true,
                    "type": "number",
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
                                "example": "POST SAVE SUCCESS"
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
                        "example": "POST SAVE ERROR"
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
