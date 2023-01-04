// Import
import express from "express";

import { 
    createUsers
} from "../controllers/Users.js";

import { 
    createTasks,
    deleteTasks,
    getTasks
} from "../controllers/Tasks.js";

const router = express.Router();

// Route create user
router.post('/api/register', createUsers);

// Route assign tasks to user
router.post('/api/assign', createTasks);

// Route remove task(s) from user
router.post('/api/unassign', deleteTasks);

// Route list all common tasks
router.get('/api/tasks/common', getTasks);

// export router
export default router;