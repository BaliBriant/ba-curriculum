var begin;

function start() {
	begin = Date.now();
	document.getElementById('start').innerHTML = 'Timing&hellip;';
}

function stop() {
	var stop = Date.now();
	var result = (stop - begin) / 1000;
	var output = Math.round(wpm(text_length, result)) + ' WPM';
	document.getElementById('result').innerHTML = output;
	document.getElementById('start').innerHTML = 'Test Again';
	var result = 0;
}

function wpm(words, seconds) {
	return words / (seconds / 60);
}
