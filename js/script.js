window.onload = function () {
    tikTakBoom.init(
        tasks,
        document.getElementById('timerField'),
        document.getElementById('gameStatusField'),
        document.getElementById('questionField'),
        document.getElementById('answer1'),
        document.getElementById('answer2'),
        document.getElementById('boomTimerFields'),
        document.getElementById('countOfPlayersField')
    )
}

document.querySelector('#btnStart').addEventListener('click', e => {
    tikTakBoom.run();
    param.style.display = 'none';
    btnFinish.style.display = 'block';
})

document.querySelector('#btnFinish').addEventListener('click', e => {
    btnAgain.style.display = 'block';
    btnFinish.style.display = 'none';
    tikTakBoom.finish('lose')
})

document.querySelector('#btnAgain').addEventListener('click', e => {
    param.style.display = 'block';
    btnAgain.style.display = 'none';
    btnFinish.style.display = 'none';
    gameStatusField.innerText = ' ';
    timerField.innerText = ' ';
    tikTakBoom.players = [];
})



