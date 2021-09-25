# Roll20 Bookmarklets

This is a set of bookmarklets for Roll20 as introduced [on my blog](//www.cogspace.com/roll20-bookmarklets/).

Check the Releases page for the most recent build, or use the instructions below to compile them yourself.

## Compiling

Run `yarn build` or `npm run build` to compile them to `dist/roll20bookmarklets.html`.

## Documentation

## 🔊 Audio

-   [Play Playlist][playlist] - Plays a playlist specified by title (replace `__PLAYLIST__` in the bookmark). _Note: This is case-sensitive._
-   [Play Track][playtrack] - Plays a track specified by title (replace `__TRACK__` in the bookmark). _Note: This is case-sensitive._
-   [Stop All Audio][stopaudio] - Stops all currently-playing audio.

### 🚀 Macros

-   [Start Combat][startcombat] - Clears the turn tracker, stops all audio, and starts the "Combat" playlist. _Note: This is case-sensitive._
-   [Stop Combat][stopcombat] - Clears the turn tracker, closes it, and stops all audio.

### ⚔ Turn Tracker

-   [Clear Turn Tracker][clearturns] - Clears the turn tracker.
-   [Close Turn Tracker][closeturns] - Closes the turn tracker dialog.
-   [Next Turn][nextturn] - Advances to the next turn in the tracker.
-   [Sort Turns Desc][sortturns] - Sorts the turns in the tracker numerically (descending).

[playlist]: javascript:(function()%7Bvar%20n%3D%22__PLAYLIST__%22%3B%24(%22%23jukeboxfolderroot%20.folder-title%3Acontains(%22%2Bn%2B%22)%22).next().find(%22.play%22).click()%3B%7D)()
[playtrack]: javascript:(function()%7Bvar%20n%3D%22__TRACK__%22%3B%24(%22%23jukeboxfolderroot%20.title%3Acontains(%22%2Bn%2B%22)%22).next().find(%22.play%22).click()%3B%7D)()
[stopaudio]: javascript:(function()%7Bvar%20p%3Bdo%20p%3D%24(%22%23jukeboxwhatsplaying%20.play%22)%2Cp.click()%3Bwhile(p.length)%3B%7D)()
[startcombat]: javascript:(function()%7Bvar%20p%3Bdo%20p%3D%24(%22%23jukeboxwhatsplaying%20.play%22)%2Cp.click()%3Bwhile(p.length)%3Bvar%20n%3D%22Combat%22%3B%24(%22%23jukeboxfolderroot%20.folder-title%3Acontains(%22%2Bn%2B%22)%22).next().find(%22.play%22).click()%2C%24(%22.clearlist%22).click()%2C%24(%22.ui-dialog%20%3Acontains(sure%20you%20want%20to%20clear%20the%20turns)%22).parent().find(%22button%3Acontains(Cancel)%22).prev().click()%3B%7D)()
[stopcombat]: javascript:(function()%7Bvar%20p%3Bdo%20p%3D%24(%22%23jukeboxwhatsplaying%20.play%22)%2Cp.click()%3Bwhile(p.length)%3B%24(%22.clearlist%22).click()%2C%24(%22.ui-dialog%20%3Acontains(sure%20you%20want%20to%20clear%20the%20turns)%22).parent().find(%22button%3Acontains(Cancel)%22).prev().click()%2C%24(%22.ui-dialog-title%3Acontains(Turn%20Order)%22).next().click()%3B%7D)()
[clearturns]: javascript:(function()%7B%24(%22.clearlist%22).click()%2C%24(%22.ui-dialog%20%3Acontains(sure%20you%20want%20to%20clear%20the%20turns)%22).parent().find(%22button%3Acontains(Cancel)%22).prev().click()%3B%7D)()
[closeturns]: javascript:(function()%7B%24(%22.ui-dialog-title%3Acontains(Turn%20Order)%22).next().click()%3B%7D)()
[nextturn]: javascript:(function()%7B%24(%22button%3Acontains(%5D)%22).click()%3B%7D)()
[sortturns]: javascript:(function()%7B%24(%22.sortlist_numericdesc%22).click()%3B%7D)()
