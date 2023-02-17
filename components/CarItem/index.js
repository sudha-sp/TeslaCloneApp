import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/images/ModelX.jpeg")}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Modal S</Text>
        <Text style={styles.subTitle}>Starting at $69,420</Text>
      </View>

      <StyledButton 
        type="primary" 
        content={"Custom Order"}
        onPress={() => console.warn("Custom Order was Pressed!")} />
      
      <StyledButton 
        type="secondary" 
        content={"Existing Inventory"}
        onPress={() => console.warn("Existing Inventory was Pressed!")} />

    </View>
  );
};

export default CarItem;
