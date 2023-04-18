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
import User from "../model/User";

/**
 *  Relations
 */
/**
 * Controllers
 */
import UserAuthController      from '../controller/User/Auth';

import UserListController      from '../controller/User/List';
import UserListOneController   from '../controller/User/ListOne';
import UserSaveController      from '../controller/User/Save';
import UserUpdateController    from '../controller/User/Update';
import UserUpdateOneController from '../controller/User/UpdateOne';
import UserDeleteController      from '../controller/User/Delete';
/**
 * Middlewares
 */
import UserAuthMid      from '../middleware/User/Auth';

import UserListMid      from '../middleware/User/List';
import UserListOneMid   from '../middleware/User/ListOne';
import UserSaveMid      from '../middleware/User/Save';
import UserUpdateMid    from '../middleware/User/Update';
import UserUpdateOneMid from '../middleware/User/UpdateOne';
import UserDeleteMid      from '../middleware/User/Delete';
/**
 * 
 *     SERVICES USER
 * 
 */
routes.post("/auth",           [            UserAuthMid ],       UserAuthController);
routes.post("/save",           [             UserSaveMid ],       UserSaveController);
routes.put("/update",          [ AuthToken, UserUpdateMid ],     UserUpdateController);
routes.patch("/update/:field", [ AuthToken, UserUpdateOneMid ],  UserUpdateOneController);
routes.get("/list",            [ AuthToken, UserListMid ],       UserListController);
routes.get("/list/:id",        [ AuthToken, UserListOneMid ],    UserListOneController);
routes.delete("/delete",       [ AuthToken, UserDeleteMid ],     UserDeleteController);

export default routes;