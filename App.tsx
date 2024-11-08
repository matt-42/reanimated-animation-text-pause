import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text as DefaultText, TextProps, View, useAnimatedValue, Animated as ReactAnimated } from 'react-native';
import  Animated, { useAnimatedStyle, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

export const Text = React.forwardRef<DefaultText, TextProps>((props, ref) => {
  const { style,  ...otherProps } = props;
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // return <DefaultText ref={ref} {...otherProps} />;
  return <DefaultText ref={ref} style={[{ color:"black",  fontFamily: 'sans', fontSize: 30 }, style]} {...otherProps} />;
})


export function ChangingText() {
  
  const [text, setText] = useState("0")
  useEffect(() => {
    const loop = setInterval(() => setText(Date.now().toFixed(0)), 200)  
    return () => {
      clearInterval(loop);
    }
  }, [setText])
  
  return <View style={{position: "absolute", backgroundColor: "#0005", height: 60, width: "100%"}}>
    <Text>{text}</Text>
  </View>

}


// export default function App() {
//   const fadeAnim = useAnimatedValue(0);
//   ReactAnimated.loop(ReactAnimated.sequence([
//     ReactAnimated.timing(fadeAnim, {toValue: 200, duration: 2000, useNativeDriver: false}),
//     ReactAnimated.timing(fadeAnim, {toValue: 0, duration: 2000, useNativeDriver: false})
//   ])).start();

//   return (
//     <View style={styles.container}>
//       <ReactAnimated.View style={[{position: "absolute", top: fadeAnim 
//       }]}>
//       {Array(50).fill(0).map((i, idx) => <Text key={idx}>hello {idx}</Text>
//       )}
//       </ReactAnimated.View>
//       <ChangingText/>
//     </View>
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>
      <Animated.View style={[{position: "absolute"}, useAnimatedStyle(() => ({
        top: withRepeat(withSequence(withTiming(0, {duration: 2000}), withTiming(200, {duration: 2000}), withTiming(0, {duration: 2000})), -1)
      }))]}>
      {/* {Array(50).fill(0).map((i, idx) => <Text key={idx}>hello {idx}</Text>
      )} */}
      {Array(50).fill(0).map((i, idx) => <View><Text key={idx}>hello {idx}</Text></View>
      )}
      </Animated.View>
      <ChangingText/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
