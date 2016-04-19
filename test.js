import execa from 'execa';
import imageSize from 'image-size';
import test from 'ava';

test('resize image', async t => {
	const stdout = (await execa('./cli.js', ['fixture.png', '--width', '150'], {encoding: null})).stdout;

	t.deepEqual(imageSize(stdout), {
		width: 150,
		height: 99,
		type: 'png'
	});
});
