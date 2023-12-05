function submitForm(){
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    //Create an object to store the form data
    var userData = {
        name: name,
        email: email
    };

    //Convert the object to a JSON string
    var jsonString = JSON.stringify(userData);

    //Store the JSON string in local storage
    localStorage.setItem('userData', jsonString);

    // Optionally, you can clear the form after submission
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';

    //Display stored data
    displayStoredData();
}

    function displayStoredData(){
        var storedData = localStorage.getItem('userData');
    if (storedData) {
        var userDataObj = JSON.parse(storedData);
        var displayDiv = document.getElementById('userDataDisplay');
        displayDiv.innerHTML = '<p><strong>Name:</strong> ' + userDataObj.name + '</p>' +
        '<p><strong>Email:</strong> ' + userDataObj.email + '</p>';
    }

    }

    // Display stored data when the page loads
window.onload = function () {
    displayStoredData();
};


