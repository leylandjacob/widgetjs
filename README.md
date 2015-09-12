# Widget.js

A Backbone powered application in a single script widget.


## Required
You'll need [node](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to build the widget.

## Included
Included in the widget build is:
- [Require](http://requirejs.org/)
- [Require Text](http://requirejs.org/docs/api.html#text)
- [Backbone](http://backbonejs.org/)
- [Underscore](http://underscorejs.org/)
- (Jquery)[http://jquery.com/]
- Widget View
- User Model
- Widget Template 
- Utils


## Use
Once built include this on any HTML page to run the widget.
 ```sh
 <script type="text/javascript" src="http://domain.com/path/to/widget.js"></script>
 ```

The widget will initiate at main.js > initialize app.js > initialize the widget.js view > and render the widget.html 
template.


## Setup
```sh
$ npm install
```

## Build
```sh
$ node node_modules/requirejs/bin/r.js -o widget/build.js include=requireLib wrap=true
```

widget.js will be output in your root directory.

The build script relies on [r.js](http://requirejs.org/docs/) to perform the build and optimization of all the files.
 You can make changes to the build.js file as well as utilize the other r.js command line arguments.