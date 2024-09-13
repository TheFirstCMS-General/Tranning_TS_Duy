import { Router } from 'express';
import { AttendanceController } from '../controller/AttendanceController';

const router = Router();

router.post('/create', AttendanceController.createSession);
router.get('/sessions', AttendanceController.getAllSessions);
router.get('/session/:id', AttendanceController.getSessionById);

export default router;
