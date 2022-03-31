function calc() {
  // wallet fixed amount
    var amount = 5000;

    // percentage from each of the sub-wallet

    // ....Load Percentage
      var loadpercent = Number(document.getElementById('loanBill').value);

    // .....Convertible Note Percentage
      var conpercent = Number(document.getElementById('convertibleBill').value);

    // .......shared Profit Percentage
    var profitpercent = Number(document.getElementById('profitBill').value);

    // .......Equity Percentage
    var equitypercent = Number(document.getElementById('equityBill').value);

    // ........Grants Percentage
    var grantpercent = Number(document.getElementById('grantsBill').value);

    // This the sum total of all the percentag collected from each of the sub-wallet
    var percentTotal = loadpercent + conpercent + profitpercent + equitypercent + grantpercent;

      if( percentTotal <= 100){ // IF THE SUM TOTAL OF THE WHOLE PERCENTAGE COLLECTED IS LESS THAN OR EQUAL TO 100% THE BELOW CONDITIONS WOULD BE APPLIED

        if( loadpercent <= 50 ){   //if the percentage collected from LOAD percentage input is less or equal to 50% the calculation will take place
        //  IN HERE BELOW AFTER THE  PERCENTAGE HAS BEEN COLLECTED FROM THE INPUT, IT'S THEN DIVIDED BY 100 AND MULTIPLIED BY THE FIXED WALLET AMOUNT {5000}
          var load = amount *(loadpercent/100);
        };
        // else{
        //     alert('Load Percentage is more than 50% reduce it')
        // };
        if( conpercent <= 50){  //if the percentage collected from CONVERTIBLE NOTE percentage input is less or equal to 50% the calculation will take place
        //  IN HERE BELOW AFTER THE  PERCENTAGE HAS BEEN COLLECTED FROM THE INPUT, IT'S THEN DIVIDED BY 100 AND MULTIPLIED BY THE FIXED WALLET AMOUNT {5000}
          var con = amount *(conpercent/100)
        } 
        // else{
        //   alert('Convertible Note Percentage is more than 50% reduce it')
        // };
        if( profitpercent <= 50){ //if the percentage collected from SHARED PROFIT percentage input is less or equal to 50% the calculation will take place
        //  IN HERE BELOW AFTER THE  PERCENTAGE HAS BEEN COLLECTED FROM THE INPUT, IT'S THEN DIVIDED BY 100 AND MULTIPLIED BY THE FIXED WALLET AMOUNT {5000}
          var profit = amount *(profitpercent/100)
        } 
        // else{
        //   alert('Shared Profit Percentage is more than 50% reduce it')
        // }; 
        if( equitypercent <= 50){ //if the percentage collected from EQUITY percentage input is less or equal to 50% the calculation will take place
        //  IN HERE BELOW AFTER THE  PERCENTAGE HAS BEEN COLLECTED FROM THE INPUT, IT'S THEN DIVIDED BY 100 AND MULTIPLIED BY THE FIXED WALLET AMOUNT {5000}
          var equity = amount *(equitypercent/100)
        } 
        // else{
        //   alert('Equity Percentage is more than 50% reduce it')
        // };
        if( grantpercent <= 50){ //if the percentage collected from GRANTS percentage input is less or equal to 50% the calculation will take place
        //  IN HERE BELOW AFTER THE  PERCENTAGE HAS BEEN COLLECTED FROM THE INPUT, IT'S THEN DIVIDED BY 100 AND MULTIPLIED BY THE FIXED WALLET AMOUNT {5000}
          var grant = amount *(grantpercent/100)
        } 
        // else{
        //   alert('Grants Percentage is more than 50% reduce it')
        // };
        var totalAmount = load + con + profit + equity + grant;
        var finalAmount = amount - totalAmount; 

      }
      else{
        alert('The sum total of percentage is more than 100%. Make an adjustment')
      };
      document.getElementById("balance").innerHTML = "$" + Number(finalAmount).toFixed(2);
      document.getElementById("showload").innerHTML = "$" + Number(load).toFixed(2);
      document.getElementById("showcon").innerHTML = "$" + Number(con).toFixed(2);
      document.getElementById("showprofit").innerHTML = "$" + Number(profit).toFixed(2);
      document.getElementById("showequity").innerHTML = "$" + Number(equity).toFixed(2);
      document.getElementById("showgrant").innerHTML = "$" + Number(grant).toFixed(2);
  }