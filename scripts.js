document.getElementById('additional-details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = {};
    
    formData.forEach((value, key) => {
        data[key] = value;
    });

    alert('Additional details submitted successfully!\n\n' + JSON.stringify(data, null, 2));
    
    event.target.reset();
});
