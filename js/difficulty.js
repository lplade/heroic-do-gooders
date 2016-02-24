/**
 * Created by lade on 2/15/16.
 */

//pp. 6-7
//Stat / Difficulty Level Divisor = % Chance of success
//Difficulty Level Divisor = (Difficulty Level / 10) + 1
//10 = pretty easy
//500 = very hard

//user settable numbers
//var charStat;
//var difficultyLevel;

//global vars
//var difficultyLevelDivisor;

function computeDifficultyRoll(){
	var maxedOut = "";
	document.getElementById("maxed-out").style.visibility = "hidden";
	var stat = document.getElementById("charStat").value;
	var level = document.getElementById("difficulty").value;
    var divisor = (level / 10) + 1;
	var chanceSuccess = Math.floor(stat / divisor);
	if (chanceSuccess > 98) {
		chanceSuccess = 98;
		maxedOut = "*";
		document.getElementById("maxed-out").style.visibility = "visible";
	}
	//console.log(chanceSuccess);
	document.getElementById("showroll").innerHTML = chanceSuccess + "%" + maxedOut;
}

function computeOpposedRoll(){
	var maxedOut = "";
	document.getElementById("maxed-out").style.visibility = "hidden";
	var rStat = document.getElementById("rollerStat").value;
	var oStat = document.getElementById("oppStat").value;
	var chanceSuccess = Math.floor((rStat / oStat) / 0.02 );
	if (chanceSuccess > 98) {
		chanceSuccess = 98;
		maxedOut = "*";
		document.getElementById("maxed-out").style.visibility = "visible";
	}
	document.getElementById("showroll").innerHTML = chanceSuccess + "%" + maxedOut;
}

//opposed rolls
//((roller's stat / opponent's stat)) / 0.02
//or
//(roller's stat / (opponent's stat * 2)) * 100
// = roller's % chance of success