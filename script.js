        const word = "peynir";
        let dogruBilinen = [];
        let canHakki = 6;

  function buttonClick(param) {
    let chars = [];
    let wordArr = word.split("");
    let text = document.getElementById("textInputu");
    let sonuc = document.getElementById("sonuc");
    let adam = document.getElementById("adam");
    let dogruBilinenHarfler = document.getElementById("dogru-bilinen-harfler");
    let yanlisBilinenHarfler = document.getElementById("yanlis-bilinen-harfler");
    

    console.log("butona tiklandi", param);
    chars.push(param);
    text.innerText = param;
    console.log("text area", text.innerText);
    setTimeout(() => {
        
        chars.forEach(element => {
        
            let kontrol = wordArr.includes(element);
            if (kontrol) {
              dogruBilinen.push(element);
              dogruBilinenHarfler.innerText+= " " + element + ",";
            }
            if (kontrol) {
                    console.log("kontrol", kontrol);
                    console.log("dogrubilinen", dogruBilinen);
                    
                    if (dogruBilinen === wordArr) {
                        console.log("kelime tamamlandi");
                    }
                    sonuc.innerText = "Dogru bildiniz";
                }else {
                    canHakki--;
                    let button = document.getElementById(element);
                    switch(element){
                        case "a":
                            button.disabled = true;
                            button.classList.add('disabled');
                            break;
                            case "b":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "c":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "d":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "e":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "f":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "g":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "h":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "i":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "j":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "k":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "l":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "m":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "n":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "o":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "p":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "r":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "s":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "t":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "v":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "y":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "z":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "x":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "w":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "q":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;
                            case "u":
                                button.disabled = true;
                                button.classList.add('disabled');
                                break;

                    }
                    sonuc.innerText = "Yanlis bildiniz kalan can hakkiniz: " + canHakki;
                    yanlisBilinenHarfler.innerText += " " + element + ",";
                    console.log("Yanlis Bildiniz can hakkiniz", canHakki);
                }
                if (canHakki === 5) {
                    adam.innerText = "Adamin sag bacagi silindi";
                }
                if (canHakki === 4) {
                    adam.innerText = "Adamin sol bacagi silindi";
                }
                if (canHakki === 3) {
                    adam.innerText = "Adamin govdesi silindi";
                }
                if (canHakki === 2) {
                    adam.innerText = "Adamin sag kolu silindi";
                }
                if (canHakki === 1) {
                    adam.innerText = "Adamin sol kolu silindi";
                }
                if (canHakki === 0) {
                    adam.innerText = "Adamin kafasi silindi. OYUNU KAYBETTINIZ!!!!";
                }
            });
    }, 100);
    

}
  



function tahminiAl() {
    const tahmin = document.getElementById("tahmin-edilen-harf").value;

    console.log("tahmini aliyor muyum?", tahmin);

    let wordArr = word.split("");
    let tahminArr = tahmin.split("");

    console.log(wordArr);
    console.log(tahminArr);

    tahminArr.forEach(element => {
        
        let kontrol = wordArr.includes(element);
        if (kontrol) {
          dogruBilinen.push(element);
        }
        if (kontrol) {
                console.log("kontrol", kontrol);
                console.log("dogrubilinen", dogruBilinen);
                if (dogruBilinen === wordArr) {
                    console.log("kelime tamamlandi");
                }
                alert("Dogru bildiniz!");
            }else {
                canHakki--;
                console.log("Yanlis Bildiniz can hakkiniz", canHakki);
            }
            if (canHakki === 5) {
                alert("Adamin Sag bacagi silindi");
            }
            if (canHakki === 4) {
                alert("Adamin sol bacagi silindi");
            }
            if (canHakki === 3) {
                alert("Adamin govdesi silindi");
            }
            if (canHakki === 2) {
                alert("Adamin sag kolu silindi");
            }
            if (canHakki === 1) {
                alert("Adamin sol kolu silindi");
            }
            if (canHakki === 0) {
                alert("Adamin kafasi silindi. OYU;NU KAYBETTINIZ")
            }
      });
      


}
