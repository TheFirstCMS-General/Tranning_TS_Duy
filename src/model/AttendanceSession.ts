import { Student } from './Student';
import { AttendanceStatus } from './AttendanceStatus';

interface AttendanceRecord {
    student: Student;
    status: AttendanceStatus;
    note?: string;
}

export class AttendanceSession {
    id: string;
    className: string;
    date: Date;
    records: AttendanceRecord[] = [];

    constructor(id: string, className: string, date: Date) {
        this.id = id;
        this.className = className;
        this.date = date;
    }

    addStudent(student: Student) {
        const record: AttendanceRecord = {
            student: student,
            status: AttendanceStatus.Present // Default status
        };
        this.records.push(record);
    }

    updateStatus(studentId: number, status: AttendanceStatus, note?: string) {
        const record = this.records.find(rec => rec.student.id === studentId);
        if (record) {
            record.status = status;
            if (note) {
                record.note = note;
            }
        }
    }

    exportReport() {
        return {
            className: this.className,
            date: this.date.toISOString(),
            totalStudents: this.records.length,
            present: this.records.filter(rec => rec.status === AttendanceStatus.Present).length,
            late: this.records.filter(rec => rec.status === AttendanceStatus.Late).length,
            excusedAbsence: this.records.filter(rec => rec.status === AttendanceStatus.ExcusedAbsence).length,
            unexcusedAbsence: this.records.filter(rec => rec.status === AttendanceStatus.UnexcusedAbsence).length,
            details: this.records.map(rec => ({
                name: rec.student.name,
                dob: rec.student.dob,
                status: rec.status,
                note: rec.note || ""
            }))
        };
    }
}
