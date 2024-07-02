var myString = 'Upskilling';
var ourNumber = 20;
var hisBoolean = true;

function add(x,y){
    return x + y;
}

function substract(x,y) {
    return x - y;
}

function divide(x,y) {
    if (y==0){
        return "Cannot divide by zero";
    }
    else{
        return x / y;
    }
}

function multiply(x,y) {
    return x * y;
}

console.log(myString);
console.log(ourNumber);
console.log(hisBoolean);
console.log(add(20,78));
console.log(substract(34-20));
console.log(divide(35/7));
console.log(multiply(15,54));

document.getElementById('addBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = add(num1, num2);
    displayResult(result);
});

document.getElementById('subtractBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = subtract(num1, num2);
    displayResult(result);
});

document.getElementById('divideBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = divide(num1, num2);
    displayResult(result);
});

document.getElementById('multiplyBtn').addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = multiply(num1, num2);
    displayResult(result);
});

// Function to display result
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('resultText');
    resultText.textContent = result;
    resultDiv.classList.remove('hidden');
}

// Event listener to toggle visibility of an element
document.getElementById('toggleBtn').addEventListener('click', () => {
    const toggleElement = document.getElementById('toggleElement');
    if (toggleElement.classList.contains('hidden')) {
        toggleElement.classList.remove('hidden');
    } else {
        toggleElement.classList.add('hidden');
    }
});

//Function to create and display a chart using Chart.js
function createChart() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call the function to create and display the chart
createChart();