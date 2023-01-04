import Tasks from "../models/Tasks.js";
 
// Get tasks 
export const getTasks = async (req, res) => {
    try {
        const tasks = await Tasks.findAll({
            where: {
                user: req.body.user
            },
            attributes: ['tasks'],
        });
        res.send(tasks);
    } catch (err) {
        console.log(err);
    }
}
 
// Create new tasks
export const createTasks = async (req, res) => {
    function setID(item) {
        var full = {tasks: item,user : req.body.user};
        return full;
      }
    var output = req.body.tasks.map(setID);
    // console.log(output);
    try {
        await Tasks.bulkCreate(output);
        res.status(204).send();
    } catch (err) {
        console.log(err);
    }
}
 
// Delete tasks
export const deleteTasks = async (req, res) => {
    try {
        await Tasks.destroy({
            where: {
                user: req.body.user,
                tasks: req.body.tasks
            }
        });
        res.status(204).send();
    } catch (err) {
        console.log(err);
    }
}