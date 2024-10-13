const data = [
    {
      // id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      // id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      // id: 1,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
  ];
  const gamescreen = document.querySelector(".game");
  const resultscreen = document.querySelector(".result");
  const answerscontainer = document.querySelector(".answers");
  const questions = document.querySelector(".question");
  const submits = document.querySelector(".submit");
  const playagainn=document.querySelector(".play")
  let qindex = 0;
  let correctcount = 0;
  let wrongcount = 0;
  let total = 0;
  let selectedanswer=null;
  const play=()=>{
    
    qindex = 0;
    correctcount = 0;
    wrongcount = 0;
    total = 0;
    selectedanswer=null;
    showfuntion(qindex)
  }
  playagainn.addEventListener("click",()=>{
  
    play();
    gamescreen.style.display="block";
    resultscreen.style.display="none";
  })
  
  
  
  const showfuntion = (qnumber) => {
    if(data.length===qindex){
      showresult()
    }
    selectedanswer=null;
    questions.textContent = data[qnumber].question;
    answerscontainer.innerHTML = data[qnumber].answers.map((item, index) =>
      `
    <div class="answer">
    <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
    <label for="1">${item.answer}</label>
    </div>
    
    `,
    
  ).join("");
  selectanswer()
  };
  // RESULT FUNCTION
  const showresult=()=>{
    gamescreen.style.display="none";
    resultscreen.style.display="block";
  
  // element inside resultscreen are further chooose by 
  // query selector
    resultscreen.querySelector(".correct").textContent=
    `
    Correct:${correctcount}
    `
    resultscreen.querySelector(".wrong").textContent=
    `
    Wrong:${wrongcount}
    `
    resultscreen.querySelector(".score").textContent=
    `
    Score:${correctcount-wrongcount}
    `
  
  }
  
  const selectanswer = () => {
    document.querySelectorAll("input").forEach((element) => {
      element.addEventListener("click", (e) => {
        console.log(e.target.value)
        selectedanswer = e.target.value;
        // give the value ture or false
  
  
      });
  
    });
  }
  const submitanswer = () => {
    submits.addEventListener("click", () => {
      // selectedAnswer === "true" ? correctCount++ : wrongCount++;
      if (selectedanswer !== null) {
        if(selectedanswer === "true"){
  
         correctcount++
        }
        else{
          wrongcount++;
        } 
        qindex++;
        showfuntion(qindex);
      }
       else{ 
        alert("Select an answer!");
        }
        
    });
  };
  
  
  console.log(data.length)
  //array ki  length
  
  
  showfuntion(qindex)
  submitanswer();
  //  selectanswer();
  
  
  
  
  
  
  
  
  
  
  
  // let qnumber=0;
  // answers.innerHTML=data[0].a;
  // console.log(data[0].answers)