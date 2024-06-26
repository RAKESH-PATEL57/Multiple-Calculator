
//***********************[[[[[[[[[[[[[[[[[[[[ Activate current btn [start ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************
let btns = document.querySelectorAll('.btn');

let previousData = 0;
btns.forEach((elem, index) => {
    btns[index].addEventListener('click', (e) => {
        btns[previousData].classList.remove('active');

        e.target.classList.add('active');

        previousData = index;
    });
});
//***********************[[[[[[[[[[[[[[[[[[[[ Activate current btn [ end ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************


//***********************[[[[[[[[[[[[[[[[[[[[ toggling all calculator Section [ start ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************

let normalCalBtn = document.getElementById('normalCBtn');
let bmiCalBtn = document.getElementById('bmiCBtn');
let sampleInterestCalBtn = document.getElementById('interestCBtn');
let cgpaCalBtn = document.getElementById('cgpaCBtn');

let normalCalculator = document.querySelector('.normalCalculator');
let bmiCalculator = document.querySelector('.bmiCalculator');
let sampleInterestCalculator = document.querySelector('.sampleInterest');
let cgpaCalculator= document.querySelector('.cgpaCalculator');

cgpaCalBtn.addEventListener('click', () => {
    cgpaCalculator.classList.add('show-hide-cgpamic');
    sampleInterestCalculator.classList.remove('show-hide-sic');
    normalCalculator.classList.add('hide-show-nc');
    bmiCalculator.classList.remove('show-hide-bmic');
});

sampleInterestCalBtn.addEventListener('click', () => {
    sampleInterestCalculator.classList.add('show-hide-sic');
    normalCalculator.classList.add('hide-show-nc');
    bmiCalculator.classList.remove('show-hide-bmic');
    cgpaCalculator.classList.remove('show-hide-cgpamic');
});
bmiCalBtn.addEventListener('click', () => {
    normalCalculator.classList.add('hide-show-nc');
    bmiCalculator.classList.add('show-hide-bmic');
    sampleInterestCalculator.classList.remove('show-hide-sic');
    cgpaCalculator.classList.remove('show-hide-cgpamic');
});

normalCalBtn.addEventListener('click', () => {
    normalCalculator.classList.remove('hide-show-nc');
    bmiCalculator.classList.remove('show-hide-bmic');
    sampleInterestCalculator.classList.remove('show-hide-sic');
    cgpaCalculator.classList.remove('show-hide-cgpamic');
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
  
    // var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
    var bmi = (Number(p[2])/Number(p[1])/Number(p[1])) * 10000;
    // console.log(bmi);
    // console.log(bmif);

    var commentColor = "#00ff3c";    
    var result = '';
    if(bmi<18.5)
    {
      result = ' Underweight';
      commentColor = "#ff0000";    
    }
    else if(bmi<=25)
    {
      result = ' Healthy';
      commentColor = "#00ff3c";
    }
    else if(bmi<=29.9)
    {
      result = ' Overweight';
      commentColor = "#ff0000";  
    }
    else if(bmi<=34.9)
    {
      result = ' Obese';
      commentColor = "#ff0000";  
    }else if(35<=bmi)
    {
      result = ' Extremely obese';
      commentColor = "#ff0000";  
    }
  
  
  
//   resultArea.style.display = "block";
  document.querySelector(".bmiComment").innerHTML = `You are ${result}`;
  document.querySelector(".bmiComment").style.color = commentColor;
  document.querySelector("#bmiResult").innerHTML = bmi.toFixed(2);
  document.querySelector("#bmiResult").style.color = commentColor;
  
  }
  

//***********************[[[[[[[[[[[[[[[[[[[[ BMI Calculator Section End ]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************


//***********************[[[[[[[[[[[[[[[[[[[[ Sample Interest Calculator Section [ Start ] **]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************
let principleAmountP = document.querySelector('#pAmount');
let interestR = document.querySelector('#aInterest');
let timePeriodT = document.querySelector('#tPeriod');

let sInterestBtn = document.querySelector('#sInterestBtn');

let resultInterestContainer = document.querySelector('.resultInterestContainer');

let smIResult = document.querySelector('#smIResult');
let totalAmountResult = document.querySelector('#totalAmountResult');

principleAmountP.addEventListener("keyup", (e) => {
    console.log(e.key);
    if((e.key == 'e') || (e.key == '-'))
    {
        principleAmountP.value = '';
        alert("Enter valid details");
    }

    console.log(principleAmountP.value);
});

sInterestBtn.addEventListener('click', () => {
    var P = principleAmountP.value;
    var R = interestR.value;
    var T = timePeriodT.value;
    
    if((P === '') && (R === '') && (T === ''))
    {
        alert("Please enter the details first");
    }
    else
    {    
        resultInterestContainer.style.display = "block";
        var SI = (P * R * T) / 100;
        
        var TA = Number(P) + Number(SI);
        
        smIResult.innerText = SI + "₹";
        totalAmountResult.innerText = TA + "₹";
    }
});


//***********************[[[[[[[[[[[[[[[[[[[[ Sample Interest Calculator Section [  End ] **]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************


//***********************[[[[[[[[[[[[[[[[[[[[ CGPA Calculator Section [ Start ] **]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************
let numberOfSubject = document.querySelector("#numberOfSubject");
let cgpaFirstContainer = document.querySelector(".cgpaFirstContainer");
let cgpaSecondContainerOdderList = document.querySelector(".cgpaSecondContainerOdderList");
let resultsgpaContainer = document.querySelector(".resultsgpa-container");
let cgpaCalculateBtn = document.querySelector("#cgpaCalculateBtn");
let finalcgpa = document.querySelector(".finalcgpa");
let cgpaResult = document.querySelector("#cgpa");

let cgpaSubmitBtn = document.querySelector("#cgpaSubmitBtn");

//suffix ex- 1st,2nd,3rd etc
function suffixCheck(i)
{
    if (i == 11 || i == 12 || i == 13) {
        return 'th';
    } else if (i % 10 == 1) {
        return 'st';
    } else if (i % 10 == 2) {
        return 'nd';
    } else if (i % 10 == 3) {
        return 'rd';
    } else {
        return 'th';
    }
}

cgpaSubmitBtn.addEventListener("click", () => {

    let numberOfSubjectValue = numberOfSubject.value;
    let count = numberOfSubjectValue;
    if(numberOfSubjectValue != '')
    {
        resultsgpaContainer.style.display = "block";
        cgpaSecondContainerOdderList.style.display = "block";
        cgpaFirstContainer.style.display = "none";
        for(let i = 0; i < numberOfSubjectValue; i++)
        {
        let list = `<li>
        <input type="number" class="sgpaValue" placeholder="Enter ${count}${suffixCheck(count--)} semester SGPA">
        </li>`
        cgpaSecondContainerOdderList.insertAdjacentHTML("afterbegin",list);
        }
    }
    else
    {
        alert("Please enter the number of subjects");
    }

});

finalcgpa.style.display = "none";

cgpaCalculateBtn.addEventListener("click", () => {
    
    let sum = 0;
    let sgpavalue = document.querySelectorAll('.sgpaValue');

    sgpavalue.forEach((elem,index) => {
        if(sgpavalue[index].value == '')
        {
           alert(`Please enter the SGPA for the ${index+1}${suffixCheck(index+1)} Semester`);
        }
        sum += Number(sgpavalue[index].value);
    });
    let cgpa = sum/sgpavalue.length;

    finalcgpa.style.display = "block";

    cgpaResult.innerHTML = cgpa.toFixed(2);
    
});

//***********************[[[[[[[[[[[[[[[[[[[[ CGPA Calculator Section [  End ] **]]]]]]]]]]]]]]]]]]]]]]]]]]*****************************


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