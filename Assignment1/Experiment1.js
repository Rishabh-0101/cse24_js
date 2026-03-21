let subjectInput = document.getElementById("input");
let inputsDiv = document.getElementById("inputs");

// Create subject inputs
subjectInput.addEventListener("change", function () {
    let num = parseInt(subjectInput.value);

    // Clear all
    inputsDiv.innerHTML = "";

    // Recreate subject input (first line)
    let firstInput = document.createElement("input");
    firstInput.type = "number";
    firstInput.placeholder = "Enter number of subjects";
    firstInput.id = "input";

    inputsDiv.appendChild(firstInput);

    // Update reference
    subjectInput = document.getElementById("input");
    subjectInput.addEventListener("change", arguments.callee);

    // Create marks inputs (each on new line)
    for (let i = 1; i <= num; i++) {
        inputsDiv.appendChild(document.createElement("br"));

        let newInput = document.createElement("input");
        newInput.type = "number";
        newInput.placeholder = "Enter marks for subject " + i;
        newInput.classList.add("marks");

        inputsDiv.appendChild(newInput);
    }
});

// Calculate Result (ALERT ONLY)
function calculateResults() {
    let marks = document.querySelectorAll(".marks");

    if (marks.length === 0) {
        alert("⚠ Please enter number of subjects first!");
        return;
    }

    let total = 0;
    let isPass = true;
    let message = "📊 Your Marks:\n\n";

    for (let i = 0; i < marks.length; i++) {
        let value = parseFloat(marks[i].value);

        if (isNaN(value)) {
            alert("⚠ Please fill all subject marks!");
            return;
        }

        if (value < 33) {
            isPass = false;
        }

        total += value;

        message += `Subject ${i + 1}: ${value}\n`;
    }

    let percentage = total / marks.length;

    // 🎯 Grade Logic (ADDED ONLY)
    let grade = "";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    message += `\nTotal Marks: ${total}`;
    message += `\nPercentage: ${percentage.toFixed(2)}%`;
    message += `\nGrade: ${grade}`; // added line
    message += `\nResult: ${isPass ? "Pass ✅" : "Fail ❌"}`;

    alert(message);
}