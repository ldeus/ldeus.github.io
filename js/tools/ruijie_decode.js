function rj_decode(){
    var pwd_in = document.getElementById("pwd-input").value;
    var enc_pw = pwd_in + '\u0000';
    var xlat = [9999, 42,   64,   35,   35,   87,   120,  102,  94,   99,   79,   117,  114, 71, 101, 114, 42, 109, 65, 114, 75, 76, 9999, 9999, 9999, 9999, 9999, 9999, 9999, 9999 ];
      var test_pw ='';
      var seed = parseFloat(enc_pw.slice(0 ,2));
      //console.log("seed:" + seed);
      var val= 0;
  
            for(var i=2 ;i< enc_pw.length;i++){
                //console.log(i);
  
                if (i%2 ===0 && i>2){
                seed +=1;
                var test_pw_char = String.fromCharCode(val ^xlat[seed]);
                test_pw +=test_pw_char;
                val=0;
                //console.log(seed,xlat[seed],test_pw_char);
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
   alert(test_pw);
    
    console.log(test_pw);
    return test_pw;
  }
  //document.getElementById("decode_password").addEventListener("click", rj_decode);
  