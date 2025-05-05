// console.log("hello")

document.getElementById("employeeForm").addEventListener("submit",function(event){
    event.preventDefault();

    const name = document.getElementById("name").valuex;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const department = document.getElementById("department").value;

    alert(
        "Employee Registered:\n\n"+
        "Name: "+ name + "\n"+
        "Email: " + email + "\n"+
        "Phone: " + phone + "\n"+
        "Department: " + department
    );

    document.getElementById("employeeForm").reset()
})
console.log("Form submitted!");
