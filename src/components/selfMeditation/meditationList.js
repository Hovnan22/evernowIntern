import React, {
	useRef, 
	useState,
	useCallback,
} from "react";
import {
	View,
	Easing,
	FlatList,
	Animated,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import { AppIcon } from "../ui";

import MeditationItem from "./meditationItem";
import { meditation } from "../../constants/meditation";

const{ height, width } = Dimensions.get("screen");

const MeditationLists = () => {

	const largList = 5;
	const mediumList = 3;
	const smoleList = 1;
	const [meditationHeight, setmeditationheight] = useState(0);
	const [flatlistHeight, setFlatlistheight] = useState(new Animated.Value(0));
	const [prevListCount, setPrevListCount] = useState(mediumList);
	const [activeMeditationIndex, setActiveMeditationIndex] = useState();
	const [showAllList, setShowAlllist] = useState(false);
	const animatedHeigh = new Animated.Value(0);

	const flatListRef = useRef();
	const getLayouts = (event) => {
		if (meditationHeight >= event.nativeEvent.layout.height && flatlistHeight === meditationHeight * prevListCount) {
			return false;
		}
		setmeditationheight(event.nativeEvent.layout.height);
		setFlatlistheight(event.nativeEvent.layout.height * prevListCount);
	};

	const pressToMeditation = useCallback((index) => {
		let prevLSize ;

		if(prevListCount !== smoleList) {
			setShowAlllist(false);
			prevLSize = smoleList;
		}else {
			setShowAlllist(true);
			prevLSize = largList;
		}
		setPrevListCount(prevLSize);
		const newHeight = prevLSize * meditationHeight;
		setFlatlistheight(newHeight);
		scrollToItem(index);
	},[flatlistHeight]);

	const scrollToItem = (index) => {
		setActiveMeditationIndex(index);
		flatListRef && flatListRef.current.scrollToIndex({ animated: true, index: index });
	};

	const listPresshandler = () => {
		let screenSize ;
		if(typeof activeMeditationIndex === "number") {
			screenSize = smoleList;
		} else {
			screenSize = mediumList;
		}

		const newHeight = showAllList ?  meditationHeight * screenSize : meditationHeight * largList;
		if(showAllList) {
			Animated.timing(
				animatedHeigh,
				{
					toValue: 1,
					duration: 500,
					easing: Easing.ease,
					useNativeDriver: false,
				}
			).start(() => {
				setPrevListCount(screenSize);
				setFlatlistheight(newHeight);
				setShowAlllist(!showAllList);
			});
		}else {
			Animated.timing(
				animatedHeigh,
				{
					toValue: 1,
					duration: 500,
					easing: Easing.ease,
					useNativeDriver: false,
				}
			).start(() => {
				setPrevListCount(largList);
				setFlatlistheight(newHeight);
				setShowAlllist(!showAllList);
			});
		}
		setFlatlistheight(animatedHeigh.interpolate({
			inputRange: [0, 1],
			outputRange: [flatlistHeight, newHeight],
			easing: Easing.ease,
			extrapolate: "clamp",
			useNativeDriver: false,
		}))
	};

	return (
		<View style={[styles.meditationLists, prevListCount === largList ? styles.largList: null]} >
			{
				(prevListCount === largList) && (
					<LinearGradient 
						start={{x: 0, y: 1}} end={{x: 1, y: 1}}
						colors={["rgba(0, 129, 218, 0.5)" , "rgba(0, 129, 218, 0)", ]} 
						style={styles.linearGradient}/>
				)
			}
			<Animated.View style={{ height:  flatlistHeight  }}>
				<FlatList
					contentContainerStyle={styles.flatListItems}
					ref={flatListRef}
					data={meditation}
					keyExtractor={(_, index) => index.toString()}
					showsVerticalScrollIndicator={false}
					showsHorizontalScrollIndicator={false}
					scrollEnabled={false}
					renderItem={({item , index}) => (
						<MeditationItem 
							item={item} 
							index={index}
							getLayouts={getLayouts} 
							pressToMeditation={pressToMeditation}
						/>
					)}
				/>
			</Animated.View>
			<TouchableOpacity 
				style={styles.showMore}
				onPress={listPresshandler}
			>
				<AppIcon
					style={showAllList && styles.rotate}
					icon="arrowDown"
					width={25}
					height={20}
				/>
			</TouchableOpacity>
		</View>
	)
};

const styles = StyleSheet.create({
	meditationLists: {
		zIndex: 1,
		width: "100%",
		position: "absolute",
		left: 0,
		justifyContent: "center",
		height,
		marginLeft: 20,
	},
	rotate: {
		transform: [{ rotate: "180deg" }],
	},
	largList: {
		zIndex: 2
	},
	flatListItems: {
		flexGrow: 1, 
		justifyContent: "center",
	},
	showMore: {
		marginTop: 40
	},
	linearGradient: {
		paddingLeft: 15,
		paddingRight: 15,
		borderRadius: 5,
		width,
		height,
		position: "absolute",
		top: 0,
		textAlign: "center",
		justifyContent: "center",
		left: -20
	},
});

export default MeditationLists;
