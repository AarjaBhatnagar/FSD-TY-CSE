  document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const dob = document.getElementById('dob').value;
    const email = document.getElementById('email').value;
    const contact = document.getElementById('contact').value;
    const program = document.getElementById('program').value;
  
    let errorMessage = '';
  
    if (name.trim() === '') {
      errorMessage += 'Name is required.\n';
    }
  
    if (gender === '') {
        errorMessage += 'Gender is required.\n';
      }

    if (dob.trim() === '') {
        errorMessage += 'DOB is required.\n';
  
    if (email.trim() === '') {
      errorMessage += 'Email is required.\n';
    } else if (!isValidEmail(email)) {
      errorMessage += 'Invalid email format.\n';
    }
  
    if (contact.trim() === '') {
      errorMessage += 'Contact is required.\n';
    } else if (isNaN(contact) || contact.length !== 10) {
      errorMessage += 'Invalid contact number.\n';
    }
  
    if (program === '') {
      errorMessage += 'Program is required.\n';
    }
  
    if (errorMessage !== '') {
      document.getElementById('error-message').textContent = errorMessage;
      return;
    }
  
    document.getElementById('registration-form').reset();
    document.getElementById('error-message').textContent = 'Registration successful!';
  });
  
  function isValidEmail(email) {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }