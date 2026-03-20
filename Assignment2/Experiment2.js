let employees = [];

function addEmployee() { 
    let name = document.getElementById("name").value;
    let employeeId = document.getElementById("employeeId").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;

    if (name === "" || employeeId === "" || isNaN(salary) || department === "") {     
        alert("Please fill all fields correctly.");
        return;
    }

    let employee = {
        name: name,
        employeeId: employeeId,
        salary: salary,
        department: department
    };

    employees.push(employee);

    alert("Employee added successfully!");

    document.getElementById("name").value = "";
    document.getElementById("employeeId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}

function displayEmployees() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h2>No employees added yet.</h2>";
        return;
    }

    let output = "<h2>Employee List</h2><ul>";

    employees.forEach(employee => {
        output += `<li>
        ${employee.name} 
        (ID: ${employee.employeeId}) 
        - ${employee.department} 
        - $${employee.salary.toFixed(2)}
        </li>`;
    });

    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

function filterSalary() {

    let filteredEmployees = employees.filter(employee => employee.salary > 50000);

    if (filteredEmployees.length === 0) {
        document.getElementById("output").innerHTML = "<h2>No employees with salary above $50,000</h2>";
        return;
    }

    let output = "<h2>Employees with Salary > $50,000</h2><ul>";

    filteredEmployees.forEach(employee => {
        output += `<li>
        ${employee.name} 
        (ID: ${employee.employeeId}) 
        - ${employee.department} 
        - $${employee.salary.toFixed(2)}
        </li>`;
    });

    output += "</ul>";
    document.getElementById("output").innerHTML = output;
}

function totalSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML = "<h2>No employees available.</h2>";
        return;
    }

    let total = employees.reduce((sum, employee) => sum + employee.salary, 0);

    document.getElementById("output").innerHTML =
        `<h2>Total Salary: $${total.toFixed(2)}</h2>`;
}

function averageSalary() {

    if (employees.length === 0) {
        document.getElementById("output").innerHTML =
            "<h2>No employees to calculate average salary.</h2>";
        return;
    }

    let total = employees.reduce((sum, employee) => sum + employee.salary, 0);
    let average = total / employees.length;

    document.getElementById("output").innerHTML =
        `<h2>Average Salary: $${average.toFixed(2)}</h2>`;
}

function countDepartment() {

    let departmentName = prompt("Enter department name:");

    let count = employees.filter(employee =>
        employee.department.toLowerCase() === departmentName.toLowerCase()
    ).length;

    document.getElementById("output").innerHTML =
        `<h2>Number of Employees in ${departmentName}: ${count}</h2>`;
}