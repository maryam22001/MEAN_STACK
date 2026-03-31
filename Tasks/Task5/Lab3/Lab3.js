///clone the cploure squre into random colours
let display = document.getElementById("Answer");

function EnterNumber(value){
    display.value+=value;

}
function EnterOperator(value) {
    display.value += value;
}
function EnterClear(){
    display.value="";
}


function EnterEqual() {
    let expression = display.value;
    let result;

    if (expression.includes('+')) {
        let numbers = expression.split('+');
        result = parseFloat(numbers[0]) + parseFloat(numbers[1]);
    } else if (expression.includes('-')) {
        let numbers = expression.split('-');
        result = parseFloat(numbers[0]) - parseFloat(numbers[1]);
    } else if (expression.includes('*')) {
        let numbers = expression.split('*');
        result = parseFloat(numbers[0]) * parseFloat(numbers[1]);
    } else if (expression.includes('/')) {
        let numbers = expression.split('/');
        if (parseFloat(numbers[1]) === 0) {
            result = 'Error';
        } else {
            result = parseFloat(numbers[0]) / parseFloat(numbers[1]);
        }
    } else {
        result = expression; 
    }

    display.value = result;
}