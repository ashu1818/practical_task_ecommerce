import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {styles} from './DetailScreenStyle';
import Images from '../../assets/images/map';

const DetailScreen: React.FC = () => {
  const navigation: any = useNavigation();
  const params: any = useRoute().params;

  const {images, title, price, description}: any = params?.item;
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Image style={styles.icon} source={Images.back} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{'Product Details'}</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.card}>
          <Image source={{uri: images[0]}} style={styles.image} />
          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>Price : ₹{price}</Text>
          </View>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default DetailScreen;
