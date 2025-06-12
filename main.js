// COMPUTER CHOICE
const suaraMenang = new Audio('sound/spin-complete-295086.mp3');
const suaraSeri = new Audio('sound/sword-slash-with-metal-shield-impact-185433.mp3')
const suaraKalah = new Audio('sound/hit-flesh-02-266309.mp3');
const suaraPutar = new Audio('sound/spinner-sound-36693.mp3');
function playSoundLimited(audio) {
    audio.currentTime = 0;
    audio.play();
    setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 1000); 
}

function getComputerChoice(playerChoice) {
    const counterMap = {
        batu: 'kertas',     
        kertas: 'gunting',  
        gunting: 'batu'     
    };
    const counter = counterMap[playerChoice];
    const random = Math.random();
    if (random < 0.4) {
        return counter;
    } else {
        const choices = ['batu', 'kertas', 'gunting'];
        return choices[Math.floor(Math.random() * 3)];
    }
}


let playerLives = 3;
const playerHealth = document.getElementById('playerHealth');

function updateHealthDisplay() {
    playerHealth.textContent = '❤️'.repeat(playerLives);
}

function cekKondisiAkhir() {
    if (playerLives === 0) {
        setTimeout(() => {
            const jumpscare = document.getElementById('kejutan');
            jumpscare.style.display = 'block';

            const suaraJumpscare = new Audio('sound/screamer-jumpscare-66896.mp3');
            playSoundLimited(suaraJumpscare);

            setTimeout(() => {
                jumpscare.style.display = 'none';
                playerLives = 3;
                updateHealthDisplay();
                alert('>_< Kamu kalah! Game diulang.');
            }, 3000);
        }, 500);
    }
}



function putar() {
    const gambar = ['batu', 'kertas', 'gunting'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    playSoundLimited(suaraPutar);
    const intervalId = setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval(intervalId); 
            return;
        }
        com.classList.remove('batu', 'kertas', 'gunting');
        com.classList.add(gambar[i++]);
        if (i === gambar.length) i = 0;
    }, 100);
}

let com = document.getElementById('com')
// PLAYER CHOICE
const batu = document.getElementById('batu')
const kertas = document.getElementById('kertas')
const gunting = document.getElementById('gunting')

const result = document.getElementById('endScreen')
let h1 = result.querySelector('h1')
let hasilAkhir = document.createElement('h1')



  batu.addEventListener('click', function () {
    const computer = getComputerChoice("batu");
    hasilAkhir.textContent = ""
    putar()

    setTimeout(function(){
          if(computer === "batu"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('batu')
        hasilAkhir.textContent = 'seri'
        playSoundLimited(suaraSeri);
    }
    else if(computer === "kertas"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('kertas')
        hasilAkhir.textContent = 'kalah'
        playSoundLimited(suaraKalah);
        playerLives--;
    }
    else{
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('gunting')
        playSoundLimited(suaraMenang);
        hasilAkhir.textContent = 'Menang'
    }
    updateHealthDisplay(); 
     cekKondisiAkhir(); 
     result.replaceChild(hasilAkhir, h1);
    h1 = hasilAkhir;
    },1000)
  
})

  kertas.addEventListener('click', function () {
    const computer = getComputerChoice('kertas');
    hasilAkhir.textContent = ""
    putar()

    setTimeout(function(){
       if(computer === "kertas"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('kertas')
        hasilAkhir.textContent ='seri'
        playSoundLimited(suaraSeri);
    }
    else if(computer === "gunting"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('gunting')
        hasilAkhir.textContent = 'kalah'
        playerLives--;
        playSoundLimited(suaraKalah);
    }
    else{
        hasilAkhir.textContent = 'Menang'
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('batu')
        playSoundLimited(suaraMenang);
    }
     updateHealthDisplay(); 
     cekKondisiAkhir(); 
     result.replaceChild(hasilAkhir, h1);
    h1 = hasilAkhir;
    },1000)
})

  gunting.addEventListener('click', function () {
    const computer = getComputerChoice('gunting');
    hasilAkhir.textContent = ""

     putar()

    setTimeout(function(){
          if(computer === "gunting"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('gunting')
        hasilAkhir.textContent = 'seri'
        playSoundLimited(suaraSeri);
    }
    else if(computer === "batu"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('batu')
        hasilAkhir.textContent ='kalah'
        playerLives--;
        playSoundLimited(suaraKalah);
    }
    else{
        hasilAkhir.textContent ='Menang'
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('kertas')
        playSoundLimited(suaraMenang);
    }
    updateHealthDisplay(); 
     cekKondisiAkhir(); 
     result.replaceChild(hasilAkhir, h1);
    h1 = hasilAkhir;
    },1000)
})

