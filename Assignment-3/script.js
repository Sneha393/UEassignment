// //Title constructor function that creates a Title object
// function Title(t1) 
// { this.mytitle = t1;
// }

// Title.prototype.getName = function () 
// { 
// return (this.mytitle);
// }

// var index=0;
// var socialMedia = {
//   facebook : 'http://facebook.com',
//   twitter: 'http://twitter.com',
//   flickr: 'http://flickr.com',
//   youtube: 'http://youtube.com'
// };

// var t = new Title("CONNECT WITH ME!");

// console.log("Hello World");

// let toggle = button => {

//   let element = document.getElementById("mytr");

//   let hidden = element.getAttribute("hidden");

//   if (hidden) {
//    element.removeAttribute("hidden");
//   } else {
//    element.setAttribute("hidden", "hidden");
//   }
// }



// function addRecord(){
//     var a = "this is class awesome";
//     var table = document.getElementById("myTable");
//     var tbody = document.getElementsByTagName("tbody")[0];
//    var StudentName = table.lastElementChild.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML || "Student 1"
//    var lastIndex = StudentName.split(" ")[1];  ; 
//     var trNode = document.createElement("tr");
//     var tdCheckBoxNode = document.createElement("td");
//     // tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /> <br /><br /><div class="dropdown"> <button class="dropbtn"><img src="down.png" width="25px" /></button> <div class="dropdown-content"> <p> Advisor:<br /><br />  Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br />  Comments:<br /><br /><br /> Award Status:<br /><br /><br /> </p> </div> </div>'
//     tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /> <br /><br /><img src="down.png" width="25px" /> '
//     //tdCheckBoxNode.innerHTML = '<input type="checkbox" ><br /><br /> <button ><img src="down.png" width="25px" /></button>'

     
  


// // Award Details
// // Summer 1-2014(TA)
// // Budget Number:
// // Tuition Number:
// // Comments:


// // Award Status:

//     var tdStudentNode = document.createElement("td");
//     tdStudentNode.innerHTML = 'Student '+(parseInt(lastIndex)+1)
//     var tdAdvisor = document.createElement("td");
//     tdAdvisor.innerHTML = 'Teacher '+(parseInt(lastIndex)+1)
//     var tdAwardStatus = document.createElement("td");
//     tdAwardStatus.innerHTML = 'Approved ' 
//     var tdSemster = document.createElement("td");
//     tdSemster.innerHTML = 'FALL '
//     var tdType = document.createElement("td");
//     tdType.innerHTML = 'TA '
//     var tdBudget = document.createElement("td");
//     tdBudget.innerHTML =  parseInt(Math.floor(Math.random() * 100000))
//     var tdPercentage= document.createElement("td");
//     tdPercentage.innerHTML = '100 %'

//     trNode.appendChild(tdCheckBoxNode);
//     trNode.appendChild(tdStudentNode);
//     trNode.appendChild(tdAdvisor);
//     trNode.appendChild(tdAwardStatus);
//     trNode.appendChild(tdSemster);
//     trNode.appendChild(tdType);
//     trNode.appendChild(tdBudget);
//     trNode.appendChild(tdPercentage);
//     tbody.appendChild(trNode);

// }

// function onClickCheckBox(checkBox){
//     var selectedRow = checkBox.parentElement.parentElement;
   
//     if(checkBox.checked==true){
//         selectedRow.style.backgroundColor="orange";
//         button.style.backgroundColor="red";

 
//          var deleteButton = document.createElement("td");
//         deleteButton.innerHTML = '<button id="deleted" type="button" onclick="onDeleteRow(this)">Delete</button>' 
//         selectedRow.appendChild(deleteButton);

//         var EditButton =document.createElement("td");
//         EditButton.innerHTML = '<button id="edited" type="button" onclick="OnEditRow(this)">Edit</button>'// edit function can be added here.
//         selectedRow.appendChild(EditButton);
//     }
//     else{
        

//         selectedRow.style.backgroundColor="#fff";
//         selectedRow.deleteCell(9);
//         selectedRow.deleteCell(8);
//     }
    
//     console.log(checkBox);
// } 



// function onDeleteRow(deletedRef){
//     var selectedRow = deletedRef.parentElement.parentElement;
//     var index = selectedRow.rowIndex;
//     alert(selectedRow.rowIndex);
//     console.log(selectedRow.rowIndex);
//     document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
//     alert(index +" has been deleted");

// }






// function OnEditRow(EditRef){
//   var selectedRow = EditRef.parentElement.parentElement;
//   var index = selectedRow.rowIndex;
//   console.log(selectedRow.rowIndex);
//   alert(index +" has been Edited");
// }


// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// }
// script.js

// Title constructor function that creates a Title object
//Title constructor function that creates a Title object
function Title(t1) {
  this.mytitle = t1;
}

Title.prototype.getName = function () {
  return this.mytitle;
}

var index = 0;
var socialMedia = {
  facebook: 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

console.log("Hello World");

function toggleDropdown(button) {
  let element = document.getElementById("mytr");
  let hidden = element.getAttribute("hidden");
  if (hidden) {
    element.removeAttribute("hidden");
  } else {
    element.setAttribute("hidden", "hidden");
  }
}

function addRecord() {
  var table = document.getElementById("myTable");
  var tbody = document.getElementsByTagName("tbody")[0];
  var StudentName = table.lastElementChild.lastElementChild?.firstElementChild?.nextElementSibling?.innerHTML || "Student 1";
  var lastIndex = StudentName.split(" ")[1] || 0;
  var trNode = document.createElement("tr");
  
  var tdCheckBoxNode = document.createElement("td");

  tdCheckBoxNode.innerHTML = '<input type="checkbox" onclick="onClickCheckBox(this)" /> <br /><br /><img src="down.png" width="25px" /> ';

  var tdStudentNode = document.createElement("td");
  tdStudentNode.innerHTML = 'Student ' + (parseInt(lastIndex) + 1);
  var tdAdvisor = document.createElement("td");
  tdAdvisor.innerHTML = 'Teacher ' + (parseInt(lastIndex) + 1);
  var tdAwardStatus = document.createElement("td");
  tdAwardStatus.innerHTML = 'Approved ';
  var tdSemester = document.createElement("td");
  tdSemester.innerHTML = 'FALL ';
  var tdType = document.createElement("td");
  tdType.innerHTML = 'TA ';
  var tdBudget = document.createElement("td");
  tdBudget.innerHTML = parseInt(Math.floor(Math.random() * 100000));
  var tdPercentage = document.createElement("td");
  tdPercentage.innerHTML = '100 %';


  var tdStudentNode = document.createElement("td");
  tdStudentNode.innerHTML = 'Student ' + (parseInt(lastIndex) + 1);


  trNode.appendChild(tdCheckBoxNode);
  trNode.appendChild(tdStudentNode);
  trNode.appendChild(tdAdvisor);
  trNode.appendChild(tdAwardStatus);
  trNode.appendChild(tdSemester);
  trNode.appendChild(tdType);
  trNode.appendChild(tdBudget);
  trNode.appendChild(tdPercentage);
  tbody.appendChild(trNode);
  


}
function toggleDropdown(button) {
  var row = button.parentElement.parentElement;
  var dropdown = row.nextElementSibling;
  dropdown.classList.toggle("show");
}

// Close the dropdowns if the user clicks outside of them
window.onclick = function (event) {
  if (!event.target.matches('.toggle-button')) {
    var dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(function (dropdown) {
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    }
    );
  }
}

// Rest of your JavaScript code here...


function onClickCheckBox(checkBox) {
  var selectedRow = checkBox.parentElement.parentElement;

  if (checkBox.checked == true) {
    selectedRow.style.backgroundColor = "yellow";
    document.getElementById("button").style.backgroundColor = "orange";

    var deleteButton = document.createElement("td");
    deleteButton.innerHTML = '<button id="deleted" type="button" onclick="onDeleteRow(this)">Delete</button>';
    selectedRow.appendChild(deleteButton);

    var EditButton = document.createElement("td");
    EditButton.innerHTML = '<button id="edited" type="button" onclick="OnEditRow(this)">Edit</button>';
    selectedRow.appendChild(EditButton);
  } else {
    selectedRow.style.backgroundColor = "#fff";
    selectedRow.deleteCell(9);
    selectedRow.deleteCell(8);
  }

  console.log(checkBox);
}

function onDeleteRow(deletedRef) {
  var selectedRow = deletedRef.parentElement.parentElement;
  var index = selectedRow.rowIndex;
  alert(selectedRow.rowIndex);
  console.log(selectedRow.rowIndex);
  document.getElementById("myTable").deleteRow(selectedRow.rowIndex);
  alert(index + " has been deleted");
}

function OnEditRow(EditRef) {
  var selectedRow = EditRef.parentElement.parentElement;
  var index = selectedRow.rowIndex;
  console.log(selectedRow.rowIndex);
  alert(index + " has been Edited");
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
