import { Class } from '../model/Class';

class ClassService {
    private static classes: Class[] = [];

    static async createClass(cls: Class): Promise<void> {
        this.classes.push(cls);
        // Lưu dữ
    }

    static async getAllClasses(): Promise<Class[]> {
        // Trả về
        return this.classes;
    }

    static async getClassById(id: string): Promise<Class | undefined> {
        // Trả về
        return this.classes.find(cls => cls.id === id);
    }
}

export default ClassService;
