export default {
        delete:{
            "tags": [
              "User"
            ],
            "parameters": [
              {
                "name": "idUser",
                "in": "formData",
                "description": "ID of User to delete",
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
                                "example": "USER LIST ONE SUCCESS"
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
                                "example": "USER LIST ONE ERROR"
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
        