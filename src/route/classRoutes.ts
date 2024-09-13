import { Router } from 'express';
import { ClassController } from '../controller/ClassController';

const router = Router();

router.post('/create', ClassController.createClass);
router.get('/classes', ClassController.getAllClasses);
router.get('/class/:id', ClassController.getClassById);

export default router;
