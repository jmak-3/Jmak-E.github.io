    let button = document.querySelector('button');
    let coup = document.querySelector('.attempt');
    var n = 5;
    coup.innerText = 'Attempt : ' + n;
    let quest = document.querySelector('.equation');
    quest.innerText = "4x - (√256) = 12";
    
    
  function animated() {
    let el1 = document.querySelector('item1');
    let el2 = document.querySelector('item2');
    el1.style.display = 'flex';
    el2.style.display = 'flex';
  }
    
    
    function getTest() {
      let el = parseInt(document.getElementById('input').value);
      let mes = document.querySelector('.reponse');
      let rep = 7;
      while (n > 0) {
        if (el != rep) {
          n --;
          coup.innerHTML = 'Attempt : ' + n;
          alert('Réponse incorrect réessayer');
          if (n == 0) {
            mes.innerHTML = 'Vous avez perdu ! Améliorez votre QI';
            button.style.display = 'none';
          }else {
          break;
          }
        } else if (el === rep) {
          mes.innerHTML = 'Vous avez réussi  | QI Élevé';
          n = 0;
          button.style.display = 'none';
          break;
        }
        
      } 
  }
  