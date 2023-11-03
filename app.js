//Beden Kitle Endeksi


alert("Bu Ölçümde kullanılan değerler Acıbadem Hastanesi sitesinden alınmıştır");

let kilo=Number(prompt("Kilonuzu girniz"));
if(kilo==""){
    alert("Kilonuzu giriniz");  
}
let boy=Number(prompt("Boyunuzu metre cinsinden Giriniz"));
if(boy==""){
    alert("Boyunuzu giriniz");
}
let sonuc=kilo/(boy*2);

if(sonuc<18.5){
alert("ideal Kilonun Altında");
console.log("ideal Kilonun Altında");
}
else if(sonuc>=18.5 && sonuc<=24.9){
alert("ideal Kiloda");
}
else if(sonuc>=25 && sonuc<=29.9){
alert("ideal Kikonun Üstünde");
}
else if(sonuc>=30 && sonuc<=39.9){
alert("ideal Kilonun Çok Üstünde(obez)");
}
else if(sonuc>=40){
    alert("ideal Kilonun Çok Üstünde( morbidobez)");
}

