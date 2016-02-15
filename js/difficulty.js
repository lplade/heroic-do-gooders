/**
 * Created by lade on 2/15/16.
 */

//pp. 6-7
//Stat + Difficulty Level Divisor = % Chance of success
//Difficulty Level Divisor = (Difficulty Level / 10) + 1
//10 = pretty easy
//500 = very hard

//user settable numbers
var charStat;
var difficultyLevel;

//global vars
var difficultyLevelDivisor;

function computeDLD(stat, level){
	divisor = (level / 10) + 1;
	return divisor;
}
