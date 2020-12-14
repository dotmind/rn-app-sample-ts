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
import { WINDOW_WIDTH } from 'contants/Device';
import { Colors } from 'contants/Style';

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
  itemLabel: {
    fontSize: 16,
    color: Colors.secondary
  },
  itemWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 80,
    aspectRatio: 1,
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

const items = [
  { color: "transparent", img: 'https://picsum.photos/100?random' },
  { color: "#FFFFFF", img: 'https://picsum.photos/100?random' },
  { color: "transparent", img: 'https://picsum.photos/100?random' },
  { color: "#FFFFFF", img: 'https://picsum.photos/100?random' },
  { color: "transparent", img: 'https://picsum.photos/100?random' },  
];

const ScrollViewDemo = ({ navigation }: Props) => {
  const _handleOnPress = (itemIndex: number) => () => {
    alert(itemIndex)
  }

  const _renderItems = () => {
    return items.map((item, index) => {
      const itemIndex = index + 1;
      return (
        <TouchableOpacity
          key={index}
          activeOpacity={0.9}
          style={[styles.item,{ backgroundColor: item.color }]}
          onPress={_handleOnPress(index)}>
          <View style={styles.itemWrapper}>
            <Text style={styles.itemLabel}>Item numéro: {itemIndex}</Text>
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
