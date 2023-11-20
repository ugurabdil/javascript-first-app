

let yeniSatir=("\r\n");
let randomNumber=Math.floor(Math.random()*100000);

let checkCode=prompt("Sistem girişi için doğrulama kodunu giriniz"+yeniSatir+
"Doğrulama kodu: "+randomNumber); 
if(checkCode==randomNumber){
    alert("Doğrulama kodu doğru");
}else{
    alert("Doğrulama kodu kodu yanlış");
}