
function calc() {
    var amount = Number(`5000`)
    var bill = Number(document.getElementById('baseAmount').value);
    if( bill = amount ){
      var loadpercent = Number(document.getElementById('loanBill').value);
      var load = bill *(loadpercent/100);
       }
          else{
            alert('invalid')
          };
        if(bill = amount){
          var conpercent = Number(document.getElementById('convertibleBill').value);
          var con = bill *(conpercent/100)
        } 
        else{
          alert('invalid')
        };
        if(bill = amount){
          var profitpercent = Number(document.getElementById('profitBill').value);
          var profit = bill *(profitpercent/100)
        } 
        else{
          alert('invalid')
        };
        if(bill = amount){
          var equitypercent = Number(document.getElementById('equityBill').value);
          var equity = bill *(equitypercent/100)
        } 
        else{
          alert('invalid')
        };
        if(bill = amount){
          var grantpercent = Number(document.getElementById('grantsBill').value);
          var grant = bill *(grantpercent/100)
        } 
        else{
          alert('invalid')
        };
        // if( (loadpercent + conpercent + profitpercent + equitypercent + grantpercent) = '1000'){
          
        // }


    document.getElementById("showload").innerHTML = "$" + Number(load).toFixed(2);
    document.getElementById("showcon").innerHTML = "$" + Number(con).toFixed(2);
    document.getElementById("showprofit").innerHTML = "$" + Number(profit).toFixed(2);
    document.getElementById("showequity").innerHTML = "$" + Number(equity).toFixed(2);
    document.getElementById("showgrant").innerHTML = "$" + Number(grant).toFixed(2);
  }

