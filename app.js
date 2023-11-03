

let dersAdi=prompt("Ders adını giriniz")
if(dersAdi=="matematik","Matematik"){
let vize1=Number(prompt("1. vize notunuzu giriniz:"));
let vize2=Number(prompt("2.vize notunuzu giriniz:"));
let final=Number(prompt("Final notunuzu giriniz:"));
let ortalama=(vize1*0.3)+(vize2*0.3)+(final*0.4);
if(ortalama>=60){
alert(dersAdi+ " Dersinden geçtiniz tebrikler "+ortalama);
console.log(ortalama);
}else{
alert(dersAdi+" Dersinden kaldınız, bütlerde görüşürüz... "+ortalama );
console.log(ortalama);    
}
}else if(dersAdi!="matematik","Matematik"){
prompt("Geçerli ders ismi girniz")
if(dersAdi=="matematik","Matematik"){
let vize1=Number(prompt("1. vize notunuzu giriniz:"));
let vize2=Number(prompt("2.vize notunuzu giriniz:"));
let final=Number(prompt("Final notunuzu giriniz:"));
let ortalama=(vize1*0.3)+(vize2*0.3)+(final*0.4);
if(ortalama>=60){
alert(dersAdi+ " Dersinden geçtiniz tebrikler "+ortalama);
console.log(ortalama);
}else{
alert(dersAdi+" Dersinden kaldınız, bütlerde görüşürüz... "+ortalama );
console.log(ortalama); 
}
}else if(dersAdi!="matematik","Matematik"){
alert("üst üste iki defa hatalı giriş yaptınız sayfayı yenileyiniz");
}
}