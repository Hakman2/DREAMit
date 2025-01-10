// const form = document.getElementById('reminder-form');
// const reminderList = document.getElementById('reminder-list');
// const clearAllButton = document.getElementById('clear-all');
// // const Dashboard=document.getElementsByClassName('.dash')
// // const Active=document.getElementsByClassName('.active')
// // const Ask=document.getElementsByClassName('.ask')



// let contacts = [];
// let trash = [];
// let recentContacts = []; // Array to hold recent contacts
// let currentContactIndex; // To store index for confirmation during deletion

// Function to load the appropriate section
function loadSection(section) {
  document.getElementById("Dashboard-section").classList.add("hidden");
  document.getElementById("active-section").classList.add("hidden");
  document.getElementById("FQA-section").classList.add("hidden");

  if (section === "dash") {
    document.getElementById("Dashboard-section").classList.remove("hidden");
  } else if (section === "active") {
    document.getElementById("active-section").classList.remove("hidden");
  } else if (section === "ask") {
    document.getElementById("FQA-section").classList.remove("hidden");
  }
}
// // Initialize Notifications
// if ('Notification' in window && Notification.permission !== 'granted') {
//   Notification.requestPermission();
// }

// // Event Listener for Form Submission
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const title = document.getElementById('title').value;
//   const description = document.getElementById('description').value;
//   const dateTime = new Date(document.getElementById('date-time').value);

//   if (dateTime < new Date()) {
//     alert('Please select a future date and time.');
//     return;
//   }

//   const reminder = { title, description, dateTime: dateTime.toISOString() };
//   saveReminder(reminder);
//   displayReminders();
//   form.reset();
// });

// // Save Reminder to Local Storage
// function saveReminder(reminder) {
//   const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
//   reminders.push(reminder);
//   localStorage.setItem('reminders', JSON.stringify(reminders));
// }

// // Display Reminders
// function displayReminders() {
//   const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
//   reminders.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime));

//   reminderList.innerHTML = reminders.map(
//     (r, i) =>
//       `<div>
//         <h3>${r.title}</h3>
//         <p>${r.description}</p>
//         <p>${new Date(r.dateTime).toLocaleString()}</p>
//         <button onclick="deleteReminder(${i})">Delete</button>
//       </div>`
//   ).join('');
// }

// // Delete a Specific Reminder
// function deleteReminder(index) {
//   const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
//   reminders.splice(index, 1);
//   localStorage.setItem('reminders', JSON.stringify(reminders));
//   displayReminders();
// }

// // Clear All Reminders
// clearAllButton.addEventListener('click', () => {
//   if (confirm('Are you sure you want to clear all reminders?')) {
//     localStorage.removeItem('reminders');
//     displayReminders();
//   }
// });

// // Notification Check
// setInterval(() => {
//   const reminders = JSON.parse(localStorage.getItem('reminders')) || [];
//   reminders.forEach((r, index) => {
//     const reminderTime = new Date(r.dateTime).getTime();
//     const currentTime = new Date().getTime();

//     if (reminderTime <= currentTime) {
//       new Notification(`Reminder:   ${r.title}, { body: r.description }`);
//       deleteReminder(index);
//     }
//   });
// }, 60000); // Check every minute

// // Initial Display of Reminders
// displayReminders();