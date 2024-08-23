// Get the form elements
const studentForm = document.getElementById('student-form');
const teacherForm = document.getElementById('teacher-form');
const studentBtn = document.getElementById('student-btn');
const teacherBtn = document.getElementById('teacher-btn');
const submitStudentForm = document.getElementById('submit-student-form');

// Function to check attendance
function checkAttendance() {
    // Add your attendance checking logic here
    // For demo purposes, assume attendance is checked
    return true; // Replace with your actual attendance checking logic
}

// Function to submit student form
function submitStudentFormHandler(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const panel = document.getElementById('panel').value;
    const course = document.getElementById('course').value;
    const teacher = document.getElementById('teacher').value;
    const courseFeedback = document.getElementById('course-feedback').value;
    const ratingCourse = document.getElementById('rating-course').value;
    const teacherFeedback = document.getElementById('teacher-feedback').value;
    const ratingTeacher = document.getElementById('rating-teacher').value;
    const suggestions = document.getElementById('suggestions').value;

    if (checkAttendance()) {
        // Submit the form
        console.log('Form submitted successfully!');
        alert('Form submitted successfully!');
    } else {
        alert('Attendance is below 80%, unable to accept form');
    }
}

// Event listeners
studentBtn.addEventListener('click', () => {
    studentForm.style.display = 'block';
    teacherForm.style.display = 'none';
});

teacherBtn.addEventListener('click', () => {
    studentForm.style.display = 'none';
    teacherForm.style.display = 'block';
});

submitStudentForm.addEventListener('click', submitStudentFormHandler);