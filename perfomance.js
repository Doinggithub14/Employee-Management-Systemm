document.addEventListener('DOMContentLoaded', function() {
    // Load performance data (mock data for demonstration)
    const overallRating = document.getElementById('overall-rating');
    const goalsAchievement = document.getElementById('goals-achievement');
    const keyMetrics = document.getElementById('key-metrics');
    const reviewHistory = document.getElementById('review-history');
    const goalsList = document.getElementById('goals-list');
    const achievementsList = document.getElementById('achievements-list');
    const trainingCourses = document.getElementById('training-courses');
    const certifications = document.getElementById('certifications');
    const performanceChart = document.getElementById('performance-chart').getContext('2d');

    if (overallRating) {
        overallRating.textContent = '4.5 / 5'; // Example rating
    }

    if (goalsAchievement) {
        goalsAchievement.innerHTML = `
            <p>Goals Set: 5</p>
            <p>Goals Achieved: 3</p>
        `;
    }

    if (keyMetrics) {
        keyMetrics.textContent = 'Sales: $50,000 | Projects Completed: 10';
    }

    if (reviewHistory) {
        reviewHistory.innerHTML = `
            <li>Review 1: Excellent performance - Reviewer: Manager A</li>
            <li>Review 2: Needs improvement - Reviewer: Manager B</li>
        `;
    }

    if (goalsList) {
        goalsList.innerHTML = `
            <li>Goal 1: Increase sales by 10%</li>
            <li>Goal 2: Complete 3 major projects</li>
        `;
    }

    if (achievementsList) {
        achievementsList.innerHTML = `
            <li>Employee of the Month - January</li>
            <li>Completed Certification in Project Management</li>
        `;
    }

    if (trainingCourses) {
        trainingCourses.innerHTML = `
            <p>Course 1: Advanced JavaScript</p>
            <p>Course 2: Effective Communication</p>
        `;
    }

    if (certifications) {
        certifications.innerHTML = `
            <p>Certification 1: Certified Scrum Master</p>
            <p>Certification 2: Advanced Data Analytics</p>
        `;
    }

    // Example performance analytics chart
    if (performanceChart) {
        new Chart(performanceChart, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Sales',
                    data: [5000, 7000, 6000, 8000, 7500],
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
});
