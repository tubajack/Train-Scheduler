// Initialize Firebase
var config = {
    apiKey: "AIzaSyCObCno2oun2XkmjaBX__fIR0Ez03af7Yo",
    authDomain: "train-scheduler-16447.firebaseapp.com",
    databaseURL: "https://train-scheduler-16447.firebaseio.com",
    projectId: "train-scheduler-16447",
    storageBucket: "train-scheduler-16447.appspot.com",
    messagingSenderId: "836220881869"
  };
  firebase.initializeApp(config);

var database = firebase.database();

//Set up the submit button. 
$("add-train").on("click", function(event){
    event.preventDefault();

    //Take in user input
    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var trainTime = $("#train-time").val().trim();
    var trainFrequency = $("#train-frequency").val().trim();

    //Create a local object for holding temporary data about the train
    var tempTrain = {
        Name: trainName,
        Destination: destination, 
        Time: trainTime, 
        Frequency: trainFrequency
    };

    //Upload train data to the database
    database.ref().push(tempTrain);

    //Log everything to the console
    console.log(trainName);
    console.log(destination);
    console.log(trainTime);
    console.log(trainFrequency);

    //Let the user know when a train is added successfully
    alert("Your train has been successfully added");

});


