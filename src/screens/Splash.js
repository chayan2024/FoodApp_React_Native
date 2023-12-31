import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import COLORS from '../utils/colors';

const Splash = () => {

  const navigation = useNavigation();
  
  useEffect(()=>{

    const fetchData=async()=>{

        setTimeout(() => {
          navigation.navigate('OnBoarding');
        }, 200);
    }
    fetchData();
},[]);

  return (
    <View style={styles.container}>
      <View style={styles.topTextContainer}>
        <Text style={{ color: COLORS.black ,fontWeight:'600',fontSize:22}}>FOOD HUB</Text>
        <Image
          style={styles.image}
          source={require('../assets/healthy-food.png')}
        />
      </View>
      <View style={styles.bottomEllipse}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 200, 
    padding:20,
    height: 200,
    resizeMode: 'contain', 
    borderRadius:20,
    marginTop:30
  },
  topTextContainer: {
    position: 'absolute',
    top: '20%', // Position at the center of the top
    left: 0,
    padding:20,
    fontSize:30,
    right: 0,
    alignItems: 'center', // Center the text horizontally
  },
  bottomEllipse: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '40%', // 30% of the screen height
    backgroundColor: '#050B2B', // Color of the bottom ellipse
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default Splash;
