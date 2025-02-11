let button = document.querySelectorAll("button");
let resInput = document.querySelector("#res-input")
let opInput = document.querySelector("#ope-input")

let valueOne = 0;
let valueTwe = 0;
let operation = "";
let option2 = false;

button.forEach( btn => {
    btn.addEventListener("click", (e) => {
        
        if (btn.classList.contains("clearAll") || btn.classList.contains("clear")) {
            // clear and clearAll

            if (btn.classList.contains("clear")) {
                if (resInput.value > 0){
                    clearInput(resInput);
                } else {
                    clearInput(opInput);
                }
            } else {
                clearAll();
            }

        } else if (btn.classList.contains("operation")){
            // operation

            if (btn.value != "="){
                option2 = true;
                valueOne = opInput.value;
                operation = btn.value;
            }else {
                if (option2){
                    let sum = `${(valueOne)} ${operation} ${(valueTwe)}`;
                    resInput.value = `${eval(sum)}`;

                    valueOne = 0;
                    valueTwe = 0;
                    operation = "";
                }
            }
        } else {

            // if the pressed input is input
            if (option2){
                valueTwe == 0 ? valueTwe = btn.value : valueTwe += btn.value;
                opInput.value = `${valueOne} ${operation} ${valueTwe}`;
            }else {
                opInput.value == 0 ? opInput.value = btn.value : opInput.value += btn.value;
                valueOne += btn.value;
            } 
        }
    })
});

const clearInput = (input) => {
    let currentResult = input.value.split("");

    let last = currentResult.pop();
    if (currentResult.length > 0) {
        input.value = currentResult.join("");
    } else {
        input.value = 0;
        valueOne = 0;
        valueTwe = 0;
        operation = 0;
    }
}

const clearAll = () => {
    opInput.value = 0;
    resInput.value = 0;
    valueOne = 0;
    valueTwe = 0;
    operation = 0;
}

// 41:22 daqiiqo ayay iimaraysa.