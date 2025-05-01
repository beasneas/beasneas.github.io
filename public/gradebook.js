// Fetch data from the PostgreSQL database
function fetchGradeData() {
    // This function will query the PostgreSQL database and return grade data
    console.log("Fetching grade data...");
    // Create a new request for HTTP data
    let xhr = new XMLHttpRequest();
    // This is the address on the machine we're asking for data
    let apiRoute = "/api/grades";
    // When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function() {
        // Check if we're done
        if (xhr.readyState === xhr.DONE) {
            // Check if we're successful
            if (xhr.status !== 200) {
                console.error(`Could not get grades. Status: ${xhr.status}`);
                return;
            }
            // And then call the function to update the HTML with our data
            populateGradebook(JSON.parse(xhr.responseText));
        }
    };
    xhr.open("GET", apiRoute, true);
    xhr.send();
}

// Populate the table with grade data
function populateGradebook(data) {
    // This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data:", data);
}

// Call the fetchGradeData function to demonstrate the workflow
fetchGradeData();