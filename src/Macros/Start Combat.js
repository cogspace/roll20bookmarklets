// ==Bookmarklet==
// @name Roll20 - Start Combat Macro
// @author Jon Molnar
// ==/Bookmarklet==

// Stop all audio
var p; // play buttons
do {
    p = $("#jukeboxwhatsplaying .play");
    p.click();
} while (p.length);

// Start combat music playlist
var n = "Combat";
$("#jukeboxfolderroot .folder-title:contains(" + n + ")")
    .next()
    .find(".play")
    .click();

// Clear turn tracker
$(".clearlist").click();
$(".ui-dialog :contains(sure you want to clear the turns)").parent().find("button:contains(Cancel)").prev().click();
