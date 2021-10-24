# Roll20 Bookmarklets

This is a set of bookmarklets for Roll20 as introduced [on my blog](//www.cogspace.com/roll20-bookmarklets/).

Check the Releases page for the most recent build, or use the instructions below to compile them yourself.

## Compiling

Run `yarn build` or `npm run build` to compile them to `dist/roll20bookmarklets.html`.

## Documentation

### 🔊 Audio

- **Play Playlist** - Plays a playlist specified by title (replace `__PLAYLIST__` in the bookmark). _Note: This is case-sensitive._
- **Play Track** - Plays a track specified by title (replace `__TRACK__` in the bookmark). _Note: This is case-sensitive._
- **Stop All Audio** - Stops all currently-playing audio.

### 🚀 Macros

- **Start Combat** - Clears the turn tracker, stops all audio, and starts the "Combat" playlist. _Note: This is case-sensitive._
- **Stop Combat** - Clears the turn tracker, closes it, and stops all audio.

### ⚔ Turn Tracker

- **Clear Turn Tracker** - Clears the turn tracker.
- **Close Turn Tracker** - Closes the turn tracker dialog.
- **Next Turn** - Advances to the next turn in the tracker.
- **Sort Turns Desc** - Sorts the turns in the tracker numerically (descending).

### 🎲 Dice Roller

- **Roll d4, 2d6, 5d8, etc.** - Rolls the specified dice.
- **Toggle GM** - Toggles whether dice rolls are whispered to the GM.
- **Toggle Inline** - Toggles whether dice rolls are inlined.
- **Toggle Exploding** - Toggles whether dice explode.
- **Toggle Compounding** - Toggles whether dice undergo compounding explosion (Shadowrun-style).
- **Toggle Penetrating** - Toggles whether dice undergo penetrating explosion (Hackmaster-style).

## Installation

Download the bookmarks HTML file from [the latest release](//github.com/cogspace/roll20bookmarklets/releases), then either open it in a browser and drag the links to your bookmark bar wherever you want them, or import the bookmarks HTML file into your browser and organize them as desired.

## MIT License

Copyright 2021 Jon Molnar

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
