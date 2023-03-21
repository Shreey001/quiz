const questions=[
{
    question: "Which is the largest animal in the world?",
    answers: [
        {text: "Shark", correct: false},
        {text: "Blue Whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false},
    ]



},
{
question: "Which is the largest desert in the world?",
answers: [
    {text: "Kalahari", correct: false},
    {text: "Gobi", correct: false},
    {text: "Sahara", correct: true},
    {text: "AntarCtica", correct: false},
]
},
{
    question: "Which is the smallest country in the world?",
    answers: [
        {text: "North Korea", correct: false},
        {text: "Nauru", correct: false},
        {text: "Vatican City", correct: true},
        {text: "Monaco", correct: false},
    ]
},
{
    question: "Which one of the following scientists is known for his contributions to the science of evolution?",
    answers: [
        {text: "Marie Curie", correct: false},
        {text: "Thomas Edison", correct: false},
        {text: "Stephen Hawking", correct: false},
        {text: "Charles Darwin", correct: true},
    ]
},
{
    question: " What is actually electricity?",
    answers: [
        {text: "A flow of water", correct: false},
        {text: "A flow of air", correct: false},
        {text: "A flow of electrons", correct: true},
        {text: "A flow of atoms", correct: false},
    ]
},
{
    question: " Which of the following is not an international organisation?",
    answers: [
        {text: "FBI", correct: true},
        {text: "NATO", correct: false},
        {text: "FIFA", correct: false},
        {text: "ASEAN", correct: false},
    ]
},
{
    question: " Which of the following disorders is the fear of being alone?",
    answers: [
        {text: "Agoraphobia", correct: true},
        {text: "Aerophobia", correct: false},
        {text: "Acrophobia", correct: false},
        {text: "Arachnophobia", correct: false},
    ]
},

{
    question: "  What is the speed of sound?",
    answers: [
        {text: "1236 km/h", correct: true},
        {text: "120 km/h", correct: false},
        {text: "400 km/h", correct: false},
        {text: "700 km/h", correct: false},
    ]
},

{
    question: " What do we call a newly hatched butterfly?",
    answers: [
        {text: "A moth", correct: false},
        {text: "A butter", correct: false},
        {text: " A caterpillar", correct: true},
        {text: "A chrysalis", correct: false},
    ]
},
{
    question: " What is the main component of the sun?",
    answers: [
        {text: "Liquid lava", correct: false},
        {text: "Molten Iron", correct: false},
        {text: " Gas", correct: true},
        {text: "Rock", correct: false},
    ]
}


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML= "Next";
    showQuestion();
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
  

    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
         if(answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener("click", selectAnswer);
    });
}
 function resetState(){
 nextButton.style.display = "none";
 while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === "true";
 if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;

 }else{
    selectedBtn.classList.add("incorrect");
 }
 Array.from(answerButtons.children).forEach( button=> {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
 });
nextButton.style.display = "block";


}

function showScore(){
    resetState();
    questionElement.innerHTML = `Congratulations,You Scored ${score} out of ${questions.length}!` ;
    nextButton.innerHTML="Play Again";
    nextButton.style.display= "block";
}




function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=> {
if(currentQuestionIndex < questions.length){
    handleNextButton();
}else{
 startQuiz();
}



});


startQuiz();


