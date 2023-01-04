import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
// Define users
const Users = db.define('users', {
  Users: {
    allowNull: false,
    type: DataTypes.STRING
  }
},{
  freezeTableName: true
});
 
// Export model Users
export default Users;