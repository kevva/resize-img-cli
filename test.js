import execa from 'execa';
import imageSize from 'image-size';
import test from 'ava';

test('resize png image', async t => {
	const stdout = (await execa('./cli.js', ['fixture.png', '--width', '150'], {encoding: null})).stdout;

	t.deepEqual(imageSize(stdout), {
		width: 150,
		height: 99,
		type: 'png'
	});
});

test('resize jpg image', async t => {
	const stdout = (await execa('./cli.js', ['fixture.jpg', '--width', '150'], {encoding: null})).stdout;

	t.deepEqual(imageSize(stdout), {
		width: 150,
		height: 99,
		type: 'jpg'
	});
});

test('resize bmp image', async t => {
	const stdout = (await execa('./cli.js', ['fixture.bmp', '--width', '150'], {encoding: null})).stdout;

	t.deepEqual(imageSize(stdout), {
		width: 150,
		height: 99,
		type: 'bmp'
	});
});
