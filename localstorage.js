function saveData(){
 let orgName=document.getElementById('Organization').value;
 let fullName=document.getElementById('firstname').value;
 let middleName=document.getElementById('middlename').value;
 let lastName=document.getElementById('lastname').value;
 let contact=document.getElementById('phone').value;
 let email=document.getElementById('email').value;
 let password=document.getElementById('password').value;
 let address=document.getElementById('address').value;
 let verification=document.getElementById('id-proof').value;
 var org=localStorage.setItem("orgName",orgName);
 var fname=localStorage.setItem("fullName",fullName);
var mname=localStorage.setItem("middleName",middleName);
var lName=localStorage.setItem("lastName",lastName);
var phone=localStorage.setItem("contact",contact);
 var id=localStorage.setItem("email",email);
 var pword=localStorage.setItem("password",password);
 var addressp=localStorage.setItem("address",address);}






