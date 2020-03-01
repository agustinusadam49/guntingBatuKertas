function computerChoice() {
    const computer = Math.random();
    let result = ''
    if( computer < 0.34 ) {
        result = 'gunting';
    } else if( computer >= 0.34 && computer < 0.67 ) {
        result = 'batu';
    } else {
        result = 'kertas';
    }

    return result
}


function resultWinner(computer, player) {
    let result = '';
    if(player == computer ) {
        result = 'SERI!';
    } else if(player == 'gunting' && computer == 'batu') {
        result = 'Komputer Menang !!'
    } else if(player == 'gunting' && computer == 'kertas') {
        result = 'Kamu Menang !!'
    } else if(player == 'batu' && computer == 'gunting') {
        result = 'Kamu Menang !!'
    } else if (player == 'batu' && computer == 'kertas') {
        result = 'Komputer Menang !!'
    } else if (player == 'kertas' && computer == 'batu') {
        result = 'Kamu Menang !!'
    } else if (player == 'kertas' && computer == 'gunting') {
        result = 'Komputer Menang !!'
    }

    return result
}


let playerGunting = document.getElementsByClassName('gunting')
playerGunting[0].addEventListener('click', function() {
    let compChoice = computerChoice();
    let ourChoice = 'gunting'
    let stage = resultWinner(compChoice, ourChoice)
    
    let computerPicture = document.getElementsByClassName('computer-img')
    computerPicture[0].setAttribute('src', 'img-gbk/' + compChoice + '.png')
    
    let winnerInfo = document.getElementsByClassName('info-winner') 
    winnerInfo[0].innerHTML = stage 
})

let playerBatu = document.getElementsByClassName('batu')
playerBatu[0].addEventListener('click', function() {
    let compChoice = computerChoice();
    let ourChoice = 'batu'
    let stage = resultWinner(compChoice, ourChoice)

    let computerPicture = document.getElementsByClassName('computer-img')
    computerPicture[0].setAttribute('src', 'img-gbk/' + compChoice + '.png')

    let winnerInfo = document.getElementsByClassName('info-winner') 
    winnerInfo[0].innerHTML = stage
})

let playerKertas = document.getElementsByClassName('kertas')
playerKertas[0].addEventListener('click', function() {
    let compChoice = computerChoice();
    let ourChoice = 'kertas'
    let stage = resultWinner(compChoice, ourChoice)

    let computerPicture = document.getElementsByClassName('computer-img')
    computerPicture[0].setAttribute('src', 'img-gbk/' + compChoice + '.png')

    let winnerInfo = document.getElementsByClassName('info-winner') 
    winnerInfo[0].innerHTML = stage
})

