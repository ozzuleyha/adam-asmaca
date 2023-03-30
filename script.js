        const word = "peynir";
        let dogruBilinen = [];
        let canHakki = 6;
    
    function sameMembers(arr1, arr2) {
            const set1 = new Set(arr1);
            const set2 = new Set(arr2);
            return arr1.every(item => set2.has(item)) &&
                arr2.every(item => set1.has(item))
        } //2 farklı array

function buttonClick(param) {
    let chars = [];
    let wordArr = word.split("");
    let text = document.getElementById("textInputu");
    let sonuc = document.getElementById("sonuc");
    let adam = document.getElementById("adam");
    let dogruBilinenHarfler = document.getElementById("dogru-bilinen-harfler");

    switch (canHakki) {
        case 5:
            adam.innerText = "Adamin sag bacagi silindi";
            break;
        case 4:
            adam.innerText = "Adamin sol bacagi silindi";
            break;
        case 3:
            adam.innerText = "Adamin govdesi silindi";
            break;
        case 2:
            adam.innerText = "Adamin sol kolu silindi";
            break;
        case 1:
            adam.innerText = "Adamin sag kolu silindi";
            break;
        case 0:
            adam.innerText = "Adamin basi silindi. Oyunu kaybettiniz";
            const reloadBtn = document.getElementById("reloadBtn");
            reloadBtn.style.display = "block";
            reloadBtn.addEventListener("click", function() {
                window.location.reload();
              });
            return false;
            break;
        default:
            break;
    }

    console.log("butona tiklandi", param);
    chars.push(param);
    text.innerText = param;
    console.log("text area", text.innerText);
    setTimeout(() => {
        
        chars.forEach(element => {
            let button = document.getElementById(element);
            let kontrol = wordArr.includes(element);
            if ((kontrol)) {
              dogruBilinen.push(element);
              dogruBilinenHarfler.innerText+= " " + element + ",";
              console.log("same members", sameMembers(wordArr, dogruBilinen));
            }
            if (kontrol) {
                console.log("kontrol", kontrol);
                console.log("dogrubilinen", dogruBilinen);
                
                if (sameMembers(wordArr, dogruBilinen)) {
                    console.log("kelime tamamlandi");
                }
                sonuc.innerText = "Dogru bildiniz";
            }else {
                canHakki--;
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
                        default:
                            button.disabled = false;
                            
                }
                sonuc.innerText = "Yanlis bildiniz kalan can hakkiniz: " + canHakki;
                console.log("Yanlis Bildiniz can hakkiniz", canHakki);
            }
            });
    }, 100);
}
