import { Request, Response } from 'express';
import ClassService from '../service/ClassService';
import { Class } from '../model/Class';

export class ClassController {
    static async createClass(req: Request, res: Response): Promise<void> {
        const classData: Class = req.body;
        await ClassService.createClass(classData);
        res.status(201).send('Class created');
    }

    static async getAllClasses(req: Request, res: Response): Promise<void> {
        const classes = await ClassService.getAllClasses();
        res.json(classes);
    }

    static async getClassById(req: Request, res: Response): Promise<void> {
        const classId = req.params.id;
        const classDetail = await ClassService.getClassById(classId);
        if (classDetail) {
            res.json(classDetail);
        } else {
            res.status(404).send('Class not found');
        }
    }
}
