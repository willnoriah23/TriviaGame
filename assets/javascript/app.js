$('#start').on('click', function(){

    startTimer();
    createQuestionElement();

});


function createQuestionElement() {
    //console.log(questions);
    var questionsElement = $("<div><h1>test</h1></div>");
    // $("#questionsContainer").append(questionsElement);
    $.each(questions, function(index,val){
      console.log(index, val);
      //console.log(val.question);
      var radioStuff = $('<div><h2>'+val.question+'</h2></div>');
      $('#questionsContainer').append(radioStuff).append(createRadios(index));
    });
}

function createRadios(index) {
    // var radioList = $('<ul>');
    //var item;
    // console.log(index)
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
       
      // item = $('<li>');
        input += '<input type="radio" name="choices'+questions[index].choices+'" value=' + questions[index].choices[i] + ' />';

      input += questions[index].choices[i] + "<br>";
      //item.append(input);
      //radioList.append(item);
    }
    return input;
  }

  // function choose() {
  //   selections[questionCounter] = +$('input[name="answer"]:checked').val();
  // }

var number = 60;
 
var timerId;

function startTimer() {
    var decrement = function() {
        //console.log("Line 40: ", number );
        if (number == 0) {
            stop();
            // alert("Time Up!");
        }
        number--;
        $("#timer").html("<h2>" + number + "</h2>");
    }
    timerId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(timerId);
}

$("#submit").on('click', function() {
    getCheckedValue();

});

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( choices );
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; 
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("question"+i)=== correctAnswer[i]) score += 1; 
  return score;
}

    var questions = [
    {

    question: "What was Beyoncé named after?",
    choices: ["Paternal grandmother", "Her mother’s maiden name", "A Creole seasoning", "A Texas city"],
    correctAnswer: "Her mother’s maiden name"
     },
     {
    question: "How many solo albums does Beyonce have?",
    choices: ["8", "2", "6", "7"],
    correctAnswer: "6"
    },
    {
    question: "What female music group was Beyoncé a member of?",
    choices: ["SWV", "Destiny's Child", "TLC", "The Supremes"],
    correctAnswer: "Destiny's Child"
    },
    {
    question: "What is the name of Beyoncé’s only son?",
    choices: ["Mister", "Jay", "Knowles", "Sir"],
    correctAnswer: "Sir"
    },
    {
    question: "What is the name of Beyoncé charity foundation?",
    choices: ["BEYGOOD", "Bey Gives Back", "‘Yonce Fund", "B & J Money"],
    correctAnswer: "BEYGOOD"
    },
    {
    question: "How many times has Beyoncé been nominated for a Grammy?",
    choices: ["101", "62", "25", "12"],
    correctAnswer: "62"
    },
    {
    question: "Destiny's Child recorded &quot;Independent Women Part I&quot;, which appeared on the soundtrack to what 2000 film?",
    choices: ["Charlie's Angels", "Coyote Ugly", "Remember The Titans", "Bring It On"],
    correctAnswer: "Charlie's Angels"
    },
    {
    question: "What world famous supermodel has the same first name as Beyoncé's middle name?",
    choices: ["Naomi Campbell", "Kate Moss", "Gisele", "Adriana Lima"],
    correctAnswer: "Gisele"
    },
    {
    question: "What word, popularised by Destiny's Child, was added to the Oxford English Dictionary in 2004?",
    choices: ["Bootylicious", "Fleek", "Clickbait", "Swag"],
    correctAnswer: "Bootylicious"
    },
    {
    question: "Which artist was not featured on Beyoncé's self-titled album?",
    choices: ["Drake", "Frank Ocean", "Jay-Z", "Rihanna"],
    correctAnswer: "Rihanna"    
    }
];



// function returnScore(){
//   alert("Your score is "+ getScore() +"/"+ tot);
// }

// function displayScore() {
//     var score = $('<p>',{id: 'question'});
    
//     var numCorrect = 0;
//     for (var i = 0; i < selections.length; i++) {
//       if (selections[i] === questions[i].correctAnswer) {
//         numCorrect++;
//       }
//     }
    
//     score.append('You got ' + numCorrect + ' questions out of ' +
//                  questions.length + ' right!');
//     return score;
//   }