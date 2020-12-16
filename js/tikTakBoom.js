tikTakBoom = {
    init(
        tasks,
        timerField,
        gameStatusField,
        textFieldQuestion,
        textFieldAnswer1,
        textFieldAnswer2,
        // boomTimerFields,
        // countOfPlayersField,

    ) {
        this.preTime = 3;
        this.tasks = JSON.parse(tasks);
        this.timerField = timerField;
        this.gameStatusField = gameStatusField;
        this.textFieldQuestion = textFieldQuestion;
        this.textFieldAnswer1 = textFieldAnswer1;
        this.textFieldAnswer2 = textFieldAnswer2;
        this.needRightAnswers = 19;
        this.wrongAnswer = 3;
        this.players = [];
        this.playerNumber = 0;
    },

    run() {
        this.boomTimer = parseInt(boomTimerFields.value);
        this.countOfPlayers = parseInt(countOfPlayersField.value);
        for (let i = 1; i <= this.countOfPlayers; i++) {
            this.players[i - 1] = {};
            this.players[i - 1].player = i;
            this.players[i - 1].wrong = 0;
            this.players[i - 1].playerTime = this.boomTimer;
        };
        this.state = 1;
        this.rightAnswers = 0;
        this.beforeTimer();
        console.log(this.players);
    },

    beforeTimer() {

        var i = this.preTime;
        this.timeClear = setInterval(() => {
            this.timerField.innerText = i;
            i--;
            this.gameStatusField.innerText = `Приготовиться игроку № ${this.players[this.state - 1].player}`;
            this.textFieldAnswer1.innerText = ' ';
            this.textFieldAnswer2.innerText = ' ';
            this.textFieldQuestion.innerText = ' ';
            clearTimeout(this.gameTimer);
            if (i < 0) {
                clearInterval(this.timeClear);

                this.turnOn();
            }
        }, 1000);
    },

    turnOn() {
        this.boomTimer = this.players[this.state - 1].playerTime;
        this.gameStatusField.innerText = ` Вопрос игроку № ${this.players[this.state - 1].player}`;
        const taskNumber = randomIntNumber(this.tasks.length - 1);
        this.printQuestion(this.tasks[taskNumber]);
        this.tasks.splice(taskNumber, 1);
        this.playerNumber = this.state;
        this.state = (this.state === this.countOfPlayers) ? 1 : this.state + 1;
        this.timer();
    },

    turnOff(value) {
        console.log(this.state)
        if (this.currentTask[value].result) {
            this.gameStatusField.innerText = 'Верно!\u{1F603}';
            this.rightAnswers += 1;
            this.players[this.state - 1].playerTime = this.boomTimer += 5;
            clearTimeout(this.gameTimer);

        } else {
            this.gameStatusField.innerText = 'Неверно!\u{1F60F}';
            this.players[this.playerNumber - 1].playerTime = this.boomTimer -= 5;
            this.players[this.playerNumber - 1].wrong += 1;
            clearTimeout(this.gameTimer);

        }
        if (this.rightAnswers < this.needRightAnswers) {
            if (this.tasks.length === 0) {
                this.finish('lose');
            } else {
                this.beforeTimer();
                console.log(this.players);
            }
        } else {
            this.finish('won');
        }
        if (this.players[this.playerNumber - 1].wrong >= this.wrongAnswer) {
            this.deletePlayers();
            // this.state += 1;
        }

        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);
    },

    printQuestion(task) {
        this.textFieldQuestion.innerText = task.question;
        this.textFieldAnswer1.innerText = task.answer1.value;
        this.textFieldAnswer2.innerText = task.answer2.value;

        this.textFieldAnswer1.addEventListener('click', answer1 = () => this.turnOff('answer1'));
        this.textFieldAnswer2.addEventListener('click', answer2 = () => this.turnOff('answer2'));

        this.currentTask = task;
    },

    deletePlayers() {
        if (this.countOfPlayers != 1) {
            this.gameStatusField.innerText += ` Игрок №${this.players[this.playerNumber - 1].player} выбывает из игры!`;
            this.players.splice(this.countOfPlayers - 1, 1);
            console.log(this.players);
            this.countOfPlayers -= 1;
            this.state -= 1;

        }
    },


    finish(result = 'lose') {
        this.state = 0;
        if (result === 'lose') {
            this.gameStatusField.innerText = `Вы проиграли!\u{1F4A5}\u{1F480}`;
            clearInterval(this.timeClear);
        }
        if (result === 'won') {
            this.gameStatusField.innerText = `Вы выиграли!\u{1F44B}🎖️`;
        }

        this.textFieldQuestion.innerText = ``;
        this.textFieldAnswer1.innerText = ``;
        this.textFieldAnswer2.innerText = ``;
        this.textFieldAnswer1.removeEventListener('click', answer1);
        this.textFieldAnswer2.removeEventListener('click', answer2);


    },

    timer() {
        if (this.state) {
            this.boomTimer -= 1;
            let sec = this.boomTimer % 60;
            let min = (this.boomTimer - sec) / 60;
            sec = (sec >= 10) ? sec : '0' + sec;
            min = (min >= 10) ? min : '0' + min;
            this.timerField.innerText = `${min}:${sec}`;

            if (this.boomTimer > 0) {
                this.gameTimer = setTimeout(
                    () => {
                        this.timer()
                    },
                    1000,
                )
            } else {
                this.finish('lose');
            }
        }
    },
}
