let input = document.getElementById('input');

function addToDisplay(value) {
	input.value += value;
}

function clearDisplay() {
	input.value = '';
}

function deleteDigit() {
	input.value = input.value.slice(0, -1);
}

function calculate() {
	input.value = eval(input.value);
}
