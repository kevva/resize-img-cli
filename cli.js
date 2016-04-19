#!/usr/bin/env node
'use strict';
const fs = require('fs');
const getStdin = require('get-stdin');
const meow = require('meow');
const resizeImg = require('resize-img');

const cli = meow(`
	Usage
	  $ resize-img <image>
	  $ cat <image> | resize-img

	Options
	  --width   Desired width of target image
	  --height  Desired height of target image

	Examples
	  $ resize-img unicorn.png --width 200 > unicorn-200x200.png
	  $ cat unicorn.png | resize-img --width 200 > unicorn-200x200.png
`);

if (cli.input.length === 0 && process.stdin.isTTY) {
	console.error('Specify an image');
	process.exit(1);
}

const init = (data, opts) => resizeImg(data, opts).then(data => process.stdout.write(data));

if (cli.input.length > 0) {
	init(fs.readFileSync(cli.input[0]), cli.flags);
} else {
	getStdin.buffer().then(data => init(data, cli.flags));
}
