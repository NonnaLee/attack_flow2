function showSignup(){
    document.getElementById("signupForm").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
}

function showLogin(){
    document.getElementById("loginForm").style.display = "block";
    document.getElementById("signupForm").style.display = "none";
}

function checkLogin() {
    // Get credential info
    const pl_info = getInfo();

    // start html rerquet to server
    let req = new XMLHttpRequest();
    const params = `user=${pl_info.user}&pwd=${pl_info.pwd}`; // set data to be sent

    req.open('POST', '//localhost:3000/users/loginAuth', true); // open http request to server

    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // set headers for proper encoding (later date)

    req.onreadystatechange = () => {
        // Login Logic
        if (req.readyState == 4 && req.status == 200 ) {
            // TODO: login logic
            console.log(`working: ${req.response}`);
        } else {
            // Error Handling
            console.error(`Error ${req.status}: ${req.statusText}`);
        }
    };

    req.send(params); // Send data to server

    return;
}

function checkSignup() {
    // Get credential info
    const pl_info = getInfo();

    // start html rerquet to server
    let req = new XMLHttpRequest();
    const params = `user=${pl_info.user}&pwd=${pl_info.pwd}`; // set data to be sent

    req.open('POST', '//localhost:3000/users/signupnAuth', true); // open http request to server

    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); // set headers for proper encoding (later date)

    req.onreadystatechange = () => {
        // Login Logic
        if (req.readyState == 4 && req.status == 200 ) {
            // TODO: signup logic
            console.log(`working: ${req.response}`);
        } else {
            // Error Handling
            console.error(`Error ${req.status}: ${req.statusText}`);
        }
    };

    req.send(params); // Send data to server

    return;
}

// Retrives Username and Plaintext Password from DOM and returns as object
function getInfo() {
    const username = document.getElementById("username").value;
    const pl_password = document.getElementById("password").value;

    return { user: username, pwd: pl_password }
}