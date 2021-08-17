// handle deposit button event 
document.getElementById('deposit-submit').addEventListener('click',function(){


    var depositInput = document.getElementById('deposit-input');
    var depositAmount = depositInput.value;
    
    if(depositAmount>0){
        var depositField = document.getElementById('deposit-field');
    
        depositField.innerText = parseFloat(depositAmount)+parseFloat(depositField.innerText);

        var balanceField = document.getElementById('balance-field');
        balanceField.innerText = parseFloat(balanceField.innerText)+parseFloat(depositAmount);
    }
    depositInput.value = '';    
});

// handle withraw button event 
document.getElementById('withraw-submit').addEventListener('click',function(){


    var withrawInput = document.getElementById('withraw-input');
    var withrawAmount = withrawInput.value;

    if(withrawAmount>0){

        var withrawField = document.getElementById('withraw-field');
        var balanceField = document.getElementById('balance-field');
        if(parseFloat(withrawAmount)<= parseFloat(balanceField.innerText)){
            withrawField.innerText = parseFloat(withrawAmount)+parseFloat(withrawField.innerText);
            balanceField.innerText = parseFloat(balanceField.innerText)-parseFloat(withrawAmount);
        }
    }
    withrawInput.value = '';

});