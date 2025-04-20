const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');

const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const questions = [
    {
        "question": "Jakiego znaku używamy do tworzenia komentarzy jednolinijkowych w JavaScript?",
        "choice1": "//",
        "choice2": "#",
        "choice3": "/* */",
        "choice4": "<!-- -->",
        "answer": 1
    },
    {
        "question": "Który z poniższych typów danych nie jest typem prostym w JavaScript?",
        "choice1": "String",
        "choice2": "Number",
        "choice3": "Boolean",
        "choice4": "Object",
        "answer": 4
    },
    {
        "question": "Jakim wynikiem jest wyrażenie 5 + '5' w JavaScript?",
        "choice1": "10",
        "choice2": "55",
        "choice3": "5",
        "choice4": "NaN",
        "answer": 2
    },
    {
        "question": "Jak stworzyć tablicę w JavaScript?",
        "choice1": "array = []",
        "choice2": "var array = new Array()",
        "choice3": "var array = {}",
        "choice4": "var array = array()",
        "answer": 2
    },
    {
        "question": "Co zwraca metoda .push() w tablicach JavaScript?",
        "choice1": "Nową tablicę",
        "choice2": "Liczbę elementów w tablicy",
        "choice3": "Ostatni element tablicy",
        "choice4": "Dodaje element i zwraca nową długość tablicy",
        "answer": 4
    },
    {
        "question": "Jak nazywa się pętla, która działa dopóki warunek jest spełniony?",
        "choice1": "for",
        "choice2": "while",
        "choice3": "do...while",
        "choice4": "every",
        "answer": 2
    },
    {
        "question": "Jak można sprawdzić, czy zmienna x jest liczbą w JavaScript?",
        "choice1": "isNaN(x)",
        "choice2": "typeof x === 'number'",
        "choice3": "x instanceof Number",
        "choice4": "isNumber(x)",
        "answer": 1
    },
    {
        "question": "Jaka metoda pozwala na transformację łańcucha tekstowego na litery wielkie?",
        "choice1": ".uppercase()",
        "choice2": ".toUpperCase()",
        "choice3": ".toUpper()",
        "choice4": ".upperCase()",
        "answer": 2
    },
    {
        "question": "Jak utworzyć obiekt w JavaScript?",
        "choice1": "var obj = {}",
        "choice2": "var obj = Object()",
        "choice3": "var obj = new Object()",
        "choice4": "wszystkie powyższe",
        "answer": 4
    },
    {
        "question": "Jakie słowo kluczowe używamy do definiowania funkcji w JavaScript?",
        "choice1": "func",
        "choice2": "define",
        "choice3": "function",
        "choice4": "void",
        "answer": 3
    },
    {
        "question": "Jak wywołać funkcję w JavaScript?",
        "choice1": "call myFunction()",
        "choice2": "myFunction()",
        "choice3": "invoke myFunction()",
        "choice4": "myFunction.call()",
        "answer": 2
    },
    {
        "question": "Co sprawia metoda .slice() w przypadku tablic?",
        "choice1": "Usuwa elementy",
        "choice2": "Wklucza wszystkie elementy",
        "choice3": "Zwraca podtablicę",
        "choice4": "Dodaje elementy",
        "answer": 3
    },
    {
        "question": "Jaka jest różnica między == a === w JavaScript?",
        "choice1": "Nie ma różnicy",
        "choice2": "=== porównuje wartości i typy, == tylko wartości",
        "choice3": "=== porównuje tylko typy",
        "choice4": "== porównuje tylko liczby",
        "answer": 2
    },
    {
        "question": "Jak można zatrzymać działanie skryptu JavaScript?",
        "choice1": "stop()",
        "choice2": "break",
        "choice3": "exit()",
        "choice4": "return",
        "answer": 2
    },
    {
        "question": "Jaką wartość zwróci operacja 'true' && 'false'?",
        "choice1": "true",
        "choice2": "false",
        "choice3": "NaN",
        "choice4": "null",
        "answer": 2
    },
    {
        "question": "Jaki atrybut definiuje CSS dla tła elementu?",
        "choice1": "color",
        "choice2": "background",
        "choice3": "bgcolor",
        "choice4": "background-color",
        "answer": 4
    },
    {
        "question": "Jaką metodę należy użyć, aby usunąć ostatni element tablicy?",
        "choice1": ".pop()",
        "choice2": ".remove()",
        "choice3": ".delete()",
        "choice4": ".shift()",
        "answer": 1
    },
    {
        "question": "Jakim wynikiem zadziała wyrażenie 10 % 3?",
        "choice1": "1",
        "choice2": "2",
        "choice3": "3",
        "choice4": "NaN",
        "answer": 1
    },
    {
        "question": "Jak w JavaScript odwołać się do elementu o id 'myElement'?",
        "choice1": "document.getElement('myElement')",
        "choice2": "document.getElementByName('myElement')",
        "choice3": "document.getElementsById('myElement')",
        "choice4": "document.getElementById('myElement')",
        "answer": 4
    },
    {
        "question": "Jak zdefiniować stałą w JavaScript?",
        "choice1": "const constantValue;",
        "choice2": "let constantValue;",
        "choice3": "var constantValue;",
        "choice4": "static constantValue;",
        "answer": 1
    },
    {
        "question": "Jak zainicjować obiekt za pomocą literału obiektowego?",
        "choice1": "var obj = { key: 'value' };",
        "choice2": "var obj = new Object();",
        "choice3": "var obj = Object({ key: 'value' });",
        "choice4": "var obj = <<key: 'value'>>;",
        "answer": 1
    },
    {
        "question": "Jak można przekształcić zmienną typu String na typ Number?",
        "choice1": "String.toNumber()",
        "choice2": "parseInt()",
        "choice3": "Number()",
        "choice4": "wszystkie powyższe",
        "answer": 4
    },
    {
        "question": "Jakie wartości można użyć w instrukcji switch?",
        "choice1": "Tylko liczby",
        "choice2": "Tylko ciągi znaków",
        "choice3": "Każdy typ danych",
        "choice4": "Tylko zmienne",
        "answer": 3
    },
    {
        "question": "Co będzie wynikiem wyrażenia 4 + '2' w JavaScript?",
        "choice1": "6",
        "choice2": "42",
        "choice3": "NaN",
        "choice4": "undefined",
        "answer": 2
    },
    {
        "question": "Kiedy używamy słowa kluczowego 'let'?",
        "choice1": "Aby zadeklarować zmienną globalną",
        "choice2": "Aby zadeklarować zmienną lokalną w bloku",
        "choice3": "Aby stworzyć stałą",
        "choice4": "Nie używamy, używamy tylko 'var'",
        "answer": 2
    },
    {
        "question": "Jakie są typy zbiorów w JavaScript?",
        "choice1": "Tablice i obiekty",
        "choice2": "Zbiory i listy",
        "choice3": "Tylko obiekty",
        "choice4": "Tylko tablice",
        "answer": 1
    },
];

const CORRECT_BONUS = 1;
const MAX_QUESTIONS = 26;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    
    getNewQuestions();

    game.classList.remove("hidden");
    loader.classList.add("hidden");
};

getNewQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('end.html');
    }

    questionCounter++;
    progressText.innerText = `Pytanie ${questionCounter}/${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestions();
        }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();