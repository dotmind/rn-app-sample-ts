import React from 'react'
import { Button, View, StyleSheet } from 'react-native';
import { Colors } from 'src/contants/Style';

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 20,
  },
});

type Props = {
  title: string;
  onPress: () => void;
}

const CustomButton = (props: Props) => (
  <View style={styles.buttonContainer}>
    <Button
      color={Colors.secondary}
      {...props} />
  </View>
);

export default CustomButton
