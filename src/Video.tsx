import {
	Composition,
	interpolate,
	useCurrentFrame,
	useVideoConfig,
	spring,
	Sequence,
} from 'remotion';

export const RemotionVideo: React.FC = () => {
	// Return <VideoComponent />;
	return (
		<div>
			<Composition
				id="MyVideo"
				component={VideoComponent}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				// Optionally, you can define props that get passed to the component
			/>
		</div>
	);
};

const VideoComponent = () => {
	return (
		<div
			style={{
				flex: 1,
				textAlign: 'center',
				fontSize: '7em',
				background: 'white',
			}}
		>
			<Sequence from={0} durationInFrames={40}>
				<Title title="Hello" />
			</Sequence>
			<Sequence from={40}>
				<Title title="World" />
			</Sequence>
		</div>
	);
};

const Title: React.FC<{title: string}> = ({title}) => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 20], [0, 1], {
		extrapolateRight: 'clamp',
	});

	return <div style={{opacity}}>{title}</div>;
};
