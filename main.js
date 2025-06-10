// COMPUTER CHOICE
function getComputerChoice() {
    const choices = ['batu', 'kertas', 'gunting'];
    return choices[Math.floor(Math.random() * 3)];
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
    const computer = getComputerChoice();
    hasilAkhir.textContent = ""

    if(computer === "batu"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('batu')
        hasilAkhir.textContent = 'seri'
    }
    else if(computer === "kertas"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('kertas')
        hasilAkhir.textContent = 'kalah'
    }
    else{
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('gunting')
        hasilAkhir.textContent = 'Menang'
    }
     result.replaceChild(hasilAkhir, h1);
    h1 = hasilAkhir;
})

  kertas.addEventListener('click', function () {
    const computer = getComputerChoice();
    hasilAkhir.textContent = ""

       if(computer === "kertas"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('kertas')
        hasilAkhir.textContent ='seri'
    }
    else if(computer === "gunting"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('gunting')
        hasilAkhir.textContent = 'kalah'
    }
    else{
        hasilAkhir.textContent = 'Menang'
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('batu')
    }
     result.replaceChild(hasilAkhir, h1);
    h1 = hasilAkhir;
})

  gunting.addEventListener('click', function () {
    const computer = getComputerChoice();
    hasilAkhir.textContent = ""

          if(computer === "gunting"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('gunting')
        hasilAkhir.textContent = 'seri'
    }
    else if(computer === "batu"){
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('batu')
        hasilAkhir.textContent ='kalah'
    }
    else{
        hasilAkhir.textContent ='Menang'
        com.classList.remove('batu', 'kertas', 'gunting', 'default');
        com.classList.add('kertas')
    }
     result.replaceChild(hasilAkhir, h1);
    h1 = hasilAkhir;
})

