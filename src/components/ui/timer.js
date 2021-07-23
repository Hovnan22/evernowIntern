import React, { 
	useCallback, 
	useEffect,  
	useState 
} from "react";
import { 
	View, 
	Text, 
	StyleSheet 
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const Timer = ({
	size,
	type,
	text,
	width,
	started,
	duration,
	setStarted,
}) => {
	const [showSec, setShowSec] = useState(true);
	const [timer,setTimer] = useState(duration);
	const [hours, setHours] = useState(Math.floor(duration / 60 / 60));
	const [min, setMin] = useState(Math.floor((duration / 60) - (hours * 60)));
	const [sec,setSec] = useState(duration - (min * 60 + hours * 60 * 60));
	const [fill,setFill] = useState(100);

	useEffect(() => {
		const newHour = Math.floor(duration / 60 / 60);
		const newMin = Math.floor((duration / 60) - (newHour * 60));
		setTimer(duration);
		setHours(newHour);
		setMin(newMin);
		setSec(duration - (newMin * 60 + newHour * 60 *60));
		newHour > 0 ? setShowSec(true) : setShowSec(false);
		if(newHour === 0) {
			setShowSec(false)
		}
	}, [duration])

	useEffect(() => {
		if(started)
			startTimer();
	})

	const startTimer = useCallback(() => {
		if(timer === 0) {
			setStarted(false);
			return false;
		}
		setTimeout(() => {
			const newTime = timer - 1;
			setTimer(newTime);
			const newHour = Math.floor(newTime / 60 / 60);
			const newMin = Math.floor((newTime - (newHour * 60 * 60)) / 60);
			const newSec = (newTime - ((newHour * 60 * 60) + (newMin * 60)));
			setHours(newHour);
			setMin(newMin);
			setSec(newSec);
			const progress = 100 - ((duration - newTime ) * 100 / duration);
			setFill(progress);
			if(newHour === 0) {
				setShowSec(false)
			}
		}, 1000);
	}, [timer]);

	return (
		<View style={type === "meditation" ? styles.container : styles.container2}>
			<AnimatedCircularProgress
				size={size}
				width={width}
				fill={fill}
				tintColor= {type === "meditation" ? "#FFFFFF" : "#0081DA"}
				rotation={0}
				backgroundColor={type === "meditation"? "rgba(255,255,255,0.3)": "rgba(255,255,255,0)"}
			>
				{() => (
					<View>
						{
							type === "home" ?  <Text style={styles.infoText}>{ text }</Text> : null
						}
						<Text style={type === "meditation" ? styles.textColor :  styles.textColor2}>
							{ showSec && hours + ":" }{min < 10 ? "0" + min : min }{ !showSec &&  (":" + ( sec < 10 ? "0" + sec : sec)) }
						</Text>
					</View>
				)}
			</AnimatedCircularProgress>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "rgba(255,255,255,0.3)",
		width: 70,
		borderRadius: 40,
	},
	infoText: {textAlign: "center"},
	container2: {
		width: 205,
		height: 205,
	},
	textColor: {
		color: "#fff",
	},
	textColor2: {
		color: "#000",
		fontSize: 35,
	}
});

export default Timer;
