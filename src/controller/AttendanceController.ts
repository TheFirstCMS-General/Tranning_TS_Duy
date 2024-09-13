import { Request, Response } from 'express';
import AttendanceService from '../service/AttendanceService';
import { AttendanceSession } from '../model/AttendanceSession';

export class AttendanceController {
    static async createSession(req: Request, res: Response): Promise<void> {
        const sessionData: AttendanceSession = req.body;
        await AttendanceService.createSession(sessionData);
        res.status(201).send('Session created');
    }

    static async getAllSessions(req: Request, res: Response): Promise<void> {
        const sessions = await AttendanceService.getAllSessions();
        res.json(sessions);
    }

    static async getSessionById(req: Request, res: Response): Promise<void> {
        const sessionId = req.params.id;
        const session = await AttendanceService.getSessionById(sessionId);
        if (session) {
            res.json(session);
        } else {
            res.status(404).send('Session not found');
        }
    }
}
