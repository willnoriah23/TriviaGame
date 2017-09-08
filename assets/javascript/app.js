function generateGame(questions, quizContainer, resultsContainer, submitButton){ 

	function showQuestions(questions, quizContainer){
		
		var output = [];
		var answers;

		for(var i=0; i<questions.length; i++){
		// first reset the list of answers
		answers = [];

		answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}
	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}

var myQuestions = [{

	question: "Beyoncé was named after what family member?",
	choices: ["Paternal grandmother", "Her mother’s maiden name", "A Creole seasoning", "A Texas city"]
	correctAnswer: "Her mother’s maiden name"
	 },
	 {
	question: "How many solo albums does Beyonce have?",
	choices: {"8", "2", "6", "7"},
	correctAnswer: "6"
	},
	{
	question: "What female music group was Beyoncé a member of?",
	choices: {"SWV", "Destiny's Child", "TLC", "The Supremes"};	
	correctAnswer: "Destiny's Child"
	},
	{
	question: "What is the name of Beyoncé’s only son?",
	choices: {"Mister", "Jay", "Knowles", "Sir"},
	correctAnswer: "Sir"
	},
	{
	question: "What is the name of Beyoncé charity foundation?",
	choices: {"BEYGOOD", "Bey Gives Back", "‘Yonce Fund", "B & J Money"},
	correctAnswer: "BEYGOOD"
	},
	{
	question: "How many times has Beyoncé been nominated for a Grammy?",
	choices: {"101", "62", "25", "12"},
	correctAnswer: "62"
	},
	{
	question: "Destiny's Child recorded &quot;Independent Women Part I&quot;, which appeared on the soundtrack to what 2000 film?",
	choices: {"Charlie's Angels", "Coyote Ugly", "Remember The Titans", "Bring It On"},
	correctAnswer: "Charlie's Angels"
	},
	{
	question: "What world famous supermodel has the same name as Beyoncé's middle name?"
	choices: {"Naomi Campbell", "Kate Moss", "Gisele", "Adriana Lima"},
	correctAnswer: "Gisele"
	},
	{
	question: "What word, popularised by Beyoncé, was added to the Oxford English Dictionary?",
	choices: {"Bootylicious", "Fleek", "Clickbait", "Swag"}
	correctAnswer: "Bootylicious"
	},
	{
	question: "Which artist was not featured on Beyoncé's self-titled album?"
	choices: {"Drake", "Frank Ocean", "Jay-Z", "Rihanna"},
	correctAnswer: "Rihanna"	
	},
}];

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');