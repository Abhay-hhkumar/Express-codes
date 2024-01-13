import express from 'express';
const router = express.Router();

import StudentController from '../controllers/studentController.js';

router.get('/getsessioninfo',StudentController.get_session_info);
router.get('/deletesession',StudentController.delete_session);
router.get('/regeneratesession',StudentController.regenerated_session);
router.get('/examplesession',StudentController.session_example);
router.get('/getdata',StudentController.get_session_data);

export default router;