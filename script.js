let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        calculatingByMouse(e);
    })
});


//***************[[[[[[  Calculating ]]]]******************************]]]]]]]]]]]]]]
function calculatingByMouse(e)
{
    console.log(e);
    if(e.target.innerHTML == '=')
    {
        string = eval(string);
        input.value = string;
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
        string += e.target.innerHTML;
        input.value =string;
   
    }

}

window.addEventListener('keyup', (e) => {

    if((e.keyCode>=48 && e.keyCode<=57) || (e.keyCode == 46) || (e.keyCode == 8) || (e.keyCode == 13)) 
    {
        calculatingByKeyboard(e.key);
    }

    console.log(e.keyCode);
});

function calculatingByKeyboard(e)
{
    console.log(e);
    if((e == 'enter'))
    {
        string = eval(string);
        input.value = string;
        string = "";
    }

    else if ((e == 'delete'))
    {
        string = "";
        input.value = string;
    }

    // else if(e.target.innerHTML == 'DEL')
    // {
    //     string = string.substring(0, string.length-1);
    //     input.value = string;
    // }

    else
    {
        string += e;
        input.value =string;
   
    }

}

// let colorChangingIcon = document.querySelector('#colorChanging-icon');

// colorChangingIcon.onclick = () => {
//    colorChangingIcon.classList.toggle('bxs-shower');    
//    document.body.classList.toggle('bxs-color');
// }