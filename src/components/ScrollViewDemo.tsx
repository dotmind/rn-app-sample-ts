import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigators/StackNavigator';
import { WINDOW_WIDTH } from 'src/contants/Device';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  item: {
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100, 
    height: 100,
    marginLeft: 20,
  },
});

type NavigationProp = StackNavigationProp<
  RootStackParamList,
  'ScrollViewDemo'
>;

type Props = {
  navigation: NavigationProp;
};

const getRandomColor = () => '#' + (((1 << 24) * Math.random()) | 0).toString(16);

const items = [
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },
  { color: getRandomColor(), img: 'https://picsum.photos/100?random' },  
];

const ScrollViewDemo = ({ navigation }: Props) => {
  const _renderItems = () => {
    return items.map((item, index) => {
      const itemIndex = index + 1;
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={[styles.item,{ backgroundColor: item.color }]}
          onPress={() => alert(itemIndex)}>
          <View style={styles.itemWrapper}>
            <Text>Item numéro: {itemIndex}</Text>
            <Image 
              style={styles.img}
              source={{ uri: item.img }} />
          </View>
        </TouchableOpacity>
      )
    })
  }

  return (
    <ScrollView style={styles.container}>
      {_renderItems()}
    </ScrollView>
  );
}

export default ScrollViewDemo;
