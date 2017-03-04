"use strict" ; // now the hoisting is not allowed in this script(because strict mode is used globally) 
function checkcookie() // check wether the cookies are enabled or not ?
{
	var text = "" ;
	if(navigator.cookieEnabled == true)
	{
		text = "cookies are enabled " ;
	}
	else
	{
		text = "cookies are disabled " ;
	}
	document.getElementById("cookieinfo").innerHTML = text ;
}
function validatesearch() // function for validating search option
{
	var x,message ;
	message = document.getElementById("message1") ;
	x = document.getElementById("search").value ;
	message.innerHTML = "" ;
	try{
		if(x == "") throw " input is empty" ;
		else throw x + " not found!!!!!" ;
	}
	catch(err)
	{
		message.innerHTML = err ;
	}
	finally
	{
		document.getElementById("search").value = "" ;
	}
}
function validatingform() // function for validating form
{
	var x = document.forms["myForm"]["FirstName"].value ;
	var y = document.forms["myForm"]["LastName"].value ;
	var age = document.getElementById("age") ;
	if(age.checkvalidity() == false)
	{
		document.getElementById("message2").innerHTML = age.validationMessage ;
	}
	if(x == "ayush" && y == "singh") // members already signed in 
	{
		alert("sorry!!!! ayush you are not allowed :(") ;
	}
}
function member(first,last,age,email,password,fullname) //this function is used as object constructor function 
{
	this.FirstName = first ;
	this.LastName = last ;
	this.age = age ;
	this.email = email ;
	this.password = password ;
	this.fullname = function() { return this.FirstName + " " + this.LastName ;}
}
var ayush = new member("ayush","singh","20","ayush123@gmail.com","1234") ; // creating new object 
function info() // displays the information of user just entered 
{
	var x = document.forms["myForm"] ;  // form object
	var text = "" ; 
	var i ;
	for (i = 0; i < x.length-1; i++) {
		text += x.elements[i].value + " " ;
	}
	document.getElementById("info").innerHTML = text ;
}
