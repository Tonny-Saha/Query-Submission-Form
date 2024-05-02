
    document.addEventListener('DOMContentLoaded', () => {
        let form = document.querySelector('form');
        let submitButton = form.querySelector('.submit');
        
        form.addEventListener('submit', handleSubmit);
    
        function handleSubmit(event) {
            event.preventDefault();
    
            // Disable submit button to prevent multiple submissions
            submitButton.disabled = true;
            submitButton.classList.add('disabled');
    
            let formData = new FormData(form);
    
            // Extracting values from form fields
            let name = formData.get('name');
            let phone = formData.get('phone');
            let query = formData.get('query');
            let subjects = []; // Array to store selected subjects
    
            // Extracting selected subjects
            formData.getAll('subject').forEach(subject => {
                if (subject) {
                    subjects.push(subject);
                }
            });
           
            // Check if at least one subject is checked
            if (subjects.length === 0) {
                alert('Please select at least one subject.');
                submitButton.disabled = false;
                submitButton.classList.remove('disabled');
                return; // Prevent form submission
            }
    

            let districtInput = document.querySelector('.district');
            let districtName = districtInput ? districtInput.value : null;
    
            let thanaSelect = document.getElementById('thanaDropdownContent');
            let selectedThanaOption = thanaSelect.options[thanaSelect.selectedIndex];
            let thanaName = selectedThanaOption ? selectedThanaOption.textContent : '';
            let thanaId = selectedThanaOption ? selectedThanaOption.value : '';

            // Creating an object with the required fields
            let data = {
                name: name,
                phone: phone,
                query: query,
                subjects: subjects, // Use the array of subjects
                districtName: districtName,
                thanaName: thanaName,
            };
           
            let jsonData = JSON.stringify(data);
            console.log(jsonData);
           
            fetch('https://salesforcedev.bergerbd.com/api/QuerySubmission/Create', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: jsonData
            })
            // .then(res => res.json())
            .then(result => {
                console.log(result); // This will log the API response to the console
                // Show thank you pop-up
                alert('Thank you for your interest. We will get back to you soon.');
                console.log('Form Data:', data); // Log the form data to console
            
                // Reset form
                form.reset();
                thanaSelect && (thanaSelect.innerHTML = "<option value=''>Select Thana</option>");
            
                // Enable submit button after form submission completes
                submitButton.disabled = false;
                submitButton.classList.remove('disabled');
            })
            .catch(err => {
                console.log(err);
                // Enable submit button in case of error
                submitButton.disabled = false;
                submitButton.classList.remove('disabled');
            });
            
        }
    });
    

document.addEventListener('DOMContentLoaded',() => {
    window.onload = function() {
        var textarea = document.getElementById("query");
        var alertShown = false;

        textarea.addEventListener("blur", function(event) {
            var inputValue = textarea.value.trim();
            if (inputValue.length > 0 && inputValue.length < 5 && !alertShown) {
                alert("Please enter at least 5 characters.");
                textarea.focus();
                alertShown = true;
            }
        });

        textarea.addEventListener("input", function(event) {
            alertShown = false;
        });
    };

})

