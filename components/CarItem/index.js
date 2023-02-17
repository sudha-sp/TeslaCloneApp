import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {
  const { name, tagLine, image, taglineCTA } = props.car;

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        style={styles.image}
        source={image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>
          {tagLine}
          {' '}
          <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
        </Text>
        
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => console.warn("Custom Order was Pressed!")}
        />

        <StyledButton
          type="secondary"
          content={"Existing Inventory"}
          onPress={() => console.warn("Existing Inventory was Pressed!")}
        />
      </View>
    </View>
  );
};

export default CarItem;
