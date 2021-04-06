window.addEventListener('DOMContentLoaded', function () {


    let equal = document.querySelector('.ans');
    let reset = document.querySelector('.reset');
    let result = document.querySelector('.result');
    let numsArray = Array.from(document.querySelectorAll('.num'));
    let opsArray = Array.from(document.querySelectorAll('.ope'));


    let state = {
        firstNumber: "",
        secondNumber: "",
        operation: null,
    };



    function setResult(value) {
        result.innerHTML = value;
    }


    equal.addEventListener("click", () => {

        if (state.firstNumber === "" || state.secondNumber === "" || state.operation === null) {
            alert("Select first number, second number and operation")
            return;
        }

        const num1 = Number(state.firstNumber);
        const num2 = Number(state.secondNumber);


        switch (state.operation) {
            case "+":
                setResult(num1 + num2);
                break;
            case "-":
                setResult(num1 - num2)
                break
            case "*":
                setResult(num1 * num2)
                break;
            case "%":
                setResult(num1 / num2)
                break;
            default:
                return;
        }
    })

    reset.addEventListener("click", () => {
        state = {
            firstNumber: "",
            secondNumber: "",
            operation: null,
        };
        setResult("0");
    });



    opsArray.forEach(function (opeDiv) {


        opeDiv.addEventListener('click', function () {
            if (state.operation !== null) {
                alert('You can only using two numbers!')
                return;
            }
            state.operation = opeDiv.innerHTML;
            setResult("0")
        });

    });


    numsArray.forEach(function (numDiv) {

        numDiv.addEventListener('click', function () {
            if (state.operation === null) {
                state.firstNumber += numDiv.innerHTML;
                setResult(state.firstNumber)
            }
            else {
                state.secondNumber += numDiv.innerHTML;
                setResult(state.secondNumber)
            }
        });

    });


});



