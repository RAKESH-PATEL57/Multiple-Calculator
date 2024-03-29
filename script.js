//***********************[[[[[[[[[[[[[[[[[[[[ toggling all calculator Section start ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************

let normalCalBtn = document.getElementById('normalCBtn');
let bmiCalBtn = document.getElementById('bmiCBtn');
let interestCalBtn = document.getElementById('interestCBtn');

let normalCalculator = document.querySelector('.normalCalculator');
let bmiCalculator = document.querySelector('.bmiCalculator');
console.log(bmiCalculator);

bmiCalBtn.addEventListener('click', () => {
    normalCalculator.classList.add('hide-show-nc');
    bmiCalculator.classList.add('show-hide-bmic');
});

normalCalBtn.addEventListener('click', () => {
    normalCalculator.classList.remove('hide-show-nc');
    bmiCalculator.classList.remove('show-hide-bmic');
    
});

//***********************[[[[[[[[[[[[[[[[[[[[ toggling all calculator Section end ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************


//***********************[[[[[[[[[[[[[[[[[[[[ Normal Calculator Section start ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************

let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.calBtn');

let string = "";
let first = 0;
let result = 0;
let opeatorChooses = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        calculatingByMouse(e);
    })
});

// function ParseFloat(str) {
//     str = str.toString();
//     str = str.slice(0, (str.indexOf(".")) + 2); 
//     return Number(str);   
// }

function calculatingByMouse(e)
{
    console.log(input.value);
    if(e.target.innerHTML == "=")
    {
        if(opeatorChooses == "+")
        {
            result = first + parseFloat(string);
            input.value = result.toFixed(2);
            string = result.toString();
        }
        else if(opeatorChooses == "-")
        {
            result = first - parseFloat(string);
            input.value = result.toFixed(2);
            string = result.toString();
        }
        else if(opeatorChooses == "*")
        {
            result = first * parseFloat(string);
            input.value = result.toFixed(2);
            string = result.toString();
        }
        else if(opeatorChooses == "/")
        {
            result = first / parseFloat(string);
           
            // input.value = parseFloat(testing);
            input.value = result.toFixed(2);
            string = result.toString();
        }
        else if(opeatorChooses == "%")
        {
            result = first % parseFloat(string);
           
            // input.value = parseFloat(testing);
            input.value = result.toFixed(2);
            string = result.toString();
        }
    }

    else if(e.target.innerHTML == "+")
    {
        first = parseFloat(string);
        input.value = e.target.innerHTML;
        opeatorChooses = "+";
        string = "";
    }
    else if(e.target.innerHTML == "-")
    {
        first = parseFloat(string);
        input.value = e.target.innerHTML;
        opeatorChooses = "-";
        string = "";
    }
    else if(e.target.innerHTML == "/")
    {
        first = parseFloat(string);
        input.value = e.target.innerHTML;
        opeatorChooses = "/";
        string = "";
    }
    else if(e.target.innerHTML == "*")
    {
        first = parseFloat(string);
        input.value = e.target.innerHTML;
        opeatorChooses = "*";
        string = "";
    }
    else if(e.target.innerHTML == "%")
    {
        first = parseFloat(string);
        input.value = e.target.innerHTML;
        opeatorChooses = "%";
        string = "";
    }

   else if (e.target.innerHTML == 'AC')
    {
        string = "";
        input.value = string;
    }

    else if(e.target.innerHTML == 'DEL')
    {
        string = string.substring(0, string.length-1);
        input.value = string;
    }

    else
    {
        input.value = "";   
        string += e.target.innerHTML;
        input.value = string;
    }

}

//***********************[[[[[[[[[[[[[[[[[[[[ Normal Calculator Section End ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************

//***********************[[[[[[[[[[[[[[[[[[[[ BMI Calculator Section Start ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************
let ageValue = document.querySelector("#age");
let heightValue = document.querySelector("#height");
let weightValue = document.querySelector("#weight");
let bmiComment = document.querySelector(".");

//***********************[[[[[[[[[[[[[[[[[[[[ BMI Calculator Section End ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************


// window.addEventListener('keyup', (e) => {

//     console.log(e.key);

//     if((e.key>=0 && e.key<=9) || (e.key == "Enter") || (e.key == "Backspace") || (e.key == "Delete") || (e.key == "Shift") || (e.key == "+") || (e.key == "-") || (e.key == "*") || (e.key == "/") || (e.key == "%"))
//     {
//             calculatingByKeyboard(e.key);

//     }    

// });

// function calculatingByKeyboard(e)
// {
//     // console.log(e);
//     console.log(input.value);
//     if(e == 'Enter')
//     {
//         if(opeatorChooses == "+")
//         {
//             result = first + parseFloat(string);
//             input.value = result.toFixed(2);
//             string = result.toString();
//         }
//         else if(opeatorChooses == "-")
//         {
//             result = first - parseFloat(string);
//             input.value = result.toFixed(2);
//             string = result.toString();
//         }
//         else if(opeatorChooses == "*")
//         {
//             result = first * parseFloat(string);
//             input.value = result.toFixed(2);
//             string = result.toString();
//         }
//         else if(opeatorChooses == "/")
//         {
//             result = first / parseFloat(string);
           
//             // input.value = parseFloat(testing);
//             input.value = result.toFixed(2);
//             string = result.toString();
//         }
//         else if(opeatorChooses == "%")
//         {
//             result = first % parseFloat(string);
           
//             // input.value = parseFloat(testing);
//             input.value = result.toFixed(2);
//             string = result.toString();
//         }
//     }

//     else if(e == "+")
//     {
//         first = parseFloat(string);
//         input.value = e;
//         opeatorChooses = "+";
//         string = "";
//     }
//     else if(e == "-")
//     {
//         first = parseFloat(string);
//         input.value = e;
//         opeatorChooses = "-";
//         string = "";
//     }
//     else if(e == "/")
//     {
//         first = parseFloat(string);
//         input.value = e;
//         opeatorChooses = "/";
//         string = "";
//     }
//     else if(e == "*")
//     {
//         first = parseFloat(string);
//         input.value = e;
//         opeatorChooses = "*";
//         string = "";
//     }
//     else if(e == "%")
//     {
//         first = parseFloat(string);
//         input.value = e;
//         opeatorChooses = "%";
//         string = "";
//     }

//    else if (e == 'Delete')
//     {
//         string = "";
//         input.value = string;
//     }

//     else if(e == 'Backspace')
//     {
//         string = string.substring(0, string.length-1);
//         input.value = string;
//     }

//     else
//     {
//         input.value = "";   
//         string += e;
//         input.value =string;
//     }

// }

//***********************[[[[[[[[[[[[[[[[[[[[ BMI calculator Section start ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************

// let bmiCalulator = document.getElementById('BMI-calulator');

//***********************[[[[[[[[[[[[[[[[[[[[ BMI calculator Section end   ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************