import { AttendanceSession } from '../model/AttendanceSession';

class AttendanceService {
    private static sessions: AttendanceSession[] = [];

    static async createSession(session: AttendanceSession): Promise<void> {
        this.sessions.push(session);
        // Lưu dữ liệu vào file JSON hoặc cơ sở dữ liệu
    }

    static async getAllSessions(): Promise<AttendanceSession[]> {
        // Trả về dữ liệu từ file JSON hoặc cơ sở dữ liệu
        return this.sessions;
    }

    static async getSessionById(id: string): Promise<AttendanceSession | undefined> {
        // Trả về dữ liệu từ file JSON hoặc cơ sở dữ liệu
        return this.sessions.find(session => session.id === id);
    }
}

export default AttendanceService;
