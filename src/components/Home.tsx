import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigators/StackNavigator';
import CustomButton from 'components/fragments/CustomButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: ProfileScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const _handleNavigate = () => {
    navigation.navigate('ScrollViewDemo')
  }
  return (
    <View 
      style={styles.container}>
      <CustomButton
        title={'Scroll view demo'}
        onPress={_handleNavigate} />
    </View>
  )
}

export default Home;
