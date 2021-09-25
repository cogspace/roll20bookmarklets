// ==Bookmarklet==
// @name Roll20 - Stop Combat Macro
// @author Jon Molnar
// ==/Bookmarklet==

// Stop all audio
var p; // play buttons
do {
    p = $("#jukeboxwhatsplaying .play");
    p.click();
} while (p.length);

// Clear turn tracker
$(".clearlist").click();
$(".ui-dialog :contains(sure you want to clear the turns)").parent().find("button:contains(Cancel)").prev().click();

// Close turn tracker
$(".ui-dialog-title:contains(Turn Order)").next().click();
