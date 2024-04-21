
// District dropdown
// document.addEventListener('DOMContentLoaded', () => {
//     const selectDrop = document.querySelector('.district'); // Selecting dropdown by class name

//     // Add a demo text as the first option
//     selectDrop.innerHTML = "<option value=''>Select District</option>";

//     fetch('https://salesforcedev.bergerbd.com/api/district/getAllDistricts')
//         .then(res => res.json())
//         .then(data => {
//             let output = "";
//             data.result.forEach(district => {
//                 output += `<option value="${district.id}" data-district-name="${district.name}">${district.name}</option>`;
//             });
//             selectDrop.innerHTML += output; // Append districts after the demo text
//         })
//         .catch(err => {
//             console.log(err);
//         });

//     // Add event listener to district dropdown
//     selectDrop.addEventListener('change', function() {
//         const selectedOption = this.options[this.selectedIndex];
//         const selectedDistrictId = selectedOption.value;
//         const selectedDistrictName = selectedOption.getAttribute('data-district-name');
//     });
// });

// Thana dropdown
// document.addEventListener('DOMContentLoaded', () => {
//     const districtSelect = document.querySelector('.district'); // Selecting district dropdown by class name
//     const thanaSelect = document.getElementById('thanaDropdown'); // Keep the ID as thanaDropdown

//     // Add event listener to district dropdown
//     districtSelect.addEventListener('change', function() {
//         const selectedDistrictId = this.value; // Get the selected district ID
//         // console.log(selectedDistrictId);
//         fetch(`https://salesforcedev.bergerbd.com/api/thana/getAllThanaByDistrictId/${selectedDistrictId}`)
//             .then(res => {
//                 if (!res.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 return res.json();
//             })
//             .then(data => {
//                 if (data && data.isSuccess && data.result && data.result.thanaResponse) {
//                     const thanaResponse = data.result.thanaResponse;
//                     let thanaOptions = "";
//                     if (thanaResponse !== null) { // Check if thanaResponse is not null
//                         thanaResponse.forEach(thana => {
//                             thanaOptions += `<option value="${thana.id}" data-thana-name="${thana.name}">${thana.name}</option>`;
//                         });
//                     }
//                     else {
//                         console.error('Thana response is null');
//                     }
//                     thanaSelect.innerHTML = thanaOptions;
//                 } else {
//                     throw new Error('Invalid response format or missing data');
//                 }
//             })
//             .catch(err => {
//                 console.error('Fetch error:', err);
//                 thanaSelect.innerHTML = "<option value=''>Select Thana</option>";;
//             });
//     });

//     // Add event listener to reset button
//     const resetButton = document.querySelector('form [type="reset"]');
//     resetButton.addEventListener('click', function() {
//         thanaSelect.innerHTML = "<option value=''>Select Thana</option>";
//     });
// });


// document.addEventListener('DOMContentLoaded', () => {
    // let form = document.querySelector('form');
    // let submitButton = form.querySelector('.submit');
    // form.addEventListener('submit', handleSubmit);

    // function handleSubmit(event){
    //     event.preventDefault();
        
    //     // Disable submit button to prevent multiple submissions
    //     submitButton.disabled = true;
    //     submitButton.classList.add('disabled');

    //     let formData = new FormData(form);

    //     // Extracting values from form fields
    //     let name = formData.get('name');
    //     let phone = formData.get('phone');
    //     let query = formData.get('query');
    //     let subjects = []; // Array to store selected subjects

    //     // Extracting selected subjects
    //     formData.getAll('subject').forEach(subject => {
    //         if (subject) {
    //             subjects.push(subject);
    //         }
    //     });

    //     // Check if at least one subject is checked
    //     if (subjects.length === 0) {
    //         alert('Please select at least one subject.');
    //         submitButton.disabled = false;
    //         submitButton.classList.remove('disabled');
    //         return; // Prevent form submission
    //     }

    //     // Extracting district name and ID
    //     let districtSelect = document.querySelector('.district');
    //     let selectedDistrictOption = districtSelect.options[districtSelect.selectedIndex];
    //     let districtName = selectedDistrictOption.getAttribute('data-district-name');
    //     let districtId = selectedDistrictOption.value;

    //     // Extracting thana name and ID
    //     let thanaSelect = document.querySelector('.thana');
    //     let selectedThanaOption = thanaSelect.options[thanaSelect.selectedIndex];
    //     let thanaName = selectedThanaOption.getAttribute('data-thana-name');
    //     let thanaId = selectedThanaOption.value;

    //     // Creating an object with the required fields
    //     let data = {
    //         name: name,
    //         phone: phone,
    //         query: query,
    //         subjects: subjects, // Use the array of subjects
    //         districtName: districtName,
    //         thanaName: thanaName,
    //     };

    //     let jsonData = JSON.stringify(data);

    //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: jsonData
    //     })
    //     .then(res => res.json())
    //     .then(result => {
    //         console.log(result);
    //         // Show thank you pop-up
    //         alert('Thank you for your interest. We will get back to you soon.');
    //         // Reset form
    //         form.reset();
    //         thanaSelect.innerHTML = "<option value=''>Select Thana</option>";

    //         // Enable submit button after form submission completes
    //         submitButton.disabled = false;
    //         submitButton.classList.remove('disabled');
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         // Enable submit button in case of error
    //         submitButton.disabled = false;
    //         submitButton.classList.remove('disabled');
    //     });
    // }

    // document.addEventListener('DOMContentLoaded', () => {
    //     let form = document.querySelector('form');
    //     let submitButton = form.querySelector('.submit');
    //     form.addEventListener('submit', handleSubmit);
    
    //     // function handleSubmit(event) {
    //     //     event.preventDefault();
    
    //     //     // Disable submit button to prevent multiple submissions
    //     //     submitButton.disabled = true;
    //     //     submitButton.classList.add('disabled');
    
    //     //     let formData = new FormData(form);
    
    //     //     // Extracting values from form fields
    //     //     let name = formData.get('name');
    //     //     let phone = formData.get('phone');
    //     //     let query = formData.get('query');
    //     //     let subjects = []; // Array to store selected subjects
    
    //     //     // Extracting selected subjects
    //     //     formData.getAll('subject').forEach(subject => {
    //     //         if (subject) {
    //     //             subjects.push(subject);
    //     //         }
    //     //     });
    
    //     //     // Check if at least one subject is checked
    //     //     if (subjects.length === 0) {
    //     //         alert('Please select at least one subject.');
    //     //         submitButton.disabled = false;
    //     //         submitButton.classList.remove('disabled');
    //     //         return; // Prevent form submission
    //     //     }
    
    //     //     // Extracting district name and ID
    //     //     let districtSelect = document.querySelector('.district');
    //     //     let selectedDistrictOption = districtSelect ? districtSelect.options[districtSelect.selectedIndex] : null;
    //     //     let districtName = selectedDistrictOption ? selectedDistrictOption.getAttribute('data-district-name') : '';
    //     //     let districtId = selectedDistrictOption ? selectedDistrictOption.value : '';
    
    //     //     // Extracting thana name and ID
    //     //     let thanaSelect = document.querySelector('.thana');
    //     //     let selectedThanaOption = thanaSelect ? thanaSelect.options[thanaSelect.selectedIndex] : null;
    //     //     let thanaName = selectedThanaOption ? selectedThanaOption.getAttribute('data-thana-name') : '';
    //     //     let thanaId = selectedThanaOption ? selectedThanaOption.value : '';
    
    //     //     // Creating an object with the required fields
    //     //     let data = {
    //     //         name: name,
    //     //         phone: phone,
    //     //         query: query,
    //     //         subjects: subjects, // Use the array of subjects
    //     //         districtName: districtName,
    //     //         thanaName: thanaName,
    //     //     };
    
    //     //     let jsonData = JSON.stringify(data);
           
    //     //     fetch('https://jsonplaceholder.typicode.com/posts', {
    //     //         method: 'POST',
    //     //         headers: {
    //     //             'Content-type': 'application/json'
    //     //         },
    //     //         body: jsonData
    //     //     })
    //     //     .then(res => res.json())
    //     //     .then(result => {
    //     //         console.log(result);
    //     //         // Show thank you pop-up
    //     //         alert('Thank you for your interest. We will get back to you soon.');
    //     //         // Reset form
    //     //         form.reset();
    //     //         thanaSelect && (thanaSelect.innerHTML = "<option value=''>Select Thana</option>");
    
    //     //         // Enable submit button after form submission completes
    //     //         submitButton.disabled = false;
    //     //         submitButton.classList.remove('disabled');
    //     //     })
    //     //     .catch(err => {
    //     //         console.log(err);
    //     //         // Enable submit button in case of error
    //     //         submitButton.disabled = false;
    //     //         submitButton.classList.remove('disabled');
    //     //     });
    //     // }

    //     function handleSubmit(event) {
    //         event.preventDefault();
        
    //         // Disable submit button to prevent multiple submissions
    //         if (!submitButton) {
    //             console.error('Submit button is not defined');
    //             return;
    //         }
        
    //         submitButton.disabled = true;
    //         submitButton.classList.add('disabled');
        
    //         if (!form) {
    //             console.error('Form is not defined');
    //             submitButton.disabled = false;
    //             submitButton.classList.remove('disabled');
    //             return;
    //         }
        
    //         let formData = new FormData(form);
        
    //         // Extracting values from form fields
    //         let name = formData.get('name');
    //         let phone = formData.get('phone');
    //         let query = formData.get('query');
    //         let subjects = []; // Array to store selected subjects
        
    //         // Extracting selected subjects
    //         formData.getAll('subject').forEach(subject => {
    //             if (subject) {
    //                 subjects.push(subject);
    //             }
    //         });
        
    //         // Check if at least one subject is checked
    //         if (subjects.length === 0) {
    //             alert('Please select at least one subject.');
    //             submitButton.disabled = false;
    //             submitButton.classList.remove('disabled');
    //             return; // Prevent form submission
    //         }
        
    //         // Extracting district name and ID
    //         let districtSelect = document.querySelector('.district');
    //         let selectedDistrictOption = districtSelect ? districtSelect.options[districtSelect.selectedIndex] : null;
    //         let districtName = selectedDistrictOption ? selectedDistrictOption.getAttribute('data-district-name') : '';
    //         let districtId = selectedDistrictOption ? selectedDistrictOption.value : '';
        
    //         // Extracting thana name and ID
    //         let thanaSelect = document.querySelector('.thana');
    //         let selectedThanaOption = thanaSelect ? thanaSelect.options[thanaSelect.selectedIndex] : null;
    //         let thanaName = selectedThanaOption ? selectedThanaOption.getAttribute('data-thana-name') : '';
    //         let thanaId = selectedThanaOption ? selectedThanaOption.value : '';
        
    //         // Creating an object with the required fields
    //         let data = {
    //             name: name,
    //             phone: phone,
    //             query: query,
    //             subjects: subjects, // Use the array of subjects
    //             districtName: districtName,
    //             thanaName: thanaName,
    //         };
        
    //         let jsonData = JSON.stringify(data);
        
    //         fetch('https://jsonplaceholder.typicode.com/posts', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-type': 'application/json'
    //             },
    //             body: jsonData
    //         })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //             // Show thank you pop-up
    //             alert('Thank you for your interest. We will get back to you soon.');
    //             console.log('Form Data:', data); // Log the form data to console
        
    //             // Reset form
    //             form.reset();
    //             thanaSelect && (thanaSelect.innerHTML = "<option value=''>Select Thana</option>");
        
    //             // Enable submit button after form submission completes
    //             submitButton.disabled = false;
    //             submitButton.classList.remove('disabled');
    //         })
    //         .catch(err => {
    //             console.log(err);
    //             // Enable submit button in case of error
    //             submitButton.disabled = false;
    //             submitButton.classList.remove('disabled');
    //         });
    //     }
        
    // });
    
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
    
            // Extracting district name and ID
            let districtSelect = document.querySelector('.district');
            console.log(districtSelect);
            //let selectedDistrictOption = districtSelect ? districtSelect.options[districtSelect.selectedIndex] : null;
            //let districtName = selectedDistrictOption ? selectedDistrictOption.getAttribute('data-district-name') : '';
            //let districtId = selectedDistrictOption ? selectedDistrictOption.value : '';
    
            let districtName = districtSelect.getAttribute('data-district-name');
            // Extracting thana name and ID
            let thanaSelect = document.querySelector('.thana');
            let selectedThanaOption = thanaSelect ? thanaSelect.options[thanaSelect.selectedIndex] : null;
            let thanaName = selectedThanaOption ? selectedThanaOption.getAttribute('data-thana-name') : '';
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
           
            fetch('https://jsonplaceholder.typicode.com/posts', {
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
    


// });


// document.addEventListener('DOMContentLoaded', () =>{
//     window.onload = function() {
//         var phoneInput = document.getElementById("phone");
    
//         // Initialize the value of the input field with +880
//         phoneInput.value = "+880";
    
//         // Set cursor position after "+880" when input field gets focus
//         phoneInput.addEventListener("focus", function(event) {
//             if (phoneInput.setSelectionRange) {
//                 phoneInput.setSelectionRange(4, 4);
//             }
//         });
    
//         // Prevent user from entering text in the prefix part
//         phoneInput.addEventListener("input", function(event) {
//             if (phoneInput.value.indexOf("+880") !== 0) {
//                 phoneInput.value = "+880" + phoneInput.value.substring(4);
//             }
//             // Ensure only numeric characters are allowed
//             phoneInput.value = phoneInput.value.replace(/\D/g, '');
//         });
    
//         // Validate phone number when focus moves away from the input field
//         phoneInput.addEventListener("blur", function(event) {
//             var regex = /^(\+880)?(13|14|15|16|17|18|19)\d{8}$/;
//             if (!regex.test(phoneInput.value)) {
//                 alert("Invalid phone number. Valid Phone Number Examples: 013, 014, 015, 016, 017, 018, 019");
//             }
//         });
    
//         // Prevent user from typing non-numeric characters
//         phoneInput.addEventListener("keydown", function(event) {
//             // Allow backspace, delete, left arrow, right arrow, home, and end keys
//             if (event.key === "Backspace" || event.key === "Delete" || event.key === "ArrowLeft" || event.key === "ArrowRight" || event.key === "Home" || event.key === "End") {
//                 return;
//             }
//             // Allow only numeric characters
//             if (!/[0-9]/.test(event.key)) {
//                 event.preventDefault();
//             }
//         });
//     };

// })




document.addEventListener('DOMContentLoaded',() => {
    window.onload = function() {
        var textarea = document.getElementById("textarea");
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

