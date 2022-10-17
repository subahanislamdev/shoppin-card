// start code phone case
function caseupdateinputvalue(increase){
    // input value from input function
  var caseinputfield = document.getElementById('case-input-field')
  var caseinputvalue = parseInt(caseinputfield.value);
  var Newcaseinputvalue;
  if(increase === true ){
    Newcaseinputvalue = caseinputvalue  + 1;
  }else{
    Newcaseinputvalue = caseinputvalue - 1;
  }
  caseinputfield.value = Newcaseinputvalue;
  return Newcaseinputvalue;
}

function caseupdateprice(Newcaseinputvalue){
    // input value from price total
    var casetotalprice = Newcaseinputvalue*59;
    var casetotalelement = document.getElementById('case-price')
    casetotalelement.innerText = casetotalprice;
}

document.getElementById('case-btn-plus').addEventListener('click',function(){
    var Newcaseinputvalue = caseupdateinputvalue(true)
    caseupdateprice(Newcaseinputvalue)
    commonvalue()
  
});
document.getElementById('case-btn-minus').addEventListener('click',function(){
    var Newcaseinputvalue = caseupdateinputvalue(false)
    caseupdateprice(Newcaseinputvalue)
    commonvalue()
});
// end code phone case