let yeniSatir = "\r\n";
let randomNumber = Math.floor(Math.random() * 100000);

let checkCod = prompt(
  "Sisteme giriş için doğrulama kodunu giriniz." +
    yeniSatir +
    "Doğrulama kodu: " +
    randomNumber
);
if (checkCod == randomNumber) {
  let TcNo = prompt(
    "Doğrulama kodu doğru " + yeniSatir + "Tc kimlik numaranızı giriniz."
  );
  let adSoyad = prompt("Adınızı Soyadınızı giriniz.");

  kontrolEt(adSoyad, TcNo);

  function kontrolEt(adSoyad, TcNo) {
    if (TcNo != "") {
      if (TcNo.length == 11) {
        if (adSoyad !== "") {
          alert(
            "Ad soyad: " +
              adSoyad +
              yeniSatir +
              "Tc kimlik numaranız: " +
              TcNo +
              yeniSatir +
              " İyi antrenmanlar..."
          );
        } else {
          alert("Ad soyad alanı boş bırakılamaz.");
        }
      } else {
        alert("Lütfen Tc kimlik numaranızı 11 karakter olarak giriniz.");
      }
    } else {
      alert("Lütfen Tc kimlik numarası alanını boş bırakmayınız.");
    }
  }
} else {
  alert("Doğrulama kodu kodu yanlış.");
}
