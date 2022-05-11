import {
	Img,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {ColorBars} from './ColorBars';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';
import {Title} from './HelloWorld/Title';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	return (
		<div style={{flex: 1, backgroundColor: 'black'}}>
			<ColorBars />
			<Sequence from={5 * 3}>
				<Img
					style={{
						position: 'absolute',
						bottom: '20px',
						width: '200px',
						height: '200px',
						left: '50%',
						marginLeft: '-100px',
					}}
					src={require('./smile.jpg')}
				/>
			</Sequence>
			<Sequence from={8 * 3}>
				<div
					style={{
						fontSize: 156,
						fontWeight: 800,
						textAlign: 'center',
						position: 'absolute',
						top: 280,
						width: '100%',
						color: 'white',
					}}
				>
					Hey Shone
				</div>
			</Sequence>
		</div>
	);
};
