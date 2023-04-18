export default {
        patch:{
            "tags": [
              "User"
            ],
            "parameters": [
                {
                    "name": "field",
                    "in": "path",
                    "description": "field",
                    "required": true,
                    "type": "string",
                },
                {
                    "name": "idUser",
                    "in": "formData",
                    "description": "ID of User",
                    "required": true,
                    "type": "integer",
                },
                {
                    "name": "value",
                    "in": "formData",
                    "description": "value",
                    "required": true,
                    "type": "string",
                }
            ],
            "responses": {
                "200": {
                    "description": "User Authenticated!",
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
        