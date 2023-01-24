import {bundle} from '@remotion/bundler';
import {getCompositions, renderMedia} from '@remotion/renderer';

const start = async () => {
	// The composition you want to render
	const compositionId = 'MyVideo';

	// Create a webpack bundle of the video.
	// You only have to do this once, you can reuse the bundle.
	const bundleLocation = await bundle(require.resolve('./src/index'));

	// Parametrize the video by passing arbitrary props to your component.
	const inputProps = {
		foo: 'bar',
	};

	// Extract all the compositions you have defined in your project
	// from the webpack bundle.
	const comps = await getCompositions(bundleLocation, {
		// You can pass custom input props that you can retrieve using getInputProps()
		// in the composition list. Use this if you want to dynamically set the duration or
		// dimensions of the video.
		inputProps,
	});

	// Select the composition you want to render.
	const composition = comps.find((c) => c.id === compositionId);

	// Ensure the composition exists
	if (!composition) {
		throw new Error(`No composition with the ID ${compositionId} found`);
	}

	await renderMedia({
		composition,
		serveUrl: bundleLocation,
		codec: 'h264',
		outputLocation: 'out/video.mp4',
		inputProps,
	});
};

start();
