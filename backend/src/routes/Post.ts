/**
* IMPORT MODULES
*/
import { Router } from 'express';
const routes = Router();

/**
 *  Middleware to authenticate token provided
 */
import AuthToken from '../middleware/security/AuthToken';


/**
 *  Entities Relations
 */
import Post from "../model/Post";
import User from "../model/User";

/**
 *  Relations
 */
// Post < -- > User
User.hasMany(Post, { foreignKey: 'Author' } );
Post.belongsTo(User, { foreignKey: 'Author' } );
/**
 * Controllers
 */

import PostListController      from '../controller/Post/List';
import PostListOneController   from '../controller/Post/ListOne';
import PostSaveController      from '../controller/Post/Save';
import PostUpdateController    from '../controller/Post/Update';
import PostUpdateOneController from '../controller/Post/UpdateOne';
import PostDeleteController      from '../controller/Post/Delete';
/**
 * Middlewares
 */

import PostListMid      from '../middleware/Post/List';
import PostListOneMid   from '../middleware/Post/ListOne';
import PostSaveMid      from '../middleware/Post/Save';
import PostUpdateMid    from '../middleware/Post/Update';
import PostUpdateOneMid from '../middleware/Post/UpdateOne';
import PostDeleteMid      from '../middleware/Post/Delete';
/**
 * 
 *     SERVICES POST
 * 
 */
routes.post("/save",           [ AuthToken , PostSaveMid ],       PostSaveController);
routes.put("/update",          [ AuthToken, PostUpdateMid ],     PostUpdateController);
routes.patch("/update/:field", [ AuthToken, PostUpdateOneMid ],  PostUpdateOneController);
routes.get("/list",            [ AuthToken, PostListMid ],       PostListController);
routes.get("/list/:id",        [ AuthToken, PostListOneMid ],    PostListOneController);
routes.delete("/delete",       [ AuthToken, PostDeleteMid ],     PostDeleteController);

export default routes;