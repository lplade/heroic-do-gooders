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
	var stat = document.getElementById("charStat").innerHTML;
	var level = document.getElementById("difficulty").innerHTML;
    var divisor = (level / 10) + 1;
	//TODO update the DLD field
	var chanceSuccess = stat / divisor; //TODO drop fraction

}

function computeOpposedRoll(){
	var rStat = document.getElementById("rollerStat").innerHTML;
	var oStat = document.getElementById("oppStat").innerHTML;
	var chanceSuccess = rStat / oStat * 200;
}

//opposed rolls
//((roller's stat / opponent's stat)) / 0.02
//or
//(roller's stat / (opponent's stat * 2)) * 100
// = roller's % chance of success