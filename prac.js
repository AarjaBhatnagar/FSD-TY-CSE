function submitStudentFeedback() {
    const studentName = document.getElementById('studentName').value;
    const course = document.getElementById('course').value;
    const panel = document.getElementById('panel').value;
    const teacher = document.getElementById('teacher').value;
    const attendance = document.getElementById('attendance').value;
    const courseFeedback = document.getElementById('courseFeedback').value;
    const teacherFeedback = document.getElementById('teacherFeedback').value;
    const courseRating = document.getElementById('courseRating').value;
    const teacherRating = document.getElementById('teacherRating').value;
    const overallRating = document.querySelector('input[name="overallRating"]:checked').value;
    const suggestions = document.getElementById('suggestions').value;

    if (courseRating && teacherRating && overallRating) {
        alert('Feedback submitted successfully!\n\nName: ' + studentName + '\nCourse: ' + course + '\nPanel: ' + panel + '\nTeacher: ' + teacher + '\nAttendance: ' + attendance + '\nCourse Feedback: ' + courseFeedback + '\nTeacher Feedback: ' + teacherFeedback + '\nCourse Rating: ' + courseRating + '\nTeacher Rating: ' + teacherRating + '\nOverall Rating: ' + overallRating + '\nSuggestions: ' + suggestions);
        // Here you can add code to send the feedback to the server
    } else {
        alert('Please fill out all required fields.');
    }
}