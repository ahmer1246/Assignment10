//! chapter 26 to 30 // 

//!     Q NO 1  a,b,c//

// var user = +prompt("Enter Positive Decimal Number");
// var num = "Number : " + user ;
// document.write(num ,'</br>');
// var roundEl = Math.round(user);

// document.write(" Round off value : " , roundEl)
// document.write("</br>");
// var floorEl = Math.floor(user);
// document.write("Floor value : " , floorEl);
// document.write("</br>");
// var cielEl = Math.ceil(user);
// document.write("Ceil value : " , cielEl);

//!     Q NO 2  a,b,c//

// var user = +prompt("Enter Negative Decimal Number");
// var num = "Number : " + user ;
// document.write(num ,'</br>');
// var roundEl = Math.round(user);

// document.write(" Round off value : " , roundEl)
// document.write("</br>");
// var floorEl = Math.floor(user);
// document.write("Floor value : " , floorEl);
// document.write("</br>");
// var cielEl = Math.ceil(user);
// document.write("Ceil value : " , cielEl);

//! Q NO 3 //

//  var user = +prompt(" Write negative value and get its absolute value");
//  var abs= Math.abs(user);
//  document.write( "The absolute value of ",user, " is ", abs)

// ! Q NO 4 //

// var dice =Math.round(Math.random()*6) 

// document.write("Random dice value : ",dice);
// document.write("</br>")
// var dice2 = Math.round(Math.random()*6)
// document.write("Random dice value : ",dice2 )

//! Q NO 5 //

// var toss =Math.round( Math.random()*2);
// var toss2 =Math.round( Math.random()*2);

// document.write(toss ," Random coin value :Head")
// document.write("</br>")
// document.write(toss2 ," Random coin value :Tail")

//! Q NO 6 //

// var num = Math.round(Math.random()*100);
// document.write("random number between 1 and 100 : ",num)


//! Q NO 7 //

// var userInput = parseInt(prompt("write you weight"));
// document.write("The weight of user is ",userInput ,"Kilograms");

//! Q NO 8 //

// const userdata = +prompt("enter a number");
// const randomNum = Math.round(Math.random())

// if(userdata == randomNum){
//     alert("Congralution you suggest Right Number")
// }
// else{
//     alert("Bad luck you suggest wrong Number")
// }




//! chapter 31 to 34 // 

//! Q NO 1 //

// document.write(new Date())

//! Q NO 2 //


// var date = new Date();
// var array = [
//     "January",
//       "Febuary",
//       "March",
//       "April",
//       "May",
//       "June",
//       "July",
//       "August",
//       "September",
//       "October",
//       "Novembor",
//       "December",
//     ];


// var month = date.getMonth();

// alert(array[month])


//! Q NO 3 //

// var date = new Date();
// var day = date.getDay();
// var array = [
//   "Sun",
//   "Mon",
//   "Tues",
//   "Wed",
//   "Thurs",
//   "Fri",
//   "Sat",
// ];

// alert(array[day]);

//! Q NO  4 //

// var date = new Date();
// var day = date.getDay();
// if(day == 6 || day == 7){
//     alert("ITS FUN DAY")
// }



//! Q NO  5 //

// var date = new Date();
// var day = date.getDay();
// if(day <= 16 ){
//     document.write("its first fifteen days of month")
// }
// else{
//     document.write("its last days of month")
// }


//! Q NO 6 //

// var fromJan = new Date()
// var time= fromJan.getTime();
// var intoMiliSec = fromJan / (1000 *  60  )

// document.write("Current Date :",fromJan + "</br>");
// document.write("Elapsed milliseconds since from January 1 , 1970 :",time + "</br>");
// document.write( "Elapsed minutes since from January 1 , 1970 :",intoMiliSec + "</br>")

//! Q NO 7 //

// var time = new Date().getHours();
// console.log(time)
// if (time < 12 ){
//     alert("It's Am")
// }
// else{
//     alert("It's Pm")


// }

// ! Q NO 8 // 

// var date = new Date( "29 December 2020 ");
// document.write("Later date ", date)

//! Q NO 9 // 

//  var date = new Date("18 june, 2015 " ) 
// var days = new Date();
// var cal =  days.getTime()/ ( 1000 * 60 * 60 * 24) -  date.getTime() / ( 1000 * 60 * 60 * 24)  
// var results = Math.round(cal) + " days have passed since 1st Ramadan,2015";
// alert(results)
 

// ! Q NO 10 // 

//  var date = new Date("5 june, 2015 " ) 
// var days = new Date();
// var cal =  Math.round(days.getTime()/ ( 1000 ) -  date.getTime() / ( 1000 )  )
// var results =  " On reference date" + date + " , " + cal + " seconds had passed since beginning of 2015";
// alert(results)

//! Q NO 11 //
// let currentDate = new Date();
// document.write("current Date",currentDate,"</br>")

// let currentHours = currentDate.getHours();


// currentDate.setHours(currentHours - 1);


// document.write("1 hour ago , it was ", currentDate);

// ! Q NO 12 //



// let currentDate = new Date();


// currentDate.setFullYear(currentDate.getFullYear() - 100);

// alert("Date 100 years ago: " + currentDate);

// ! Q NO 13 //
// let userAge = prompt("Please enter your age:");

// userAge = parseInt(userAge);

// let currentYear = new Date().getFullYear();
// let birthYear = currentYear - userAge;


// document.write("Your birth year is: " + birthYear);

// ! Q NO 14 //
 // Prompt the user for input
 let customerName = prompt("Enter customer name:");
 let currentMonth = prompt("Enter current month:");
 let numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
 let chargesPerUnit = parseFloat(prompt("Enter charges per unit:"));
 let dueDate = prompt("Enter due date (YYYY-MM-DD):");

 // Calculate amounts
 let netAmount = (numberOfUnits * chargesPerUnit).toFixed(2);
 let latePaymentSurcharge = 0;
 let grossAmount = netAmount;

 // Check if the payment is late
 let currentDate = new Date();
 let dueDateObj = new Date(dueDate);
 if (currentDate > dueDateObj) {
     // Calculate late payment surcharge if the payment is late
     let daysLate = Math.floor((currentDate - dueDateObj) / (1000 * 60 * 60 * 24));
     latePaymentSurcharge = (netAmount * 0.02 * daysLate).toFixed(2);
     grossAmount = (parseFloat(netAmount) + parseFloat(latePaymentSurcharge)).toFixed(2);
 }

 // Display the bill details in the browser
 document.write("<h2>K-Electric Bill</h2>");
 document.write("<p><strong>Customer Name:</strong> " + customerName + "</p>");
 document.write("<p><strong>Current Month:</strong> " + currentMonth + "</p>");
 document.write("<p><strong>Number of Units:</strong> " + numberOfUnits.toFixed(2) + "</p>");
 document.write("<p><strong>Charges per Unit:</strong> $" + chargesPerUnit.toFixed(2) + "</p>");
 document.write("<p><strong>Net Amount Payable (within Due Date):</strong> $" + netAmount + "</p>");
 document.write("<p><strong>Late Payment Surcharge:</strong> $" + latePaymentSurcharge + "</p>");
 document.write("<p><strong>Gross Amount Payable (after Due Date):</strong> $" + grossAmount + "</p>"); 