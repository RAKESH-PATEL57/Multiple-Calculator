//***********************[[[[[[[[[[[[[[[[[[[[ toggling all calculator Section start ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************

let normalCalBtn = document.getElementById('normalCBtn');
let bmiCalBtn = document.getElementById('bmiCBtn');
let interestCalBtn = document.getElementById('interestCBtn');

let normalCalculator = document.querySelector('.normalCalculator');
let bmiCalculator = document.querySelector('.bmiCalculator');

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
    // console.log(input.value);
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
let age = document.querySelector("#age");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
// let bmiComment = document.querySelector(".");

function calculate(){
 
    if(age.value=='' || height.value=='' || weight.value=='' ){
    //   modal.style.display = "block";
    //   modalText.innerHTML = `All fields are required!`;
    alert("please enter all the required details");
  
    }else{
      countBmi();
    }
  
  }  

function countBmi(){
    var p = [age.value, height.value, weight.value];
  
    var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
        
    var result = '';
    if(bmi<18.5){
      result = ' Underweight';
       }else if(18.5<=bmi&&bmi<=24.9){
      result = ' Healthy';
       }else if(25<=bmi&&bmi<=29.9){
      result = ' Overweight';
       }else if(30<=bmi&&bmi<=34.9){
      result = ' Obese';
       }else if(35<=bmi){
      result = ' Extremely obese';
       }
  
  
  
//   resultArea.style.display = "block";
  document.querySelector(".bmiComment").innerHTML = `You are ${result}`;
  document.querySelector("#bmiResult").innerHTML = bmi.toFixed(2);
  
  }
  

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