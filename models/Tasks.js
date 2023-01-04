import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
// Define task
const Tasks = db.define('tasks', {
  user: {
    type: DataTypes.STRING
  },
  tasks: {
    type: DataTypes.STRING
  }
},{
  freezeTableName: true
});
 
// Export model tasks
export default Tasks;