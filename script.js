const word = "deneme";
let dogruBilinen = [];
let canHakki = 6;

function sameMembers(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);
  return (
    arr1.every((item) => set2.has(item)) && arr2.every((item) => set1.has(item))
  );
} //2 farklı array

function oyunuBitir() {
    const reloadBtn = document.getElementById("reloadBtn");
      reloadBtn.style.display = "block";
      reloadBtn.addEventListener("click", function () {
        window.location.reload();
      });
      return false;
}

function buttonClick(param) {
    if (canHakki === 0 ) {
        return oyunuBitir();
    }
  let wordArr = word.split("");
  let text = document.getElementById("textInputu");
  let sonuc = document.getElementById("sonuc");
  let adam = document.getElementById("adam");
  let dogruBilinenHarfler = document.getElementById("dogru-bilinen-harfler");


  if (sameMembers(wordArr, dogruBilinen) && (wordArr.length === dogruBilinen.length)) {
    console.log("kelime tamamlandi");
     return oyunuBitir();
  }

  console.log("butona tiklandi", param);
  text.innerText = param;
  console.log("text area", text.innerText);
  setTimeout(() => {
    let button = document.getElementById(param);
    let kontrol = wordArr.includes(param);
    if (kontrol) {

      dogruBilinen.push(param);
      dogruBilinenHarfler.innerText += " " + param + ",";
      console.log("same members", sameMembers(wordArr, dogruBilinen));
      console.log("kontrol", kontrol);
      console.log("dogrubilinen", dogruBilinen);
      sonuc.innerText = "Dogru bildiniz";
    } else {
      canHakki--;
      switch (param) {
        case "a":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "b":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "c":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "d":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "e":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "f":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "g":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "h":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "i":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "j":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "k":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "l":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "m":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "n":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "o":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "p":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "r":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "s":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "t":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "v":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "y":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "z":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "x":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "w":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "q":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        case "u":
          button.disabled = true;
          button.classList.add("disabled");
          break;
        default:
          button.disabled = false;
      }
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
          sonuc.innerText = "Yanlis bildiniz kalan can hakkiniz: " + canHakki;
          adam.innerText = "Adamin basi silindi. Oyunu kaybettiniz";
          return oyunuBitir();
        default:
            return oyunuBitir();
      }
      sonuc.innerText = "Yanlis bildiniz kalan can hakkiniz: " + canHakki;
      console.log("Yanlis Bildiniz can hakkiniz", canHakki);
    }
  }, 100);
}
