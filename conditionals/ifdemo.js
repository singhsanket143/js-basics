console.log("Starting...");
let isUserSignedIn = true; // this denotes that user is signed in to the app
let isPaidUser = true;

if (isUserSignedIn == true && isPaidUser == true) {
    // this particular block will only execute if the condition mentioned is true
    console.log("Show the dashboard");
} else {
    console.log("Show the homepage");
}
 
console.log("End...");
