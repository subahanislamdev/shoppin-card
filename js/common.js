function getTextelementByid(elementid){
    var phonetotalelement = document.getElementById(elementid)
    var currentphonetotal = parseInt(phonetotalelement.innerText)
    return currentphonetotal;
}
// tax value from function
function getText(elementid,value){
    var tax = document.getElementById(elementid)
    tax.innerText = value;
}

function commonvalue(){
    // subtotal calculate
    var currentphonetotal = getTextelementByid('phone-price')
    var currentcasetotal = getTextelementByid('case-price')
    var subtotal = currentphonetotal + currentcasetotal;
    var subtotalvalue = document.getElementById('subtotal-amount')
    subtotalvalue.innerText = subtotal;
    // tax calculate
    var totaltax = parseFloat((subtotal * .1).toFixed(2));
    getText('tax-amount',totaltax)
    // final amount calculate
    var finalamount = totaltax + subtotal;
    getText('total-amount',finalamount)

}
document.getElementById('cheakout').addEventListener('click',function(){
    alert('Your order is submited')
})