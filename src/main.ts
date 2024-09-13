import express from 'express';
import bodyParser from 'body-parser';
import attendanceRoutes from './route/attendanceRoutes';
import classRoutes from './route/classRoutes';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/attendance', attendanceRoutes);
app.use('/class', classRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
