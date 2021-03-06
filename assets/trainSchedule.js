// Initialize Firebase
var config = {
    apiKey: "AIzaSyCObCno2oun2XkmjaBX__fIR0Ez03af7Yo",
    authDomain: "train-scheduler-16447.firebaseapp.com",
    databaseURL: "https://train-scheduler-16447.firebaseio.com",
    storageBucket: "train-scheduler-16447.appspot.com"
};
firebase.initializeApp(config);

var database = firebase.database();

console.log(config);

//Set up the submit button. 
$("#add-train").on("click", function(event){
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
    console.log(tempTrain.Name);
    console.log(tempTrain.Destination);
    console.log(tempTrain.Time);
    console.log(tempTrain.Frequency);

    //Let the user know when a train is added successfully
    alert("Your train has been successfully added");

    //Clear all of the text boxes after submitting a train
    $("#train-name").val("");
    $("#destination").val("");
    $("#train-time").val("");
    $("#train-frequency").val("");

});

//Create a firebase event for adding the train to the database
database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val());

    //Store all inputted values into a variable
    var trainName = childSnapshot.val().Name;
    var trainDestination = childSnapshot.val().Destination;
    var trainTime = childSnapshot.val().Time;
    var trainFrequency = childSnapshot.val().Frequency;

    //Get all train information
    console.log(trainName);
    console.log(trainDestination);
    console.log(trainTime);
    console.log(trainFrequency);

    //Prettify the time of arrival
    var trainTimePretty = moment.unix(trainTime).format("HH:MM");

    //Calculate the next arrival
    var m = moment(trainTime, 'HH:mm');
    var timeNow = moment();
    console.log("M: " + m.format('HH:mm'));
    console.log("The current time is: " + (timeNow).format('HH:mm'));

    while(m.valueOf() < timeNow.valueOf()){
        m.add(trainFrequency, 'minutes');
        console.log(moment(trainTime));
    }
    var nextArrival = m.format('hh:mm A')
    
    //Calculate the minutes away. This is the difference between the nextArrival and current time
    var minutesAway = m.diff(timeNow.subtract(1, 'minute'), 'minutes');

    // Create the new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFrequency),
        $("<td>").text(nextArrival),
        $("<td>").text(minutesAway)
    );

    // Append the new row to the table
    $("#employee-table > tbody").append(newRow);

   
});







