//login page
function submitclick() {
    var uid = document.getElementById('username').value;
    if (uid === "") {
        Swal.fire('Warning!', 'Please Enter UserId', 'warning');
        return false;
    }

    var passs = document.getElementById('password').value;
    if (passs === "") {
        Swal.fire('Warning!', 'Please Enter Password.', 'warning');
        return false;
    }


    const obj = {
        "userid": "john",
        "password": 1234
    };


    if (uid === obj.userid && passs === obj.password.toString()) {
        window.location.href = "recipe_search.html";
    } else {
        Swal.fire('Error!', 'Invalid username or password.', 'error');
    }
}

// function submitclick() {
//     var uid = document.getElementById('username').value;
//     var pass = document.getElementById('password').value;

//     if (uid === "") {
//         Swal.fire('Warning!', 'Please Enter UserId', 'warning');
//         return false;
//     }
//     if (pass === "") {
//         Swal.fire('Warning!', 'Please Enter Password', 'warning');
//         return false;
//     }

//     fetch('login.txt')  
//         .then(response => response.json())  
//         .then(data => {
//             console.log("Fetched data:", data);

//             const user = data.find(item => item.userid === uid && item.password == pass);
//             console.log(user);

//             if (user) {  
//                 window.location.href = "recipe_search.html";  
//             } else {
//                 Swal.fire('Error!', 'Invalid username or password.', 'error');
//             }
//         })
//         .catch(error => {
//             console.error("Error fetching login data:", error);
//             Swal.fire('Error!', 'There was an error with the login request. Please try again later.', 'error');
//         });
// }

//search and filter code
function searchFilter() {
    const searchBar = document.getElementById('search-bar').value.toLowerCase();
    const filterOption = document.getElementById('filter-options').value;
    const recipeCards = document.querySelectorAll('.recipe-card');

    recipeCards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const category = card.getAttribute('data-category');


        const matchesSearch = title.includes(searchBar);
        const matchesFilter = (filterOption === 'all' || filterOption === category);

        if (matchesSearch && matchesFilter) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

//validation new user login
function submitCondition(event) {
    const email = document.getElementById("email").value;
    const mobno = document.getElementById("mobno").value;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const mobnoPattern = /^\d{10}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid Gmail address (must end with @gmail.com).");
        event.preventDefault();
        return false;
    }

    if (!mobnoPattern.test(mobno)) {
        alert("Please enter a valid 10-digit mobile number.");
        event.preventDefault();
        return false;
    }

    alert("Form submitted successfully!");
    
  
    window.location.href = "loginpage.html";
}


//rating code

function toggleForm() {
    const form = document.getElementById('ratingForm');
    form.classList.toggle('hidden');
}

//verification email
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    
    if (validateGmail(email)) {
      
        document.getElementById("successMessage").classList.remove("hidden");
        document.getElementById("signupForm").reset();
    } else {
        alert("Please enter a valid Gmail address.");
    }
});


function validateGmail(email) {
   
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i;
    return gmailRegex.test(email);
}


//marque
document.styleSheets[0].insertRule(`
    @keyframes marquee {
        0% { transform: translateX(90%); }
        100% { transform: translateX(-100%); }
    }

`, 0);


// // Toggle dark mode function
function toggleDarkMode() {
    const body = document.body;
    
    // Check if dark mode is already applied
    if (body.classList.contains("dark")) {
        // If it's dark mode, switch back to light mode
        body.classList.remove("dark");
        body.style.backgroundColor = "white";  // Set background to light
    } else {
        // If it's not dark mode, apply dark mode
        body.classList.add("dark");
        body.style.backgroundColor = "black";  // Set background to dark
    }
}