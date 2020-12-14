import React from 'react'
import { Button, View, StyleSheet } from 'react-native';

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
      color={'#26a69a'}
      {...props} />
  </View>
);

export default CustomButton
