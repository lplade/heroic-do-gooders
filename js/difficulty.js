/*
Heroic-Do-Gooders calculator
Copyright (C) 2016 l.p.lade

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

//pp. 6-7
//Stat / Difficulty Level Divisor = % Chance of success
//Difficulty Level Divisor = (Difficulty Level / 10) + 1
//10 = pretty easy
//500 = very hard

//TODO since we have changed the form to always show all three fields and just disable inputs as needed, there is probably some way to use only three input ids and dynamically change which script runs based on tab state

function computeDifficultyRoll() {
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

function computeVersusRoll() {
	var maxedOut = "";
	document.getElementById("maxed-out").style.visibility = "hidden";
	var rStat = document.getElementById("vsRollerStat").value;
	var oStat = document.getElementById("vsOppStat").value;
	var chanceSuccess = Math.floor((rStat / oStat) / 0.02);
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
	// http://getbootstrap.com/javascript/#tabs-events explains the .target method
	// which returns the whole element. .attr() method returns the specific id we're looking for
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		// e.target returns the whole html element. .id method narrows that down
		var targetID = e.target.id;
		console.log(targetID);
		switch (targetID) {
			case 'diffTab':
				break;
			case 'vsTab':
				break;
			case 'comTab':
				break;
		}
	});

	//eventlistener had to be set up after the document event or it does not work
	//listen to id of each form pane
	$("#difficultyForm").change(function () {
		computeDifficultyRoll();
	});
	$("#versusForm").change(function () {
		computeVersusRoll();
	});
	$("#combinedForm").change(function () {
		computeComboRoll();
	});

	//TODO responsiveness with jQuery listener is noticeably slower than JavaScript listener. Why?

});
