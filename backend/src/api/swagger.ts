/**
  *       User paths
  */
  import UserSave from "./paths/User/Save";
  import UserList from "./paths/User/List";
  import UserAuth from "./paths/User/Auth";
  import UserListOne from "./paths/User/ListOne";
  import UserUpdate from "./paths/User/Update";
  import UserUpdateOne from "./paths/User/UpdateOne";
  import UserDelete from "./paths/User/Delete";

  /**
  *       Post paths
  */
  import PostSave from "./paths/Post/Save";
  import PostList from "./paths/Post/List";
  import PostListOne from "./paths/Post/ListOne";
  import PostUpdate from "./paths/Post/Update";
  import PostUpdateOne from "./paths/Post/UpdateOne";
  import PostDelete from "./paths/Post/Delete";

  
const apiDoc = {
  swagger: '2.0',
  basePath: '/v1',
  info: {
    title: 'Jest Company - API.',
    version: '1.0.0'
  },
  paths: {
    /**
    * 
    *        API / v1 / User
    * 
    */
    // Auth
    "/user/auth": UserAuth ,
    // List
    "/user/list": UserList ,
    // ListOne
    "/user/list/{idUser}": UserListOne ,
    // Save
    "/user/save": UserSave ,
    // Update
    "/user/update": UserUpdate ,
    // UpdateOne
    "/user/update/{field}": UserUpdateOne ,
    // Delete
    "/user/delete": UserDelete ,

   /**
    * 
    *        API / v1 / Post
    * 
    */
    // List
    "/post/list": PostList ,
    // ListOne
    "/post/list/{idPost}": PostListOne ,
    // Save
    "/post/save": PostSave ,
    // Update
    "/post/update": PostUpdate ,
    // UpdateOne
    "/post/update/{field}": PostUpdateOne ,
    // Delete
    "/post/delete": PostDelete ,

   
  },
  definitions: {
    /**
     * 
     *  DEFINITION MODEL USER
     * 
     */
    User: {
      type: 'object',
      properties: {
        id: {
          description: 'id of ',
          type: 'number',
          required: true
        },
        Name: {
            description: 'Name of User.',
            type: 'string',
            required: true
          },
          Email: {
            description: 'Email of User.',
            type: 'string',
            required: true
          },
          Password: {
            description: 'Password of User.',
            type: 'string',
            required: true
          },
          
        createdAt: {
          description: 'Creation date of register',
          type: 'date-time',
          required: true
        },
        updatedAt: {
          description: 'Updation date of register',
          type: 'date-time',
          required: true
        },
      },
      
    },
    
    /**
     * 
     *  DEFINITION MODEL POST
     * 
     */
    Post: {
      type: 'object',
      properties: {
        id: {
          description: 'id of ',
          type: 'number',
          required: true
        },
        Img: {
            description: 'Img of Post.',
            type: 'string',
            required: false
          },
          Description: {
            description: 'Description of Post.',
            type: 'string',
            required: false
          },
          Author: {
            description: 'Author of Post.',
            type: 'number',
            required: true
          },
          
        createdAt: {
          description: 'Creation date of register',
          type: 'date-time',
          required: true
        },
        updatedAt: {
          description: 'Updation date of register',
          type: 'date-time',
          required: true
        },
      },
      
    },
    
  },
  "securityDefinitions": {
    "bearerAuth": {
      "name": "Authorization",
      "in": "header",
      "type": "apiKey",
      "description": "JWT Authorization header"
    }
  },
  "security": [ { "bearerAuth": [] } ]
};

export default apiDoc;