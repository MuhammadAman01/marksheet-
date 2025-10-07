var userName=prompt("Enter Your Name")
if(isNaN(userName) && userName !==""){
    var fatherName=prompt("enter father name")
        if(isNaN(fatherName) && fatherName!==""){
var cast=prompt("enter yor cast")
if(isNaN(cast) && cast !==""){
    var group=prompt("enter your group eg;pre-eng/med,cs")  
    if(isNaN(group) && group!==""){
var rollNum=+prompt("enter roll number")
if (!isNaN(rollNum) && rollNum!==""){
         var eng=+prompt("enter english marks")
if(!isNaN(eng) && eng!==""){
var urdu=+prompt("enter urdu marks")
if( !isNaN(urdu) && urdu!==""){
var maths=+prompt("enter maths marks")                                   
if(!isNaN(maths) && maths!==""){  
    var phy=+prompt("enter physics marks")        
    if(!isNaN(phy) && phy!==""){
var chem=+prompt("enter chemistry marks")
if(!isNaN(chem) && chem!==""){
var bio=+prompt("enter biology marks")
if(!isNaN(bio) && bio!==""){
var islamiyat=+prompt("enter islamiyat marks")
if (!isNaN(islamiyat) && islamiyat !==""){ 
    var total= eng + phy + chem + maths + urdu + islamiyat + bio;
    var percentage=(total/700) * 100 
    
if (percentage >= 90 && percentage < 100) {
    var grade = "Top";
} else if (percentage >= 80 && percentage < 90) {
    var grade = "A1";
} else if (percentage >= 70 && percentage < 80) {
    var grade = "A";
} else if (percentage >= 60 && percentage < 70) {
    var grade = "B";
} else if (percentage >= 50 && percentage < 60) {
    var grade = "C";
} else {
    var grade = "Fail";
}

    document.writeln(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marskheet</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous">

</head>
<body>
    <h1 style="margin-left: 1%;"> BOARD OF INTERMEDIATE AND SECONDARY EDUCATION HYDERABAD SINDH  </h1>
<h2 style="color: rgb(170, 15, 15);margin-left: 35%;">MARKS CERTIFICATE</h2>
<img  style="margin-left: 2%; display:inline-block;" src="./logo.png" alt="logo">
<p  style="width:10%;heigth:20% ;margin-left:50%;display:inline-block;border:2px solid black; ;background-color:white ;padding-top:10%;color:white">passport size photo  <p>
  <b   style="margin-left: 1%;">NAME: ${userName}</b><BR>
    <b   style="margin-left: 1%;">FATHER NAME: ${fatherName}</b><BR>
    <b   style="margin-left: 1%;">CAST: ${cast}</b><BR>
 <b  style="margin-left: 1%; display: inline-block;;margin-top: 0%;">GROUP: ${group}</b><br>
 <b  style="margin-left: 1%; display: inline-block;;margin-top: 0%;">SEAT NO:${rollNum}</b><BR>
  
    
    <table class="table w-50%">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">subject</th>
      <th scope="col">Max Marks </th>
      <th scope="col">Obtain marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>English</td>
      <td>100</td>
      <td>${eng}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Urdu</td>
      <td>100</td>
      <td>${urdu}</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Maths</td>
      <td>100</td>
      <td>${maths}</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Physics</td>
      <td>100</td>
      <td>${phy}</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Chemistry</td>
      <td>100</td>
      <td>${chem}</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Islamiyat</td>
      <td>100</td>
      <td>${islamiyat}</td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Biology</td>
      <td>100</td>
      <td>${bio}</td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
    <td>   <h3>TOTAL:</td></h3>
   <td> <h3>${total}</td></h3>
     
    </tr>
    </tbody>
</table>
<b ><h4>Percentage:${parseInt(percentage)}%</b> </h4><br>
<b style="padding-top:0px;margin-top:0px"><h4>Grade:${grade}</b></h4>
<img src="sign.png" style="width:100%;height:10vh"></img>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>

</body>
</html>
    `
)}}}


 
}else{
    alert("please enter correct data")
}
    }else{
        alert("please enter correct data")
    }
    
        
}else{
alert("please enter correct data ")
}
}else{
alert("please enter correct data")
}
}else{
    alert("please enter correct data")
}

}
else{
    alert("please enter correct data")
}
}else{
alert("please enter correct data")
}
}
else{
    alert("please enter correct data")
}
}
 else{
  alert("please enter correct data")
 }