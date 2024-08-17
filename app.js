// Player name and Starting Quiz
function submitForm(e) {

    e.preventDefault();

    let name = document.getElementById("userName").value;
    if (name == "") {
        alert("Please Enter your Name...")
    } else {
        sessionStorage.setItem("name", name);
        location.href = "quiz.html";
    }
}

// Quiz
let quizQuestions = [
    {
        id: 1,
        question: "1,2,3,1,4,9,1,...27",
        answer: "8",
        options: [
            "5",
            "4",
            "16",
            "8"
        ]
    },
    {
        id: 2,
        question: "3,5, 9,17,33",
        answer: "65",
        options: [
            "45",
            "65",
            "64",
            "85"
        ]
    },
    {
        id: 3,
        question: "128,64,32...?",
        answer: "None of these",
        options: [
            "19",
            "18",
            "35",
            "None of these"
        ]
    }
];

let QuestionCount = 0;
let Score = 0;

window.onload = function () {
    show(QuestionCount);

};

function showNext() {
    if (QuestionCount == quizQuestions.length - 1) {
        location.href = "result.html";
    }
    console.log(QuestionCount);

    let userAnswer = document.querySelector("li.option.active").innerHTML;
    if (userAnswer == quizQuestions[QuestionCount].answer) {
        Score += 10;
        sessionStorage.setItem("Score", Score);
    }
    console.log(Score);

    QuestionCount++;
    show(QuestionCount);
}

function show(count) {
    let question = document.getElementById("questions");

    question.innerHTML = `
  <h2>Q${count + 1}. ${quizQuestions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${quizQuestions[count].options[0]}</li>
  <li class="option">${quizQuestions[count].options[1]}</li>
  <li class="option">${quizQuestions[count].options[2]}</li>
  <li class="option">${quizQuestions[count].options[3]}</li>
</ul> 
  `;
    ActivateUserSelectedOption();
}

function ActivateUserSelectedOption() {
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let i = 0; i < option.length; i++) {
                if (option[i].classList.contains("active")) {
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}

// Quiz Score
let userName = sessionStorage.getItem("name");
let userScore = sessionStorage.getItem("Score");
document.querySelector("span.name").innerHTML = userName;
document.querySelector("span.score").innerHTML = userScore;

