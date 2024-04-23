import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import color from '../constants/color';

export const ImgButton = ({
  name, // The name of the Ionicons icon to be displayed
  label, //The label/text to be displayed alongside the icon
  fun = () => { //The function to be executed when the button is pressed
    
  },
  style, 
  
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        { opacity: pressed ? 0.5 : 1 },// Adjusting opacity when pressed
        styles.container,
        style, // 
      ]}
      onPress={fun}
    >
      <View style={styles.innerContainer}>
        <Ionicons name={name}  color="white" size={20}/>
        <Text style={styles.text}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    // borderColor: "white",
    borderRadius: 10,
    backgroundColor: color.buttonbackgroundColor,
    flexDirection: "row",
    justifyContent:"space-evenly" ,
    alignItems: "center",
    // width: "90%",
    height: 40,
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent:"space-evenly" ,
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
