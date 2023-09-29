
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};
      
function toggleRow(element) {
  var row = element.parentElement.parentElement.nextElementSibling;
  if (row.style.display === 'none' || row.style.display === '') {
      row.style.display = 'table-row';
  } else {
      row.style.display = 'none';
  }
}
var t = new Title("CONNECT WITH ME!");
const Submitbutton = document.getElementById("button"); 
Submitbutton.disabled = true;
Submitbutton.style.backgroundColor = "gray";
Submitbutton.style.cursor = "not-allowed";//3
var actual=0;
 var actual1=0;

function addRecord(){
  // var a = "this is class awesome";
  var table = document.getElementById("myTable");
  var tbody = document.getElementsByTagName("tbody")[1];
 var Studentnumber = table.lastElementChild.lastElementChild.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0"
 console.log(Studentnumber);
 var Budgetnumber=table.lastElementChild.lastElementChild.previousElementSibling?.firstElementChild?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.nextElementSibling?.innerHTML || "12345"
 console.log(Budgetnumber);
 
 if(Studentnumber.split(" ")[1]>actual){
  actual=Studentnumber.split(" ")[1];
 }
 if(actual1<Budgetnumber){
  actual1=Budgetnumber;
 }
 var lastIndex = actual;  
  var trNode = document.createElement("tr");
  var tdCheckBoxNode = document.createElement("td");
  tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /><br /><br /><img class="expand-button" onclick="toggleRow(this)" src="down.png" width="25px" />'  
  var tdStudentNode = document.createElement("td");
  tdStudentNode.innerHTML = 'Student '+(parseInt(lastIndex)+1)
  var student='Student '+(parseInt(lastIndex)+1);
  var tdAdvisor = document.createElement("td");
  tdAdvisor.innerHTML = 'Teacher '+(parseInt(lastIndex)+1)
var tdAwardNode=document.createElement("td");
tdAwardNode.innerHTML= 'Approved';
var tdSemesternode= document.createElement("td");
tdSemesternode.innerHTML= 'Fall';
var tdTypenode= document.createElement("td");
tdTypenode.innerHTML='TA';
var tdbudgetnode= document.createElement("td");
tdbudgetnode.innerHTML= parseInt(actual1)+1;
var tdPercentagenode= document.createElement("td");
tdPercentagenode.innerHTML='100%';

var trNode1=document.createElement("tr");
trNode1.classList.add("dropDownTextArea");
 var tdSumm=document.createElement("td");
 tdSumm.innerHTML='Advisor:<br /><br />Award Details<br />Summer 1-2014(TA)<br />Budget Number: <br />Tuition Number: <br />Comments:<br /><br /><br />Award Status:<br /><br /><br />'
  tdSumm.setAttribute('colspan','8');
  trNode.appendChild(tdCheckBoxNode);
  trNode.appendChild(tdStudentNode);
  trNode.appendChild(tdAdvisor);
  trNode.appendChild(tdAwardNode);
  trNode.appendChild(tdSemesternode);
  trNode.appendChild(tdTypenode);
  trNode.appendChild(tdbudgetnode);
  trNode.appendChild(tdPercentagenode);
  tbody.appendChild(trNode);//2
  trNode1.appendChild(tdSumm);//5
  tbody.appendChild(trNode1);//4
  alert(student+" Record added successfully"); //6
}

function onClickCheckBox(checkBox){
  var table = document.getElementById("myTable");
  
   var thNode1= document.createElement("th");
   var thNode2=document.createElement("th");
  var trnode2=document.getElementById("header");
  var selectedRow = checkBox.parentElement.parentElement;
  thNode1.innerHTML='Delete';
  thNode2.innerHTML='Edit';
  if(checkBox.checked==true){
    selectedRow.style.backgroundColor="yellow";
    Submitbutton.disabled = false;
Submitbutton.style.backgroundColor = "orange";
Submitbutton.style.cursor = "default";
var deleteButton = document.createElement("td");
deleteButton.innerHTML = '<button id="deleted" type="button" onclick="onDeleteRow(this)">Delete</button>' 
var editButton = document.createElement("td");
editButton.innerHTML = '<button id="edited" type="button" onclick="onEditRow(this)">Edit</button>' 
selectedRow.appendChild(deleteButton);
selectedRow.appendChild(editButton);

if(table.querySelectorAll("th").length!=10){
  trnode2.appendChild(thNode1);
  trnode2.appendChild(thNode2);
   
     
}
  }
  else{
    Submitbutton.disabled = true;
    Submitbutton.style.backgroundColor = "gray";
    Submitbutton.style.cursor = "not-allowed";
      selectedRow.style.backgroundColor="#fff";
      selectedRow.deleteCell(9) ;
      selectedRow.deleteCell(8);
      var table=document.getElementById("myTable");
      var trnode3=document.getElementById("header");
      trnode3.removeChild(table.firstElementChild.lastElementChild.lastElementChild.previousSibling);
      trnode3.removeChild(table.firstElementChild.lastElementChild.lastElementChild);
      
  }
  
  console.log(checkBox);
} 

function onDeleteRow(deletedRef){
  var selectedRow = deletedRef.parentElement.parentElement;
  
  var sem= selectedRow.firstElementChild.nextElementSibling.innerHTML;
  var i= sem.split(" ")[1];
  
  
  console.log(selectedRow.rowIndex);
  document.getElementById("myTable").deleteRow(parseInt(selectedRow.rowIndex)+1);
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  
  
  alert("Student "+ i +" Records has been deleted");
  console.log(actual);
}
function onEditRow(editRef){
  var selectedRow=editRef.parentElement.parentElement;
  var s= selectedRow.firstElementChild.nextElementSibling.innerHTML;
  console.log(s)
  
  index= s.split(" ")[1];
  
  let person = prompt("Edit details of Student "+index, "");
if (person != null && person != "") {
  alert( "Student "+index+" data updated successfully");
}
}

