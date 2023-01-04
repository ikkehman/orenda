import Users from "../models/Users.js";

function setID(item) {
    var full = {Users: item};
    return full;
  }
 
// Create new users
export const createUsers = async (req, res) => {
    var output = req.body.Users.map(setID);
    // console.log(output)
    try {
        await Users.bulkCreate(output);
        res.status(204).send();
    } catch (err) {
        console.log(err);
    }
}
 