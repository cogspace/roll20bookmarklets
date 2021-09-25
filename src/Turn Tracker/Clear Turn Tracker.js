// ==Bookmarklet==
// @name Roll20 - Clear Turn Tracker
// @author Jon Molnar
// ==/Bookmarklet==
$(".clearlist").click();
$(".ui-dialog :contains(sure you want to clear the turns)").parent().find("button:contains(Cancel)").prev().click();
