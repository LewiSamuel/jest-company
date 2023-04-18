/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
import jwt from 'jsonwebtoken';
import User from "./User";

  
/**
 * Define attributes
 */
const Post = db.sequelize.define('Post',{
Img: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: false,
},
Description: {
    type: DataTypes.TEXT,
    allowNull: true,
    unique: false,
},
Author: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    references: {
        model: User,
        key: 'id'
    }
},
});

Post.sync();

export default Post;