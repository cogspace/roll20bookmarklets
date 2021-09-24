// ==Bookmarklet==
// @name Roll20 - Play Track
// @author Jon Molnar
// ==/Bookmarklet==
var n = "__TRACK__";
$("#jukeboxfolderroot .title:contains(" + n + ")")
    .next()
    .find(".play")
    .click();
