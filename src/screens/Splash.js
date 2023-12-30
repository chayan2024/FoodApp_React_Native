import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const Splash = () => {

    return (
        <View style={styles.container}>
            <View style={styles.topTextContainer}>
                <Text style={{ color: 'red', fontSize: 20, fontWeight: '900' }}>
                    Best Place{' '}
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: '900' }}>For The Test</Text>
                </Text>
                <Image
                    style={styles.image}
                    source={require('./src/assets/logo.png')}
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
        height: 200,
        resizeMode: 'contain',
        borderRadius: 20,
        marginTop: 10, 
    },
    topTextContainer: {
        position: 'absolute',
        top: '20%',
        left: 0,
        padding: 20,
        fontSize: 30,
        right: 0,
        alignItems: 'center',
    },
    bottomTextContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        flexWrap: 'wrap',
        fontWeight:'900'
    },
    bottomEllipse: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '45%',
        backgroundColor: '#050B2B',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
});

export default Splash;
