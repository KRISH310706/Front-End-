const display = document.getElementById("display");

function Display(input){
      display.value += input;
}

function clearDisplay(){
      display.value = "";
}

function clearOneDisplay(){
     display.value = display.value.slice(0, -1);
}

function calculate(){
       const expression = display.value;

       var operator;
       var parts;

       if(expression.includes("+")){
            operator = "+";
            parts = expression.split("+");
       }else if (expression.includes("-")){
            operator = "-";
            parts = expression.split("-");
       }else if (expression.includes("*")){
            operator = "*";
            parts = expression.split("*");
       }else if (expression.includes("/")){
            operator = "/";
            parts = expression.split("/");
       }else if (expression.includes("%")){
            operator = "%";
            parts = expression.split("%");
       }

       var num1 = Number(parts[0]);
       var num2 = Number(parts[1]);

       var result;

       switch(operator){
            case "+": result = num1 + num2;
            break;

            case "-": result = num1 - num2;
            break;

            case "*": result = num1 * num2;
            break;

            case "/": result = num1 / num2;
            break;

            case "%": result = num1 % num2;
            break;
       }

       display.value = result;

}