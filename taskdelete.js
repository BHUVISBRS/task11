// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const emailInput = studentForm["email"];
const phonenumberInput = studentForm["phonenumber"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

function  studentforms( students){
    const parentElem = document.getElementById('list of Itemes')
    const childElem = document.createElement('li')
    childElem.textContent =  students.name+'-'+ students.email+'-'+ students.phonenumber;
const deleteButton = document.createElement('input')
deleteButton.type = "button"
deleteButton.value ='Delete'
deleteButton.onclick=()=>{
    localStorage.removeItem(students)
    parentElem.removeChild(childElem)
}  
childElem.appendChild(deleteButton);
//parentElem.appendChild(childElem);
} 

const addStudent = (name, email, phonenumber) => {
  students.push({
    name,
    email,
    phonenumber,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, email, phonenumber };

};



const createStudentElement = ({ name, email, phonenumber }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentEmail= document.createElement("p");
  const studentPhonenumber = document.createElement("p");

  // Fill the content
  studentName.innerText = "Student name: " + name;
  studentEmail.innerText = "Student email: " + email;
  studentPhonenumber.innerText = "Student phonenumber: " + phonenumber;

  // Add to the DOM
  studentDiv.append(studentName, studentEmail, studentPhonenumber);
  studentsContainer.appendChild(studentDiv);


};


students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    emailInput.value,
    phonenumberInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  emailInput.value = "";
  phonenumberInput.value = "";
};

