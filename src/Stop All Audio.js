// ==Bookmarklet==
// @name Roll20 - Stop All Audio
// @author Jon Molnar
// ==/Bookmarklet==
var p; // play buttons
do {
    p = $("#jukeboxwhatsplaying .play");
    p.click();
} while (p.length);
