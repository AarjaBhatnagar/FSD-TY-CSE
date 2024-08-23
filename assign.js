function submitTeacherFeedback() {
    const teacherName = document.getElementById('teacherName').value;
    const studentName = document.getElementById('studentNameT').value;
    const panel = document.getElementById('panel').value;
    const course = document.getElementById('courseT').value;
    const studentFeedback = document.getElementById('studentFeedback').value;
    const studentBehaviour = document.querySelector('input[name="sb"]:checked').value;
    const overallRating = document.querySelector('input[name="rating"]:checked').value;

    // Validate form fields
    if (
        teacherName.trim() === '' ||
        studentName.trim() === '' ||
        course.trim() === '' ||
        studentFeedback.trim() === '' ||
        !studentBehaviour ||
        !overallRating
    ) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create an object with the form data
    const formData = {
        teacherName,
        studentName,
        panel,
        course,
        studentFeedback,
        studentBehaviour,
        overallRating
    };

    // Send the form data to the server (replace this with your actual server-side logic)
    console.log('Submitting teacher feedback:', formData);

    // Reset the form
    document.getElementById('teacherFeedbackForm').reset();

    // Display a success message
    alert('Teacher feedback submitted successfully!');
}