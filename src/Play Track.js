var n = "__TRACK__";
$("#jukeboxfolderroot .title:contains(" + n + ")")
    .next()
    .find(".play")
    .click();
