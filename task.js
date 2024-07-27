document.addEventListener('DOMContentLoaded', function() {
    const tasks = [
        { id: 1, title: 'Inspect Sanitation Facilities', deadline: '2024-08-01' },
        { id: 2, title: 'Prepare Weekly Report', deadline: '2024-07-30' },
        { id: 3, title: 'Community Outreach Program', deadline: '2024-08-05' }
    ];

    const tasksList = document.getElementById('tasks');
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.innerHTML = <strong>${task.title}</strong>
        (Deadline: ${task.deadline});
        tasksList.appendChild(listItem);
    });

    const form = document.getElementById('task-update-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskId = document.getElementById('task-id').value;
        const taskStatus = document.getElementById('task-status').value;
        const taskComments = document.getElementById('task-comments').value;
        const taskPhoto = document.getElementById('task-photo').files[0];

        // Here you can add your logic to send the form data to your server
        // For this example, we'll just show a success message
        console.log({
            taskId,
            taskStatus,
            taskComments,
            taskPhoto
        });

        successMessage.classList.remove('hidden');
        form.reset();
    });
});
