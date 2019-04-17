// Initialize Firebase
var config = {
    apiKey: "AIzaSyCO93lv-KvOJAn8aKjTYZnIiV3deR3zFYM",
    authDomain: "train-scheduler-d98e1.firebaseapp.com",
    databaseURL: "https://train-scheduler-d98e1.firebaseio.com",
    projectId: "train-scheduler-d98e1",
    storageBucket: "train-scheduler-d98e1.appspot.com",
    messagingSenderId: "278872228356"
};
firebase.initializeApp(config);

//Set up the submit button. 
$("add-train").on("click", function(event){
    event.preventDefault();

    //Take in user input
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = $("#train-time").val().trim();
    var trainFrequency = $("#train-frequency").val().trim();

});


