import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import attendanceRoutes from './route/attendanceRoutes';
import classRoutes from './route/classRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/attendance', attendanceRoutes);
app.use('/api/class', classRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
