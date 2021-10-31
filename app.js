const questions = [
     new Question( "Who invented JavaScript?", [ "Douglas Crockford", "Sheryl Sandberg", "Brendan Eich", "Eilon Musk" ], "Brendan Eich" ),
     new Question( "Which one of these is a JavaScript package manager?", [ "Node.js", "TypeScript", "npm", "GithuB" ], "npm" ),
     new Question( "Which tool can you use to ensure code quality?", [ "ESLint", "jQuery", "Angular", "React" ], "ESLint" ),
     new Question( "Which statement is the correct way to create a variable called rate and assign it the value 100?", [ " let rate = 100", " let 100 = rate", "rate = 100", "100 = let rate" ], "let rate = 100" ),
     new Question( "You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?", [ " /[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/", "/\d\d:\d\d:\d\d/", "/ : : /", " /[0-9]+:[0-9]+:[0-9]+/" ], " /\d\d:\d\d:\d\d/" ),
     new Question( "Which property references the DOM object that dispatched an event?", [ "self", "source", "target", "object" ], "target" ),
     new Question( "Which statement creates a new Person object called \"student\"?", [ "var student = new Person()", " var student = construct Person;", "var student = construct Person()", " var student = Person();" ], "var student = new Person()" ),
     new Question( "Which variable is an implicit parameter for every function in JavaScript?", [ "argsArray", "argumentsList", "args", "Arguments" ], "Arguments" ),
     new Question( "Which choice is not a unary operator?", [ "typeof", "instanceof", "void", "delete" ], "instanceof" ),
     new Question( "Which keyword is used to create an error", [ "exception", "catch", "throw", "error" ], "throw" )
]
const quiz = new Quiz( questions )
function populate() {
     if ( quiz.isEnded() ) {
          showScore()
     } else {
          // Show Question
          let element = document.getElementById( "question" )
          element.innerHTML = quiz.getQuestionIndex().text;
          // Show Choices
          let choices = quiz.getQuestionIndex().choices;
          for ( let i = 0; i < choices.length; i++) {
               let element = document.getElementById( `choice${ i }` )
               element.innerHTML = choices[ i ];
               guess( "btn" + i, choices[ i ] )
          }
          showProgress()
     }
}
function guess(id , guess) {
     let button = document.getElementById( id );
     button.onclick = function () {
          quiz.guess( guess );
          populate();
     }
}
function showScore() {
     let gameOverHtml = `<h1>Result</h1>`;
     gameOverHtml += `<h2 id="score"> Your Score ${ quiz.score }</h2>`;
     document.getElementById("quiz").innerHTML = gameOverHtml
}
function showProgress() {
     let currentNumber = quiz.questionIndex + 1;
     document.getElementById( "progress" ).innerHTML = `Question ${ currentNumber} OF ${quiz.questions.length};`
}
populate()