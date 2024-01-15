import express from 'express';

const router = express.Router();
import StudentController from '../controllers/studentController.js';

router.get('/',StudentController.getAllDoc);
router.post('/',StudentController.createDoc);
router.get('/:id',StudentController.getSingleDOcById);
router.put('/:id',StudentController.updateDocById);
router.delete('/:id',StudentController.deleteDocById);

export default router;


