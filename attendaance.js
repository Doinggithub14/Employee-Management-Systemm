document.addEventListener('DOMContentLoaded', function() {
    const clockInBtn = document.getElementById('clock-in-btn');
    const clockOutBtn = document.getElementById('clock-out-btn');
    const clockInTimeElem = document.getElementById('clock-in-time');
    const clockOutTimeElem = document.getElementById('clock-out-time');
    const totalHoursElem = document.getElementById('total-hours');
    const hoursTableBody = document.querySelector('#hours-table tbody');

    let clockInTime = null;

    const shiftTimings = {
        Monday: { start: '09:00', end: '17:00' },
        Tuesday: { start: '09:00', end: '17:00' },
        Wednesday: { start: '09:00', end: '17:00' },
        Thursday: { start: '09:00', end: '17:00' },
        Friday: { start: '09:00', end: '17:00' },
        Saturday: { start: '10:00', end: '14:00' },
        Sunday: { start: '10:00', end: '14:00' }
    };

    function addRow(day, date, shiftStart, shiftEnd, clockIn, clockOut, totalHours) {
        const newRow = hoursTableBody.insertRow();
        newRow.insertCell(0).innerText = day;
        newRow.insertCell(1).innerText = date;
        newRow.insertCell(2).innerText = shiftStart;
        newRow.insertCell(3).innerText = shiftEnd;
        newRow.insertCell(4).innerText = clockIn;
        newRow.insertCell(5).innerText = clockOut;
        newRow.insertCell(6).innerText = totalHours.toFixed(2);
    }

    function getDayName(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    }

    clockInBtn.addEventListener('click', function() {
        clockInTime = new Date();
        clockInTimeElem.innerText = `Clock In Time: ${clockInTime.toLocaleTimeString()}`;
        
        fetch('http://localhost:3000/clock-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ employee_id: 1 }) // Replace with dynamic employee ID
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
        })
        .catch(error => console.error('Error:', error));
    });

    clockOutBtn.addEventListener('click', function() {
        const clockOutTime = new Date();
        clockOutTimeElem.innerText = `Clock Out Time: ${clockOutTime.toLocaleTimeString()}`;
        
        if (clockInTime) {
            const totalHours = (clockOutTime - clockInTime) / 1000 / 60 / 60;
            totalHoursElem.innerText = `Total Hours: ${totalHours.toFixed(2)}`;

            const date = clockInTime.toLocaleDateString();
            const dayName = getDayName(clockInTime);
            const shiftStart = shiftTimings[dayName].start;
            const shiftEnd = shiftTimings[dayName].end;

            addRow(dayName, date, shiftStart, shiftEnd, clockInTime.toLocaleTimeString(), clockOutTime.toLocaleTimeString(), totalHours);

            fetch('http://localhost:3000/clock-out', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ employee_id: 1 }) // Replace with dynamic employee ID
            })
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
            })
            .catch(error => console.error('Error:', error));
        } else {
            alert('Please clock in first.');
        }
    });
    document.getElementById('redirect-btn').addEventListener('click', function() {
        window.location.href = 'perfomance.html';
    });
});
