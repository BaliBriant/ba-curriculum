// BA Curriculum functions

/*
	Grade Calculator
	© Bhaktivedanta Academy. Coded in 2018 by Balaram Das.
	BA's grading standards use K, M, and U for grades. Each grade can be plus, minus, or as is.
	This app takes a fraction where number of correct answers is the numerator and total questions
	on a test is the denominator. It then converts the fraction to a percent, assigns a grade to
	that percent according to the BA standards, and outputs the percent together with the grade.
*/

function mark(percent) {
	// Takes an integer representing a percentage, returns grade
	if (percent < 62) {
		var mark = 'K-';
	} else if (percent < 66) {
		var mark = 'K';
	} else if (percent < 70) {
		var mark = 'K+';
	} else if (percent < 76) {
		var mark = 'M-';
	} else if (percent < 82) {
		var mark = 'M';
	} else if (percent < 88) {
		var mark = 'M+';
	} else if (percent < 92) {
		var mark = 'U-';
	} else if (percent < 96) {
		var mark = 'U';
	} else if (percent > 96) {
		var mark = 'U+';
	} else {
		var mark = 'error';
	}
	return mark;
}

function grade(numerator, denominator) {
	// Takes a fraction, returns percentage and grade
	var percent = numerator / denominator * 100;
	var output = mozilla.round(percent, 1) + '% ' + mark(percent);
	return output;
}

function gradecalc() {
	// Uses values from HTML inputs, outputs percent and grade to HTML
	var numerator = document.getElementById('numerator').value;
	var denominator = document.getElementById('denominator').value;
	document.getElementById('answer').innerHTML = grade(numerator, denominator);
}

/*
	Grading Scale
	© Bhaktivedanta Academy. Coded in 2018 by Balaram Das.
	BA's grading standards specify that a srudent's final academic mark for a semester
	should be a combination of the student's exam results (weighted 40%) with the
	results of their continuous assessment throughout the semester (weighted 60%).
	This app takes two integers representing the student's results, combines them
	according to the specifications, and returns the final academic mark.
*/

function weigh(continuous, exam) {
	// Takes two integers representing percentages,
	// weighs these as 60% (continuous) and 40% (exam) and returns the outcome
	return (continuous * 0.6) + (exam * 0.4);
}

function scale() {
	// Takes values from HTML inputs and outputs the result back to HTML
	var continuous = document.getElementById('continuous').value;
	var exam = document.getElementById('exam').value;
	var weighted = weigh(continuous, exam);
	document.getElementById('answer').innerHTML = weighted + '% ' + mark(weighted);
}

/*
	Reading Speed Calculator
	© Bhaktivedanta Academy. Coded in 2018 by Balaram Das.
	In order to assess a student's reading speed, a teacher may choose a sample
	text and have the student read it aloud while timing them. The teacher can
	then use this app, inputting the text's length in words and the time it took
	the student to read it in seconds. This app calculates the student's reading
	speed in words per minute (wpm).
*/

function wpm(words, seconds) {
	// Takes text length in words, and number of seconds taken to read it,
	// returns reading speed in words per minute (wpm)
	return words / (seconds / 60)
}

function wpmcalc() {
	// takes values from HTML inputs and outputs the result back to HTML
	var words = document.getElementById('words').value;
	var seconds = document.getElementById('seconds').value;
	var score = Math.round(wpm(words, seconds)) + ' WPM';
	document.getElementById('answer').innerHTML = score;
}

/*
	Precision rounding method from Mozilla.org
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
*/

var mozilla = {};

mozilla.round = function(number, precision) {
	// rounds a floating point number to a specified precision
	var factor = Math.pow(10, precision);
	var tempNumber = number * factor;
	var roundedTempNumber = Math.round(tempNumber);
	return roundedTempNumber / factor;
};
