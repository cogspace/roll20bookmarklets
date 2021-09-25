# Roll20 Bookmarklets

This is a set of bookmarklets for Roll20 as introduced [on my blog](//www.cogspace.com/roll20-bookmarklets/).

Check the Releases page for the most recent build, or use the instructions below to compile them yourself.

## Compiling

Run `yarn build` or `npm run build` to compile them to `dist/roll20bookmarklets.html`.

## Documentation

### 🔊 Audio

-   **Play Playlist** - Plays a playlist specified by title (replace `__PLAYLIST__` in the bookmark). _Note: This is case-sensitive._
-   **Play Track** - Plays a track specified by title (replace `__TRACK__` in the bookmark). _Note: This is case-sensitive._
-   **Stop All Audio** - Stops all currently-playing audio.

### 🚀 Macros

-   **Start Combat** - Clears the turn tracker, stops all audio, and starts the "Combat" playlist. _Note: This is case-sensitive._
-   **Stop Combat** - Clears the turn tracker, closes it, and stops all audio.

### ⚔ Turn Tracker

-   **Clear Turn Tracker** - Clears the turn tracker.
-   **Close Turn Tracker** - Closes the turn tracker dialog.
-   **Next Turn** - Advances to the next turn in the tracker.
-   **Sort Turns Desc** - Sorts the turns in the tracker numerically (descending).
