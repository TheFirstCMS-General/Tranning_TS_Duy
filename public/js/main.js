//
// document.addEventListener('DOMContentLoaded', () => {
//     const classNameInput = document.getElementById('class-name');
//     const createSessionBtn = document.getElementById('create-session');
//     const attendanceSection = document.getElementById('attendance-section');
//     const sessionClassName = document.getElementById('session-class-name');
//     const sessionDate = document.getElementById('session-date');
//     const studentTableBody = document.querySelector('#student-table tbody');
//     const exportReportBtn = document.getElementById('export-report');
//     const importFileInput = document.getElementById('import-file');
//
//     // Tạo phiên điểm danh
//     createSessionBtn.addEventListener('click', () => {
//         const className = classNameInput.value.trim();
//         if (className === '') {
//             alert('Vui lòng nhập tên lớp');
//             return;
//         }
//
//         sessionClassName.textContent = className;
//         sessionDate.textContent = new Date().toLocaleString();
//         attendanceSection.classList.remove('hidden');
//
//         // Hiển thị danh sách sinh viên
//         studentTableBody.innerHTML = ''; // Xóa các sinh viên cũ (nếu có)
//         students.forEach((student) => {
//             const row = document.createElement('tr');
//
//             const nameCell = document.createElement('td');
//             nameCell.textContent = student.name;
//             row.appendChild(nameCell);
//
//             const dobCell = document.createElement('td');
//             dobCell.textContent = student.dob || '';
//             row.appendChild(dobCell);
//
//             const genderCell = document.createElement('td');
//             genderCell.textContent = student.gender || '';
//             row.appendChild(genderCell);
//
//             const addressCell = document.createElement('td');
//             addressCell.textContent = student.address || '';
//             row.appendChild(addressCell);
//
//             const phoneCell = document.createElement('td');
//             phoneCell.textContent = student.phone || '';
//             row.appendChild(phoneCell);
//
//             const statusCell = document.createElement('td');
//             const statusSelect = document.createElement('select');
//             ['Đến', 'Đi muộn', 'Nghỉ có phép', 'Nghỉ không phép'].forEach(status => {
//                 const option = document.createElement('option');
//                 option.value = status;
//                 option.textContent = status;
//                 statusSelect.appendChild(option);
//             });
//             statusCell.appendChild(statusSelect);
//             row.appendChild(statusCell);
//
//             const noteCell = document.createElement('td');
//             const noteInput = document.createElement('input');
//             noteInput.type = 'text';
//             noteInput.placeholder = 'Ghi chú';
//             noteCell.appendChild(noteInput);
//             row.appendChild(noteCell);
//
//             studentTableBody.appendChild(row);
//         });
//     });
//
//     // Xuất báo cáo điểm danh
//     exportReportBtn.addEventListener('click', () => {
//         const reportData = [];
//         document.querySelectorAll('#student-table tbody tr').forEach((row) => {
//             const name = row.cells[0].textContent;
//             const dob = row.cells[1].textContent;
//             const gender = row.cells[2].textContent;
//             const address = row.cells[3].textContent;
//             const phone = row.cells[4].textContent;
//             const status = row.cells[5].querySelector('select').value;
//             const note = row.cells[6].querySelector('input').value;
//             reportData.push({ name, dob, gender, address, phone, status, note });
//         });
//
//         const report = {
//             className: sessionClassName.textContent,
//             sessionDate: sessionDate.textContent,
//             students: reportData
//         };
//
//         downloadReportAsJSON(report);
//     });
//
//     // Hàm tải báo cáo dưới dạng JSON
//     function downloadReportAsJSON(report) {
//         const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 7));
//         const downloadAnchor = document.createElement('a');
//         downloadAnchor.setAttribute("href", dataStr);
//         downloadAnchor.setAttribute("download", "attendance_report.json");
//         document.body.appendChild(downloadAnchor);
//         downloadAnchor.click();
//         downloadAnchor.remove();
//     }
//
//     // Import danh sách sinh viên từ file JSON
//     importFileInput.addEventListener('change', (event) => {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = (e) => {
//                 try {
//                     students = JSON.parse(e.target.result);
//                     alert('Import danh sách sinh viên thành công!');
//                 } catch (error) {
//                     alert('File không hợp lệ!');
//                 }
//             };
//             reader.readAsText(file);
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    const classNameInput = document.getElementById('class-name');
    const createSessionBtn = document.getElementById('create-session');
    const attendanceSection = document.getElementById('attendance-section');
    const sessionClassName = document.getElementById('session-class-name');
    const sessionDate = document.getElementById('session-date');
    const studentTableBody = document.querySelector('#student-table tbody');
    const exportReportBtn = document.getElementById('export-report');
    const importFileInput = document.getElementById('import-file');

    // Thống kê
    const countPresent = document.getElementById('count-present');
    const countLate = document.getElementById('count-late');
    const countExcused = document.getElementById('count-excused');
    const countUnexcused = document.getElementById('count-unexcused');

    let students = [];

    // Tạo phiên điểm danh
    createSessionBtn.addEventListener('click', () => {
        const className = classNameInput.value.trim();
        if (className === '') {
            alert('Vui lòng nhập tên lớp');
            return;
        }

        sessionClassName.textContent = className;
        sessionDate.textContent = new Date().toLocaleString();
        attendanceSection.classList.remove('hidden');

        // Hiển thị danh sách sinh viên
        studentTableBody.innerHTML = ''; // Xóa các sinh viên cũ (nếu có)
        students.forEach((student) => {
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = student.name;
            row.appendChild(nameCell);

            const dobCell = document.createElement('td');
            dobCell.textContent = student.dob || '';
            row.appendChild(dobCell);

            const genderCell = document.createElement('td');
            genderCell.textContent = student.gender || '';
            row.appendChild(genderCell);

            const addressCell = document.createElement('td');
            addressCell.textContent = student.address || '';
            row.appendChild(addressCell);

            const phoneCell = document.createElement('td');
            phoneCell.textContent = student.phone || '';
            row.appendChild(phoneCell);

            const statusCell = document.createElement('td');
            const statusSelect = document.createElement('select');
            ['Đến', 'Đi muộn', 'Nghỉ có phép', 'Nghỉ không phép'].forEach(status => {
                const option = document.createElement('option');
                option.value = status;
                option.textContent = status;
                statusSelect.appendChild(option);
            });
            statusCell.appendChild(statusSelect);
            row.appendChild(statusCell);

            const noteCell = document.createElement('td');
            const noteInput = document.createElement('input');
            noteInput.type = 'text';
            noteInput.placeholder = 'Ghi chú';
            noteCell.appendChild(noteInput);
            row.appendChild(noteCell);

            // Lắng nghe sự thay đổi của trạng thái
            statusSelect.addEventListener('change', updateStatistics);

            studentTableBody.appendChild(row);
        });

        // Cập nhật thống kê ngay sau khi tạo phiên
        updateStatistics();
    });

    // Hàm cập nhật thống kê
    function updateStatistics() {
        let presentCount = 0;
        let lateCount = 0;
        let excusedCount = 0;
        let unexcusedCount = 0;

        document.querySelectorAll('#student-table tbody tr').forEach((row) => {
            const status = row.cells[5].querySelector('select').value;
            if (status === 'Đến') presentCount++;
            else if (status === 'Đi muộn') lateCount++;
            else if (status === 'Nghỉ có phép') excusedCount++;
            else if (status === 'Nghỉ không phép') unexcusedCount++;
        });

        countPresent.textContent = presentCount;
        countLate.textContent = lateCount;
        countExcused.textContent = excusedCount;
        countUnexcused.textContent = unexcusedCount;
    }

    // Xuất báo cáo điểm danh
    exportReportBtn.addEventListener('click', () => {
        const reportData = [];
        document.querySelectorAll('#student-table tbody tr').forEach((row) => {
            const name = row.cells[0].textContent;
            const dob = row.cells[1].textContent;
            const gender = row.cells[2].textContent;
            const address = row.cells[3].textContent;
            const phone = row.cells[4].textContent;
            const status = row.cells[5].querySelector('select').value;
            const note = row.cells[6].querySelector('input').value;
            reportData.push({ name, dob, gender, address, phone, status, note });
        });

        const report = {
            className: sessionClassName.textContent,
            sessionDate: sessionDate.textContent,
            statistics: {
                present: countPresent.textContent,
                late: countLate.textContent,
                excused: countExcused.textContent,
                unexcused: countUnexcused.textContent
            },
            students: reportData
        };

        downloadReportAsJSON(report);
    });

    // Hàm tải báo cáo dưới dạng JSON
    function downloadReportAsJSON(report) {
        const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(report, null, 7));
        const downloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", "attendance_report.json");
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }

    // Import danh sách sinh viên từ file JSON
    importFileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    students = JSON.parse(e.target.result);
                    alert('Import danh sách sinh viên thành công!');
                } catch (error) {
                    alert('File không hợp lệ!');
                }
            };
            reader.readAsText(file);
        }
    });
});
