var number = 100;
 
var timerId;

function run() {
    timerId = setInterval(decrement, 1000);
}

function decrement() {
    number--;

    $("#show-timer").html("<h2>" + number + "</h2>");

    if (number == 0) {
        stop();

        alert("Time Up!");
    }
}

function stop() {
    clearInterval(timerId);
}

run();

function createQuestionElement(index) {

    var qElement = $('<div>', {
        id: 'question'
    });

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
}

var questions = [{

    question: "Beyoncé was named after what family member?",
    choices: ["Paternal grandmother", "Her mother’s maiden name", "A Creole seasoning", "A Texas city"]
    // correctAnswer: "Her mother’s maiden name"
     },
     {
    question: "How many solo albums does Beyonce have?",
    choices: ["8", "2", "6", "7"]
    correctAnswer: "6"
    },
    {
    question: "What female music group was Beyoncé a member of?",
    choices: ["SWV", "Destiny's Child", "TLC", "The Supremes"]; 
    correctAnswer: "Destiny's Child"
    },
    {
    question: "What is the name of Beyoncé’s only son?",
    choices: ["Mister", "Jay", "Knowles", "Sir"];
    correctAnswer: "Sir"
    },
    {
    question: "What is the name of Beyoncé charity foundation?",
    choices: ["BEYGOOD", "Bey Gives Back", "‘Yonce Fund", "B & J Money"];
    correctAnswer: "BEYGOOD"
    },
    {
    question: "How many times has Beyoncé been nominated for a Grammy?",
    choices: ["101", "62", "25", "12"];
    correctAnswer: "62"
    },
    {
    question: "Destiny's Child recorded &quot;Independent Women Part I&quot;, which appeared on the soundtrack to what 2000 film?",
    choices: ["Charlie's Angels", "Coyote Ugly", "Remember The Titans", "Bring It On"];
    correctAnswer: "Charlie's Angels"
    },
    {
    question: "What world famous supermodel has the same name as Beyoncé's middle name?"
    choices: ["Naomi Campbell", "Kate Moss", "Gisele", "Adriana Lima"];
    correctAnswer: "Gisele"
    },
    {
    question: "What word, popularised by Beyoncé, was added to the Oxford English Dictionary?",
    choices: ["Bootylicious", "Fleek", "Clickbait", "Swag"];
    correctAnswer: "Bootylicious"
    },
    {
    question: "Which artist was not featured on Beyoncé's self-titled album?"
    choices: ["Drake", "Frank Ocean", "Jay-Z", "Rihanna"]
    correctAnswer: "Rihanna"    
    };
];

function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }
  
// function choose() {
//     selections[questionCounter] = +$('input[name="answer"]:checked').val();
//   }
  
// function displayScore() {
//     var score = $('<p>',{id: 'question'});
    
//     var numCorrect = 0;
//     for (var i = 0; i < selections.length; i++) {
//       if (selections[i] === questions[i].correctAnswer) {
//         numCorrect++;
//       }
//     }
    
//     score.append('You got ' + numCorrect + ' questions out of ' +
//                  questions.length + ' right!!!');
//     return score;
//   }


        
