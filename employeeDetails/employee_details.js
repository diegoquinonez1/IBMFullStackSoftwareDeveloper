
const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 }
];

function displayEmployees() {
    const totalEmployees = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - ${employee.salary}</p>`)
    .join('');

    document.getElementById('employeesDatails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, empIoyee) => acc + empIoyee.salary, 0);
    alert(`Total Salaries: $ ${totalSalaries}`);
}

function displayHREmployees() {
    const hremployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hremployees.map((employee) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $ ${employee.salary}</p>`).join('');
    document.getElementById('employeesDatails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeId(employeId) {
    const foundEmployee = employees.find(employee => String(employee.id) === String(employeId));
    
    if(foundEmployee) {
        document.getElementById('employeesDatails').innerHTML = `<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $ ${foundEmployee.salary}</p>`;
    }
    else {
        document.getElementById('employeesDatails').innerHTML = `no se ha encontrado ningun empleado con el id ${employeId}`;
    }
}

function findEmployeeIdInput() {
    const idValue = document.getElementById('EmployeeID');
    const idEmp = idValue.value;
    findEmployeeId(idEmp);
}