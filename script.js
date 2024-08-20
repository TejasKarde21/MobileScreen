
//     // Function to update the priority button text and href based on the URL parameter
//     function updatePriorityButton() {
//         const urlParams = new URLSearchParams(window.location.search);
//         const priority = urlParams.get('priority');

//         if (priority) {
//             const button = document.getElementById('.btn.button1');
//             button.textContent = `Update Priority (${priority})`;
//             button.href = `index2.html?priority=${priority}`;
//         }
//     }

//     // Call the function to update the button on page load
//     document.addEventListener('DOMContentLoaded', updatePriorityButton);


//    function updatePriority(priority) {
//             // Redirect to index1.html with the selected priority
//             window.location.href = `index.html?priority=${priority}`;
//         }

//         // Add event listeners to priority options
//         document.addEventListener('DOMContentLoaded', () => {
//             document.querySelectorAll('.priority-option').forEach(option => {
//                 option.addEventListener('click', () => {
//                     const priority = option.getAttribute('data-priority');
//                     updatePriority(priority);
//                 });
//             });
//         });


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDueDate = document.getElementById('taskDueDate').value;
    const taskPriority = document.getElementById('taskPriority').value;
    const taskProgress = document.getElementById('taskProgress').value;

    // Example of saving the task data (this could be saved to local storage or sent to a server)
    console.log({
        title: taskTitle,
        description: taskDescription,
        dueDate: taskDueDate,
        priority: taskPriority,
        progress: taskProgress
    });

    // Reset form
    event.target.reset();
});