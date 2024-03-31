

document.addEventListener('DOMContentLoaded', () => {
    const selectDrop = document.querySelector('.district'); // Selecting dropdown by class name
    
    // Add a demo text as the first option
    selectDrop.innerHTML = "<option value=''>Select District</option>";
    
    fetch('https://salesforcedev.bergerbd.com/api/district/getAllDistricts')
        .then(res => res.json())
        .then(data => {
            let output = "";
            data.result.forEach(district => {
                output += `<option value="${district.id}">${district.name}</option>`;
            });
            selectDrop.innerHTML += output; // Append districts after the demo text
        })
        .catch(err => {
            console.log(err);
        });
});




document.addEventListener('DOMContentLoaded', () => {
    const districtSelect = document.querySelector('.district'); // Selecting district dropdown by class name
    const thanaSelect = document.getElementById('thanaDropdown'); // Keep the ID as thanaDropdown

    // Add event listener to district dropdown
    districtSelect.addEventListener('change', function() {
        const selectedDistrictId = this.value; // Get the selected district ID
        fetch(`https://salesforcedev.bergerbd.com/api/thana/getAllThanaByDistrictId/${selectedDistrictId}`)
            .then(res => res.json())
            .then(data => {
                if (data.isSuccess && data.result && data.result.thanaResponse) {
                    const thanaResponse = data.result.thanaResponse;
                    let thanaOptions = "";
                    thanaResponse.forEach(thana => {
                        thanaOptions += `<option value="${thana.id}">${thana.name}</option>`;
                    });
                    thanaSelect.innerHTML = thanaOptions;
                } else {
                    throw new Error('Invalid response format or missing data');
                }
            })
            .catch(err => {
                console.error('Fetch error:', err);
            });
    });
});

