const tasks = `

    [
        {
                "question": "К объектам живой природы относится",
                "answer1": { "result": true, "value": "Звезда" },
                "answer2": { "result": false, "value": "Гриб" }
            },
            {
                "question": "География в переводе с греческого это",
                "answer1": { "result": false, "value": "Природа" },
                "answer2": { "result": true, "value": "Землеописание" }
            },
            {
                "question": "Васко да Гама первым из европейцев",
                "answer1": { "result": false, "value": "Совершил кругосветное путешествие" },
                "answer2": { "result": true, "value": "Открыл Америку" }
            },
            {
                "question": "Столица Италии?",
                "answer1": { "result": false, "value": "Ватикан" },
                "answer2": { "result": true, "value": "Рим" }
            },
            {
                "question": "Столица Италии?",
                "answer1": { "result": false, "value": "Ватикан" },
                "answer2": { "result": true, "value": "Рим" }
            },
            {
                "question": "Какая из перечисленных планет не относится к земной группе?",
                "answer1": { "result": false, "value": "Марс" },
                "answer2": { "result": true, "value": "Юпитер" }
            },
            {
                "question": "Как называется параллель, которая делит земной шар на Северное и Южное полушарие?",
                "answer1": { "result": false, "value": "Нулевой меридиан" },
                "answer2": { "result": true, "value": "Экватор" }
            },
            {
                "question": "Литосфера это -",
                "answer1": { "result": false, "value": "Воздушная оболочка" },
                "answer2": { "result": true, "value": "Каменная оболочка" }
            },
            {
                "question": "Самые высокие горы земли",
                "answer1": { "result": false, "value": "Анды" },
                "answer2": { "result": true, "value": "Гималаи" }
            },
            {
                "question": "Самая длинная и полноводная река планеты",
                "answer1": { "result": false, "value": "Нил" },
                "answer2": { "result": true, "value": "Амазонка" }
            },
            {
                "question": "Самый верхний слой Земли называется",
                "answer1": { "result": false, "value": "Мантия" },
                "answer2": { "result": true, "value": "Земная кора" }
            },
            {
                "question": "К объектам  неживой природы относится",
                "answer1": { "result": false, "value": "Жук" },
                "answer2": { "result": true, "value": "Луна" }
            },
            {
                "question": "К биологическим явлениям относят",
                "answer1": { "result": false, "value": "Снег" },
                "answer2": { "result": true, "value": "Листопад" }
            },
            {
                "question": "Кто из путешественников открыл Америку?",
                "answer1": { "result": false, "value": "Васко да Гама" },
                "answer2": { "result": true, "value": "Колумб" }
            },
            {
                "question": "Какая из перечисленных планет не относится к планетам гигантам?",
                "answer1": { "result": false, "value": "Нептун" },
                "answer2": { "result": true, "value": "Сатурн" }
            },
            {
                "question": "Как называется линия, которая делит земной шар на  Западное и Восточное полушария?",
                "answer1": { "result": false, "value": "Экватор" },
                "answer2": { "result": true, "value": "Нулевой меридиан" }
            },
            {
                "question": "Атмосфера это -?",
                "answer1": { "result": false, "value": "Живая оболочка" },
                "answer2": { "result": true, "value": "Воздушная оболочка" }
            },
            {
                "question": "Самая длинная река Евразии",
                "answer1": { "result": false, "value": "Волга" },
                "answer2": { "result": true, "value": "Янцзы" }
            },
            {
                "question": "Самое глубокое озеро планеты",
                "answer1": { "result": false, "value": "Гурон" },
                "answer2": { "result": true, "value": "Байкал" }
            },
            {
                "question": "Каким цветом на  физической карте показаны  низкие равнины?",
                "answer1": { "result": false, "value": "Желтым" },
                "answer2": { "result": true, "value": "Зеленым" }
            },
            {
                "question": "Самой плодородной почвой считается",
                "answer1": { "result": false, "value": "Населенный пункт" },
                "answer2": { "result": true, "value": "Крепость" }
            },
            {
                "question": "В каком месте нужно построить дом, чтобы все его окна могли выходить на север?",
                "answer1": { "result": false, "value": "На севере" },
                "answer2": { "result": true, "value": "На северном полюсе" }
            },
            {
                "question": "Этот океан самый маленький по размерам и самых холодный. Как он называется?",
                "answer1": { "result": false, "value": "Тихий" },
                "answer2": { "result": true, "value": "Северный ледовитый" }
            },
            {
                "question": "Какое из следующих утверждений относится к последствиям вращательного движения Земли?",
                "answer1": { "result": false, "value": "Сезоны года" },
                "answer2": { "result": true, "value": "Смена дня и ночи" }
            },
            {
                "question": "При каком типе климата дождей мало, а испарений больше осадков?",
                "answer1": { "result": false, "value": "Экваториальный" },
                "answer2": { "result": true, "value": "Субтропический" }
            },
            {
                "question": "Какой из следующих вариантов упоминает один или несколько факторов, которые меняют погоду?",
                "answer1": { "result": false, "value": "Движение тектонических плит" },
                "answer2": { "result": true, "value": "Температура и осадки" }
            },
            {
                "question": "Какое движение тектонических плит известно как скольжение?",
                "answer1": { "result": false, "value": "Земная кора обновляется, и возникают океанические горные цепи" },
                "answer2": { "result": true, "value": "Пластины движутся вбок и в противоположных направлениях, вызывая сбои" }
            },
            {
                "question": "Азимут – это угол между направлением на",
                "answer1": { "result": false, "value": "Запад и какой-нибудь предмет" },
                "answer2": { "result": true, "value": "Северо-восток и какой-нибудь предмет" }
            },
            {
                "question": "Какая дата является датой равноденствия?",
                "answer1": { "result": false, "value": "22 июня" },
                "answer2": { "result": true, "value": "21 марта" }
            },
            {
                "question": "Какая равнина располагается в Южной Америке?",
                "answer1": { "result": false, "value": "Индо-Гангская" },
                "answer2": { "result": true, "value": "Амазонская" }
            }
    ]
`;
