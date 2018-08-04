// Precision rounding method from Mozilla.org 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round

var mozilla = {};

mozilla.round = function(number, precision) {
	var factor = Math.pow(10, precision);
	var tempNumber = number * factor;
	var roundedTempNumber = Math.round(tempNumber);
	return roundedTempNumber / factor;
};

// BA Curriculum functions

/*
	Grade Calculator
*/

function mark(percent) {
	if (percent <= 61.9) {
		var mark = 'K-';
	} else if (percent <= 65.9) {
		var mark = 'K';
	} else if (percent <= 69.9) {
		var mark = 'K+';
	} else if (percent <= 75.9) {
		var mark = 'M-';
	} else if (percent <= 81.9) {
		var mark = 'M';
	} else if (percent <= 87.9) {
		var mark = 'M+';
	} else if (percent <= 91.9) {
		var mark = 'U-';
	} else if (percent <= 95.9) {
		var mark = 'U';
	} else if (percent > 95.9) {
		var mark = 'U+';
	} else {
		var mark = 'error';
	}
	return mark;
}

function grade(numerator, denominator) {
	var percent = numerator / denominator * 100;
	var output = mozilla.round(percent, 1) + '% ' + mark(percent);
	return output;
}

function gradecalc() {
	var numerator = document.getElementById('numerator').value;
	var denominator = document.getElementById('denominator').value;
	document.getElementById('answer').innerHTML = grade(numerator, denominator);
}

/* 
	Grading Scale
*/

function weigh(continuous, exam) {
	// takes two numbers => 0 and <= 100
	return (continuous * 0.6) + (exam * 0.4);
}

function scale() {
	var continuous = document.getElementById('continuous').value;
	var exam = document.getElementById('exam').value;
	var weighted = weigh(continuous, exam);
	document.getElementById('answer').innerHTML = weighted + '% ' + mark(weighted);
}

/*
	Reading Speed Calculator
*/

function wpm(words, seconds) {
	return words / (seconds / 60)
}

function wpmcalc() {
	var words = document.getElementById('words').value;
	var seconds = document.getElementById('seconds').value;
	var score = Math.round(wpm(words, seconds)) + ' WPM';
	document.getElementById('answer').innerHTML = score;
}
