/**
* Import modules
*/
import db from '../lib/connect';
import { DataTypes } from 'sequelize';
import jwt from 'jsonwebtoken';

  
/**
 * Define attributes
 */
const User = db.sequelize.define('User',{
Name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: false,
},
Email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
},
Password: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: false,
},
});

User.prototype.getToken = function(){
    return "Bearer " + jwt.sign({ id: this.id }, process.env.AUTH_CONFIG_SECRET, { });
}
User.sync();

export default User;