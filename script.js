function displayNum(num)
{
    result.value+=num;
}
function clearBox(){
    result.value="";
}
function evaluateExpression(){
    /*let currentValue=result.value;
    let result=eval(currentValue);
    result.value=result;*/
    //or
    result.value=eval(result.value);

}
function del()
{var value = document.getElementById("result").value;
    result.value = value.slice(0, value.length - 1);
}
//  or
/*function del() {
    var value = document.getElementById("result").value;
    result.value = value.substr(0, value.length - 1);
}*/