const codes = [
    {
        code: "console.log('Hello World)",
        answer: "console.log('Hello World');",
        hint: "Dodaj nawias zamykający."
    },
    {
        code: "let x = 5\nif x > 2 {\nconsole.log('X jest większe niż 2')\n}",
        answer: "let x = 5;\nif (x > 2) {\nconsole.log('X jest większe niż 2');\n}",
        hint: "Zapewnij nawiasy i średniki."
    },
    {
        code: "let y = 10\nwhile y < 15 {\nconsole.log('y jest mniejsze niż 15')\n}",
        answer: "let y = 10;\nwhile (y < 15) {\nconsole.log('y jest mniejsze niż 15');\n}",
        hint: "Dodaj nawiasy do pętli."
    },
    {
        code: "let name = 'Jan'\nconsole.log('Cześć ' + name;)",
        answer: "let name = 'Jan';\nconsole.log('Cześć ' + name);",
        hint: "Brakuje średnika na końcu deklaracji."
    },
    {
        code: "for (let i = 0; i < 5; i++) {\nconsole.log(i)\n}",
        answer: "for (let i = 0; i < 5; i++) {\nconsole.log(i);\n}",
        hint: "Dodaj średnik po `console.log`."
    },
    {
        code: "let z = 20\nif z == 20 {\nconsole.log('z jest równe 20')\n}",
        answer: "let z = 20;\nif (z == 20) {\nconsole.log('z jest równe 20');\n}",
        hint: "Zastosuj nawiasy wokół warunku."
    },
    {
        code: "let name = 'Anna'\nname.toLowerCase()",
        answer: "let name = 'Anna';\nname.toLowerCase();",
        hint: "Brakuje średnika na końcu."
    },
    {
        code: "function greet(name) {\nreturn 'Hello ' + name\n}",
        answer: "function greet(name) {\nreturn 'Hello ' + name;\n}",
        hint: "Dodaj średnik po `return`."
    },
    {
        code: "let a = 7\nlet b = 3\nconsole.log(a + b)",
        answer: "let a = 7;\nlet b = 3;\nconsole.log(a + b);",
        hint: "Brakuje średników na końcu deklaracji."
    },
    {
        code: "let obj = {name: 'Marek', age: 30\n}",
        answer: "let obj = {name: 'Marek', age: 30};",
        hint: "Dodaj średnik na końcu obiektu."
    },
    {
        code: "let arr = [1, 2, 3, 4, 5\n]",
        answer: "let arr = [1, 2, 3, 4, 5];",
        hint: "Brakuje średnika na końcu tablicy."
    },
    {
        code: "let x = 4;\nif (x < 5)\nconsole.log('X jest mniejsze niż 5')",
        answer: "let x = 4;\nif (x < 5) {\nconsole.log('X jest mniejsze niż 5');\n}",
        hint: "Dodaj nawiasy wokół ciała if."
    },
    {
        code: "let num = 0\nwhile num < 5 {\nnum++\n}",
        answer: "let num = 0;\nwhile (num < 5) {\nnum++;}",
        hint: "Dodaj nawiasy do warunku pętli."
    },
    {
        code: "console.log(10 / 0)",
        answer: "console.log(10 / 0);",
        hint: "Brakuje średnika na końcu."
    },
    {
        code: "let x = 15;\nif x = 15 {\nconsole.log('x równa się 15')\n}",
        answer: "let x = 15;\nif (x === 15) {\nconsole.log('x równa się 15');\n}",
        hint: "Użyj operatora porównania `===` zamiast przypisania `=`."
    },
    {
        code: "let x = 10;\nif (x > 5)\nconsole.log('x jest większe niż 5')",
        answer: "let x = 10;\nif (x > 5) {\nconsole.log('x jest większe niż 5');\n}",
        hint: "Brakuje nawiasów klamrowych."
    },
    {
        code: "let name = 'Ewa'\nconsole.log(name.toUppercase())",
        answer: "let name = 'Ewa';\nconsole.log(name.toUpperCase());",
        hint: "Zmienna toUpperCase powinna być napisana z wielką literą."
    },
    {
        code: "let a = '5'\nlet b = '3'\nconsole.log(a + b)",
        answer: "let a = '5';\nlet b = '3';\nconsole.log(a + b);",
        hint: "Upewnij się, że zmienne są poprawnie oddzielone średnikami."
    },
    {
        code: "let foo = function() {\nreturn 'Hello'\n}",
        answer: "let foo = function() {\nreturn 'Hello';\n};",
        hint: "Dodaj średnik po `return` i po całej funkcji."
    },
    {
        code: "console.log(3 * (4 + 2))",
        answer: "console.log(3 * (4 + 2));",
        hint: "Brakuje średnika na końcu."
    },
    {
        code: "let x = 'hello';\nconsole.log(x + World);",
        answer: "let x = 'hello';\nconsole.log(x + 'World');",
        hint: "Brakuje cudzysłowu wokół słowa 'World'."
    },
    {
        code: "function sum(a, b) {\nreturn a + b\n}",
        answer: "function sum(a, b) {\nreturn a + b;\n}",
        hint: "Dodaj średnik po `return`."
    },
    {
        code: "let x = 10;\nlet y = 20;\nif x > y {\nconsole.log('x większe niż y')\n}",
        answer: "let x = 10;\nlet y = 20;\nif (x > y) {\nconsole.log('x większe niż y');\n}",
        hint: "Użyj nawiasów wokół warunku if."
    },
    {
        code: "let message = 'Witaj świecie'\nconsole.log(message)",
        answer: "let message = 'Witaj świecie';\nconsole.log(message);",
        hint: "Brakuje średnika na końcu deklaracji."
    },
    {
        code: "let obj = {a: 1, b: 2;\nconsole.log(obj);",
        answer: "let obj = {a: 1, b: 2};\nconsole.log(obj);",
        hint: "Brakuje nawiasu zamykającego obiekt."
    },
    {
        code: "let number = 100\nlet result = number * 2;\nconsole.log(result",
        answer: "let number = 100;\nlet result = number * 2;\nconsole.log(result);",
        hint: "Brakuje nawiasu zamykającego funkcję `console.log`."
    },
    {
        code: "let x = 10;\nfor (let i = 0; i < x; i++) {\nconsole.log(i)\n}",
        answer: "let x = 10;\nfor (let i = 0; i < x; i++) {\nconsole.log(i);\n}",
        hint: "Brakuje średnika po `console.log`."
    },
    {
        code: "let person = {name: 'Adam', age: 25\n};",
        answer: "let person = {name: 'Adam', age: 25};",
        hint: "Brakuje średnika na końcu obiektu."
    },
    {
        code: "let x = 10;\nlet y = 20;\nconsole.log(x + y)",
        answer: "let x = 10;\nlet y = 20;\nconsole.log(x + y);",
        hint: "Brakuje średnika po `console.log`."
    },
    {
        code: "let x = 5;\nif (x > 0)\nconsole.log('x jest większe niż 0')",
        answer: "let x = 5;\nif (x > 0) {\nconsole.log('x jest większe niż 0');\n}",
        hint: "Brakuje nawiasów klamrowych."
    },
    {
        code: "let arr = [10, 20, 30, 40]\nconsole.log(arr[1])",
        answer: "let arr = [10, 20, 30, 40];\nconsole.log(arr[1]);",
        hint: "Brakuje średnika po deklaracji tablicy."
    },
    {
        code: "function multiply(a, b) {\nreturn a * b\n}",
        answer: "function multiply(a, b) {\nreturn a * b;\n}",
        hint: "Dodaj średnik po `return`."
    }
];


let currentCodeIndex = -1;
let attempts = 0;
let score = 0;
const devConsole = document.getElementById('devConsole');
document.getElementById('checkCodeBtn').addEventListener('click', checkCode);
document.getElementById('hintBtn').addEventListener('click', showHint);
const progressText = document.getElementById('progressText');
const progressBarFull = document.getElementById('progressBarFull');

function checkCode() {
    const userCode = document.getElementById('codeEditor').innerText;
    const expectedCode = codes[currentCodeIndex].answer;

    if (userCode.trim() === expectedCode.trim()) {
        consoleOutput(`Zadanie ${currentCodeIndex + 1} zakończone pomyślnie!`);
        score += 1;
        document.getElementById('score').innerText = score;
        attempts = 0;
        currentCodeIndex++;
        if (currentCodeIndex < codes.length) {
            loadNextCode();
            clearConsole();
        } else {
            consoleOutput('Gratulacje! Ukończyłeś wszystkie zadania!');
        }
    } else {
        attempts++;
        // consoleOutput(`\nBłąd! Spróbuj ponownie. Prób: ${attempts}\n`);
        devConsole.textContent += `Błąd! Spróbuj ponownie. Prób: ${attempts}\n\n`;
        devConsole.scrollTop = devConsole.scrollHeight;

        if (attempts >= 5) {
            showHint();
        }
    }
}

function showHint() {
    const hintText = codes[currentCodeIndex].hint;
    document.getElementById('hintText').innerText = hintText;
    document.getElementById('hint').classList.remove('hidden');
}

let questionCounter = 0;
let availableQuestions = [...codes];

function loadNextCode() {
    if (availableQuestions.length === 0) {
        localStorage.setItem("mostRecentScore2", score);
        return window.location.assign('end.html');
    }

    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const randomQuestion = availableQuestions[randomIndex];
    
    currentCodeIndex = codes.indexOf(randomQuestion);
    availableQuestions.splice(randomIndex, 1);

    questionCounter++;
    progressText.innerText = `Zadanie ${questionCounter}/${codes.length}`;
    progressBarFull.style.width = `${(questionCounter / codes.length) * 100}%`;
    document.getElementById('codeEditor').innerText = randomQuestion.code;
    updateLineNumbers();
    clearConsole();
    document.getElementById('hint').classList.add('hidden');
}

const codeEditor = document.getElementById('codeEditor');
const lineNumbers = document.getElementById('lineNumbers');

function updateLineNumbers() {
    const lines = codeEditor.innerText.split('\n').length;
    lineNumbers.innerHTML = '';
    for (let i = 1; i <= lines; i++) {
        const line = document.createElement('div');
        line.textContent = i;
        lineNumbers.appendChild(line);
    }
}

codeEditor.addEventListener('input', updateLineNumbers);
codeEditor.addEventListener('scroll', () => {
    lineNumbers.scrollTop = codeEditor.scrollTop;
});

updateLineNumbers();

codeEditor.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        const sel = window.getSelection();
        const range = sel.getRangeAt(0);
        const tabNode = document.createTextNode('    ');
        range.insertNode(tabNode);
        range.setStartAfter(tabNode);
        range.setEndAfter(tabNode);
        sel.removeAllRanges();
        sel.addRange(range);
        updateLineNumbers();
    }
});

const originalLog = console.log;
console.log = function (...args) {
    args.forEach(arg => {
        devConsole.textContent += `> ${arg}\n`;
    });
    devConsole.scrollTop = devConsole.scrollHeight;
    originalLog.apply(console, args);
};

function runCode() {
    const code = codeEditor.innerText;
    try {
        const result = eval(code);
        if (result !== undefined) {
            devConsole.textContent += `> ${result}\n`;
        }
    } catch (e) {
        devConsole.textContent += `! ${e.message}\n`;
    }
    devConsole.scrollTop = devConsole.scrollHeight;
}

function clearConsole() {
    document.getElementById('devConsole').innerText = '';
}

function consoleOutput(message) {
    document.getElementById('devConsole').innerText += message + '\n';
}

loadNextCode();

