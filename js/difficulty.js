/**
 * Created by lade on 2/15/16.
 */

//pp. 6-7
//Stat / Difficulty Level Divisor = % Chance of success
//Difficulty Level Divisor = (Difficulty Level / 10) + 1
//10 = pretty easy
//500 = very hard

//TODO since we have changed the form to always show all three fields and just disable inputs as needed, there is probably some way to use only three input ids and dynamically change which script runs based on tab state

function computeDifficultyRoll(){
	var maxedOut = "";
	document.getElementById("maxed-out").style.visibility = "hidden";
	var stat = document.getElementById("diffRollerStat").value;
	var level = document.getElementById("diffDifficulty").value;
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

//versus rolls
//((roller's stat / opponent's stat)) / 0.02
//or
//(roller's stat / (opponent's stat * 2)) * 100
// = roller's % chance of success

function computeVersusRoll(){
	var maxedOut = "";
	document.getElementById("maxed-out").style.visibility = "hidden";
	var rStat = document.getElementById("vsRollerStat").value;
	var oStat = document.getElementById("vsOppStat").value;
	var chanceSuccess = Math.floor((rStat / oStat) / 0.02 );
	if (chanceSuccess > 98) {
		chanceSuccess = 98;
		maxedOut = "*";
		document.getElementById("maxed-out").style.visibility = "visible";
	}
	document.getElementById("showroll").innerHTML = chanceSuccess + "%" + maxedOut;
}

//vs roll chance / diff roll div = roller's chance of success
function computeComboRoll() {
	var maxedOut = "";
	document.getElementById("maxed-out").style.visibility = "hidden";
	var rStat = document.getElementById("comRollerStat").value;
	var oStat = document.getElementById("comOppStat").value;
	var level = document.getElementById("comDifficulty").value;
	var divisor = (level / 10) + 1;
	var chanceSuccess = Math.floor(((rStat / oStat) / 0.02 ) / divisor);
	if (chanceSuccess > 98) {
		chanceSuccess = 98;
		maxedOut = "*";
		document.getElementById("maxed-out").style.visibility = "visible";
	}
	document.getElementById("showroll").innerHTML = chanceSuccess + "%" + maxedOut;

}

// Use DOM listener instead of deprecated HTML elements
$(document).ready(function () {
	computeDifficultyRoll(); //initial calculation on load

	//similarly initialize calculation after changing tabs
	$('a #diffTab').click(computeDifficultyRoll());
	$('a #vsTab').click(computeVersusRoll());
	$('a #comTab').click(computeComboRoll());


	//eventlistener had to be set up after the document event or it does not work
	//listen to id of each form pane
	$("#difficultyForm").change(function () {
		console.log("Difficulty changed...");
		computeDifficultyRoll();
	});
	$("#versusForm").change(function() {
		computeVersusRoll();
	});
	$("#combinedForm").change(function() {
		computeComboRoll();
	});
});

