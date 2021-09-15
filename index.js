// Write your solution in this file!
const employee = {
    name: "Maya Borrero",
    streetAddress: "136 Race Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newName = {...employee};
    newName [key] = value;
    return newName
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const removedName = {...employee};
    delete removedName.name;
    return removedName;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}