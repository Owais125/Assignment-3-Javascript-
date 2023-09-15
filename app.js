// ***************Q:1****************

var studentsname = [];

// ***************Q:2****************

var studentsname = [];

// ***************Q:3****************
 Question3;
var Question3 = ["Owais","Raza","Sami","Gaffar"];

console.log(Question3);

// ***************Q:4****************
var Question4;

 Question4=[2,4,26,2,5];

console.log(Question4);

// ***************Q:5****************

var Question5;

Question5 = [true,false];

console.log(Question5);


// ***************Q:6****************



var Question6;

Question6 = [true,5,"Owasi",85,"loin",false];

console.log(Question6);


// ***************Q:7****************




var Question7;

Question7 = [ "Qualifications:","SSC","HSC","BCS","BS","BCOM","MS","M. Phil","PhD"];

document.write("<h3>"+Question7[0]+ "</h3>"+
    
    
    "<ol>"+
"<li>"+Question7[1] +"</li>"
+"<li>"+Question7[2] +"</li>"
+"<li>"+Question7[3] +"</li>"
+"<li>"+Question7[4] +"</li>"
+"<li>"+Question7[5] +"</li>"
+"<li>"+Question7[6] +"</li>"
+"<li>"+Question7[7] +"</li>"

+"<li>"+Question7[8] +"</li>"




+"</ol>");


// ***************Q:8****************






 var Question8 = ["Michael","Jhon","Tony"];

 var Name = prompt("Enter Your Name")

 var input1 = prompt("Enter Total Obtain Marks")

 var input2 = prompt("Enter Total Total Marks")

 var percentage = input1 / input2 *100

 if(Name===Question8[0]){
    document.write("Score of " +Question8[0]+" is " + input1 +"." +"percentage"+ percentage + "%" ) 
 }

else  if(Name===Question8[1]){
    document.write("Score of " +Question8[1]+" is " + input1 +"." +"percentage"+ percentage + "%" ) 
 }


 else  if(Name===Question8[2]){
    document.write("Score of " +Question8[2]+" is " + input1 +"." +"percentage"+ percentage + "%" ) 
 }


// ***************Q:9****************

var Question8 = ["red","blue","green","orange","white","black"]

console.log(Question8)

var userinput1 = prompt("Enter your 1st Color Name")



var updatearr =[ "red","blue","green","orange","white",userinput1]

console.log(updatearr)



var userinput2 = prompt("Enter your  2nd Color Name")

var userinput3 = prompt("Enter your 3rd Color Name")


var updatedarr =[ "red","blue","green","orange","white",userinput2,userinput3]

console.log(updatedarr)


var updatarr =[ "red","blue","green","orange","white",userinput2,userinput3]

updatarr.shift()

console.log(updatarr)



var updateedtarr =[ "red","blue","green","orange","white"]

updateedtarr.pop()

console.log(updateedtarr)


var updateed1tarr =[ "red","blue","green","orange","white"]


var tagetvalue = prompt("Enter the Target value" )

var Deletevalue = prompt("Enter the Delete value" )

var Addingvalue = prompt("Enter Adding Value")



updateed1tarr.splice(tagetvalue,Deletevalue,Addingvalue)






console.log(updateed1tarr)




var updateed2tarr =[ "red","blue","green","orange","white"]


var tagetvalue = prompt("Enter the Target value" )

var Deletevalue = prompt("Enter the Delete value" )




updateed2tarr.splice(tagetvalue,Deletevalue)






console.log(updateed2tarr)

// ***************Q:10****************

var updateed3tarr = [320,210 ,540,120,650]

document.write(updateed3tarr+ "<br>")

var ordervalues = updateed3tarr.sort()


document.write(ordervalues + "<br>")


// ***************Q:11****************

var updateed4tarr = ["karachi","lahore","islamabad","multan","quttea",]


document.write("Cities lists:"+"<br>"+updateed4tarr + "<br>")



var selectecity = updateed4tarr.slice(2,5)


document.write(" Selected Cities lists:"+"<br>"+selectecity)




// ***************Q:12****************






var arr = ["This","is","my","cat"];

document.write(arr +"<br>")


var arr2 = ["This is my cat"]


document.write(arr2 +"<br>")






// ***************Q:13****************





var Question13 = ["Apple","Mango","Graphs"]

console.log(Question13);


Question13.shift()

Question13.shift()




Question13.unshift("Dragen", "Fruit","Potato" )

console.log(Question13);





// ***************Q:14****************



var Question14 = ["keyboard","mouse","monitor","printer"]

console.log(Question14)

Question14.push("laptop","table")

Question14.shift()

Question14.shift()


console.log(Question14)


// ***************Q:15****************



var Question15 = ["Apple","Samsung","Motorola","One plus","Oppo"]


document.write(
   
   "<select>"
+ "<option>"+Question15[0]+"</option>"
+ "<option>"+Question15[1]+"</option>"
+ "<option>"+Question15[2]+"</option>"
+ "<option>"+Question15[3]+"</option>"
+ "<option>"+Question15[4]+"</option>"
+ 
  

"</slecte>")































