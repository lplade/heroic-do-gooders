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
	var stat = document.getElementById("charStat").value;
	//console.log(stat);
	var level = document.getElementById("difficulty").value;
	//console.log(level);
    var divisor = (level / 10) + 1;
	var chanceSuccess = Math.floor(stat / divisor); //TODO drop fraction
	//console.log(chanceSuccess);
	document.getElementById("showroll").innerHTML = chanceSuccess + "%";
}

function computeOpposedRoll(){
	var rStat = document.getElementById("rollerStat").innerHTML.value;
	var oStat = document.getElementById("oppStat").innerHTML.value;
	var chanceSuccess = rStat / oStat * 200;
	return chanceSuccess + "&";
}

//opposed rolls
//((roller's stat / opponent's stat)) / 0.02
//or
//(roller's stat / (opponent's stat * 2)) * 100
// = roller's % chance of success