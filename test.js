import fs from 'fs';
import execa from 'execa';
import imageSize from 'image-size';
import pify from 'pify';
import test from 'ava';

const fsP = pify(fs);

test('resize image', async t => {
	const stdout = await execa.stdout('./cli.js', ['fixture.png', '--width', '150'], {encoding: null});

	t.deepEqual(imageSize(stdout), {
		width: 150,
		height: 99,
		type: 'png'
	});
});

test('resize image using stdin', async t => {
	const buf = await fsP.readFile('fixture.png');
	const stdout = await execa.stdout('./cli.js', ['--width', '150'], {encoding: null, input: buf});

	t.deepEqual(imageSize(stdout), {
		width: 150,
		height: 99,
		type: 'png'
	});
});
