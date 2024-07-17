    let button = document.querySelector('button');
    let coup = document.querySelector('.attempt');
    var n = 5;
    coup.innerHTML = 'Attempt : ' + n;
    let quest = document.querySelector('.equation');
    quest.innerHTML = "4x - (√256) = 12";
    
    function getTest() {
      let el = document.getElementById('input').value;
      let mes = document.querySelector('.reponse');
      let rep = '7';
      while (n > 0) {
        if (el != rep) {
          n --;
          coup.innerHTML = 'Attempt : ' + n;
          alert('Réponse incorrect réessayer');
          if (n == 0) {
            mes.innerHTML = 'Vous avez perdu ! Améliorez votre QI';
            button.style.display = 'none';
            break
          }else {
          break
          }
        } else if (el === rep) {
          console.log(el);
          mes.innerHTML = 'Vous avez réussi  | QI Élevé';
          n = 0;
          button.style.display = 'none';
          break
        }
        
      } 
  }
  