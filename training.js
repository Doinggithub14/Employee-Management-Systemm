document.addEventListener('DOMContentLoaded', function() {
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(event) {
            event.preventDefault();
            localStorage.removeItem('loggedIn');
            window.location.href = 'login.html';
        });
    }

    // Sample Data
    const upcomingSessions = [
        { date: '2024-08-10', title: 'Introduction to JavaScript' },
        { date: '2024-08-15', title: 'Advanced CSS Techniques' }
    ];

    const courses = [
        { name: 'JavaScript Basics', status: 'Available' },
        { name: 'CSS Grid Layout', status: 'Available' }
    ];

    const completedCourses = [
        { name: 'HTML Fundamentals', date: '2024-07-15' }
    ];

    const trainingGoals = [
        { goal: 'Complete JavaScript course', progress: 'In Progress' }
    ];

    // Populate Upcoming Sessions
    const sessionList = document.getElementById('upcoming-sessions');
    upcomingSessions.forEach(session => {
        const li = document.createElement('li');
        li.textContent = `${session.date}: ${session.title}`;
        sessionList.appendChild(li);
    });

    // Populate Training Courses
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} - ${course.status}`;
        courseList.appendChild(li);
    });

    // Populate Completed Courses
    const completedList = document.getElementById('completed-courses-list');
    completedCourses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} - Completed on ${course.date}`;
        completedList.appendChild(li);
    });

    // Training Goals and Progress
    const goalProgress = document.getElementById('goal-progress');
    trainingGoals.forEach(goal => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${goal.goal}</strong> - ${goal.progress}`;
        goalProgress.appendChild(div);
    });

    // Initialize Calendar (Sample static content, for a real calendar consider using a library)
    const calendar = document.getElementById('calendar');
    calendar.textContent = 'Calendar view goes here';
});
