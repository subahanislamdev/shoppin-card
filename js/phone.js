// start code phone 
function phoneupdatevalue(element){
      // input value from input function
    var phoneinputfield = document.getElementById('phone-input-field')
    var phoneinputvalue = parseInt(phoneinputfield.value);
    var Newphonevalue;
    if(element === true){
        Newphonevalue = phoneinputvalue + 1;
    }else{
        Newphonevalue = phoneinputvalue -1;
    }
    phoneinputfield.value = Newphonevalue;
    return Newphonevalue;

}
function phoneupdateprice( Newphonevalue){
    // input value from price total
    var totalphoneprice = Newphonevalue * 1219;
    var totalelement = document.getElementById('phone-price')
    totalelement.innerText  = totalphoneprice;
}

document.getElementById('phone-btn-plus').addEventListener('click',function(){
    var  Newphonevalue = phoneupdatevalue(true)
    phoneupdateprice( Newphonevalue)
    commonvalue()
    
});
document.getElementById('phone-btn-minus').addEventListener('click',function(){
    var Newphonevalue = phoneupdatevalue(false)
    phoneupdateprice( Newphonevalue)
    commonvalue()
   
});
// end code phone 
