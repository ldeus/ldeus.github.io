function decode(xlat){
    var pwd_in = document.getElementById("pwd-input").value;
    var enc_pw = pwd_in + '\u0000';
      var test_pw ='';
      var seed = parseFloat(enc_pw.slice(0 ,2));
      var val= 0;
  
            for(var i=2 ;i< enc_pw.length;i++){
                if (i%2 ===0 && i>2){
                seed +=1;
                var test_pw_char = String.fromCharCode(val ^xlat[seed]);
                test_pw +=test_pw_char;
                val=0;
              }
              
               val *=16
              var tmp = enc_pw[i].toUpperCase();
  
          if (tmp >= '0' && tmp <='9'){
            val+= parseInt(tmp);
            continue;
          }
           if (tmp >= 'A' && tmp <= 'F'){
            val+= (tmp.charCodeAt(0) -65 +10)
           }
            
   }
    document.getElementById("pwd-output").innerHTML = test_pw;
    return test_pw;
  }
  function cisco_decode(){
    var cisco_xlat= [9999, 9999, 9999, 9999, 9999, 59, 107, 102, 111, 65, 44, 46, 105, 121, 101, 119, 114, 107, 108, 100, 74, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999];
    decode(cisco_xlat);
  }
  function ruijie_decode(){
    var ruijie_xlat = [9999, 42,   64,   35,   35,   87,   120,  102,  94,   99,   79,   117,  114, 71, 101, 114, 42, 109, 65, 114, 75, 76, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999 ];
    decode(ruijie_xlat);
  }