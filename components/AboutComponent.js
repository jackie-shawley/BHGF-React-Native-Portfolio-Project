import React from 'react';
import { View, Image, StyleSheet  } from 'react-native';


export default function AboutUs(props) {
    return (
        <View style={styles.container}>
            <Image 
                style={StyleSheet.image}
                source={require('assets/images/Luanne and Jackie.png')}
            />

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        alignSelf: 'center',
        justifyContent: 'space-around',
    },
})