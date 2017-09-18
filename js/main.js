// var listItemCount = +prompt('insert li quantity');
// 	for (var i = 1; i <= listItemCount; i++) {
// 		document.getElementById('cheess').innerHTML += '<div>'+'item ' + i + '</div>';
// 	}
// }
//------ FILL ID AND CLASS -----------
for (var i = 0; i < 8; i++) {
	for (var j = 0; j < 8; j++) {
		if ((i+j)%2 == 1) {
				document.getElementById('cheess').innerHTML += '<div id="' + i + j + '" class="outer black"></div>';
		} else	{
				document.getElementById('cheess').innerHTML += '<div id="' + i + j + '" class="outer white"></div>';
		}
	}
	document.getElementById('cheess').innerHTML += '<br>';
}
//------ PAWN PLACED AT DESK -----------
for (var i = 0; i < 8; i++) {
	document.getElementById('6' + i).innerHTML += '<img class="pawn" src="img/b_pawn.png">';
	document.getElementById('1' + i).innerHTML += '<img class="pawn" src="img/w_pawn.png">';
}
//------ KINGS PLACED AT DESK -----------
	document.getElementById('0' + 4).innerHTML += '<img src="img/w_king.png">';
	document.getElementById('7' + 4).innerHTML += '<img src="img/b_king.png">';
//------ QUEEN PLACED AT DESK -----------
	document.getElementById('0' + 3).innerHTML += '<img src="img/w_queen.png">';
	document.getElementById('7' + 3).innerHTML += '<img src="img/b_queen.png">';
//------ BISHOP PLACED AT DESK -----------
	document.getElementById('0' + 2).innerHTML += '<img src="img/w_bishop.png">';
	document.getElementById('7' + 2).innerHTML += '<img src="img/b_bishop.png">';
	document.getElementById('0' + 5).innerHTML += '<img src="img/w_bishop.png">';
	document.getElementById('7' + 5).innerHTML += '<img src="img/b_bishop.png">';
//------ BISHOP PLACED AT DESK -----------
	document.getElementById('0' + 1).innerHTML += '<img src="img/w_knight.png">';
	document.getElementById('7' + 1).innerHTML += '<img src="img/b_knight.png">';
	document.getElementById('0' + 6).innerHTML += '<img src="img/w_knight.png">';
	document.getElementById('7' + 6).innerHTML += '<img src="img/b_knight.png">';
//------ CASTLE PLACED AT DESK -----------
	document.getElementById('0' + 0).innerHTML += '<img src="img/w_castle.png">';
	document.getElementById('7' + 0).innerHTML += '<img src="img/b_castle.png">';
	document.getElementById('0' + 7).innerHTML += '<img src="img/w_castle.png">';
	document.getElementById('7' + 7).innerHTML += '<img src="img/b_castle.png">';