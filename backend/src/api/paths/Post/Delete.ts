export default {
        delete:{
            "tags": [
              "Post"
            ],
            "parameters": [
              {
                "name": "idPost",
                "in": "formData",
                "description": "ID of Post to delete",
                "required": true,
                "type": "integer",
              }
            ],
            "responses": {
                "200": {
                    "description": "User deleted!",
                    "schema": {
                        "type": "object",
                        "properties": {
                            "status": {
                                "type": "string",
                                "example": "success"
                            },
                            "message": {
                                "type": "string",
                                "example": "POST LIST ONE SUCCESS"
                            },
                            "data": {
                                "type": "array",
                                "items": {
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
                                "example": "POST LIST ONE ERROR"
                            },
                            "data": {
                                "type": "object",
                                "example": {}
                            }
                        }
                    }
                },
            },
        },
    }
        