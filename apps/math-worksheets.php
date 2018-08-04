<?php

// get form data
$operator = $_POST['operator'];
$order = $_POST['order'];
$a_floor = $_POST['a_floor'];
$a_ceil = $_POST['a_ceil'];
$b_floor = $_POST['b_floor'];
$b_ceil = $_POST['b_ceil'];

// set filename
date_default_timezone_set('Asia/Kolkata');
$filename = 'ba_math_worksheet_' . date('YmdHi') . '.txt';

// define function
function generate_worksheet($operator, $order, $a_floor, $a_ceil, $b_floor, $b_ceil, $filename) {
	$file = fopen("./user-data/{$filename}", "w");
	$i = 0;
	fwrite($file, pack("CCC",0xef,0xbb,0xbf));
	while ($i <= $order) {
		if ($_POST['b_limiter'] == "on") {
			$a = mt_rand($a_floor, $a_ceil);
			$b = mt_rand($b_floor, $a);
		} else {
			$a = mt_rand($a_floor, $a_ceil);
			$b = mt_rand($b_floor, $b_ceil);
		}
		fwrite($file, $a . ' ' . $operator . ' ' . $b . "\n");
		$i++;
	}
	fclose($file);
}

// generate worksheet
generate_worksheet($operator, $order, $a_floor, $a_ceil, $b_floor, $b_ceil, $filename);

// redirect to new worksheet
$header_input = "Location: /ba-apps/user-data/{$filename}";
header($header_input);
