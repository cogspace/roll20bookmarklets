// ==Bookmarklet==
// @name Roll20 - Play Playlist
// @author Jon Molnar
// ==/Bookmarklet==
var n = "__PLAYLIST__";
$("#jukeboxfolderroot .folder-title:contains(" + n + ")")
    .next()
    .find(".play")
    .click();
