//ÖDEV
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?
//3.adım: kaç tane tek  sayı var ?
//4.adım: kaç tane çift  sayı var ?

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise çalışmasın (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmadan dursun 

//kullanıcıdan veri alan yer
var num = Number(prompt("sayı giriniz"));


// 1 den kücük ise tekrar numara girmesini sağlayan dongu
while (!(num > 1)) {
    num = Number(prompt("1'den büyük sayı giriniz."));
}

// 44 ile programı durdurur
if (num == 44) {
    alert("program durdu")
    num = null;
}

//girilen sayı
document.writeln("Verilen sayı : " + num + '<br>');
if (num >= 100) {
    num = 99;
}
//kaç tane sayı oldugunu yazan fonksiyon
function numbers() {
  
    if (num >= 44) {
        document.writeln("Kaç tane sayı : " + (num - 2) + '<br>');
    }else{
        document.writeln("Kaç tane sayı : " + (num - 1) + '<br>');

    }
}

// toplam
function sum() {

    var sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }

    document.writeln("Toplam sayı : " + sum + '<br>');
}

//cift sayılar
function evenNumber() {
    var numbers = "";
    var even = 0;
    var evenSum = 0;
    for (let i = 1; i <= num; i++) {
        if (i == 44) {
            continue;
        }
        if (i % 2 == 0) {
            evenSum = evenSum + i;
            even++;
            numbers = numbers + " " + i;
        }

    }
    document.writeln("Cift sayı adeti : " + even + '<br>' +
        "Cift sayıların toplamı : " + evenSum + '<br>' +
        "Cift sayılar: " + numbers + '<br>');
}

//tek sayılar sayılar
function oddNumber() {
    var odd = 0;
    var numbers = "";
    var oddSum = 0;
    for (let i = 1; i <= num; i++) {

        if (i == 7) {
            continue;
        }
        if (i % 2 == 1) {
            oddSum = oddSum + i;
            odd++;
            numbers = numbers + " " + i;
        }

    }
    document.writeln("Tek sayı adeti : " + odd + '<br>' +
        "Tek sayıların toplamı : " + oddSum + '<br>' +
        "Tek sayılar : " + numbers + '<br>');
}

//fonksiyonların ekrana yazdırıldığı yer
numbers();
sum();
evenNumber();
oddNumber();
