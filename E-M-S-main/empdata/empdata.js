const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr);

const tableBody = document.querySelector(".table-body");

for (i in arr) {
  let tr = document.createElement("tr");
  //console.log(i)

  if (arr[i] % 2 === 0) {
    tr.classList.add("tr-background");
    tr.innerHTML =
      '<td scope="row"><input type="checkbox" aria-label="Checkbox for following text input"></td><td>Abhishek</td>\
        <td>123456</td>\
        <td>Male</td>\
        <td>SDE</td>\
        <td>123456</td>\
        <td>abhishek@gmail.com</td>\
        <td>22 feb 2000</td>\
        <td>22 feb 2018</td>';
  } else {
    tr.innerHTML =
      '<td scope="row"><input type="checkbox" aria-label="Checkbox for following text input"></td><td>Abhishek</td>\
        <td>123456</td>\
        <td>Male</td>\
        <td>SDE</td>\
        <td>123456</td>\
        <td>abhishek@gmail.com</td>\
        <td>22 feb 2000</td>\
        <td>22 feb 2018</td>';
  }

  tableBody.appendChild(tr);
}
var addEmployee = document.getElementById('addEmployee');
var employeeDialog = document.getElementById('employeeDialog');

addEmployee.addEventListener('click', function onOpen() {
  if (typeof employeeDialog.showModal === 'function') {
    employeeDialog.showModal();
  } else {
    alert('The <dialog> API is not supported by this browser');
  }
});
