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

	const [timer,setTimer] = useState(duration);
	const [hours, setHours] = useState(type === "home" ? Math.floor(duration / 60 / 60) : null);
	const [newMin,setNewMin] = useState(type === "home" ? 
		Math.floor((duration / 60)  - (hours * 60)) : 
		Math.floor(duration / 60));
	const [sec,setSec] = useState(type === "home" ? timer -  newMin * 60 + hours * 60 * 60 : timer - newMin * 60);
	const [min, setMin] = useState(type === "home" ? 
		Math.floor((duration / 60)  - (hours * 60)) : 
		Math.floor(duration / 60));
	const [fill,setFill] = useState(100);

	useEffect(() => {
		setTimer(duration);
		setHours(type === "home" ? Math.floor(duration / 60 / 60) : null);
		setNewMin(type === "home" ? 
			Math.floor((duration / 60) - (hours * 60)) : 
			Math.floor(duration / 60));
		setSec(type === "home" ? timer -  (newMin * 60 + hours * 60 * 60) : timer - newMin * 60);
		setMin(type === "home" ? 
			Math.floor((duration / 60)  - (hours * 60)) : 
			Math.floor(duration / 60));
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
			const useNewMin = Math.floor(newTime / 60);
			setMin(useNewMin);
			setSec(newTime - useNewMin * 60);
			setTimer(newTime);
			const progress = 100 - ((duration - newTime ) * 100 / duration);
			setFill(progress);
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
				{
					() => (
						<View>
							{
								type === "home" ?  <Text style={styles.infoText}>{ text }</Text> : null
							}
							<Text style={type === "meditation" ? styles.textColor :  styles.textColor2}>
								{type === "home" ? hours + " : " : null}{ min } : { sec < 10 ? "0" + sec : sec}
							</Text>
						</View>
					)
				}
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
