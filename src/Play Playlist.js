var n = "__PLAYLIST__";
$("#jukeboxfolderroot .folder-title:contains(" + n + ")")
    .next()
    .find(".play")
    .click();
