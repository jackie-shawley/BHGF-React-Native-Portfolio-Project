
import React from 'react';
import { View, Image, StyleSheet, Text  } from 'react-native';
import { Card } from 'react-native-elements';
import { useFonts } from '@expo-google-fonts/rokkitt';



export default function AboutUs() {

    const [loaded] = useFonts({
        Rokkitt: require('../assets/fonts/Rokkitt-Regular.ttf')
    });

    if(!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Card
                style={styles.image}
                image={require('../assets/images/mom-and-jackie-for-website-bigger.png')}
            >
                <Text style={styles.caption}>Luanne and Jackie at their favorite place...the beach!!</Text>
            </Card>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: 'rgba(26, 245, 195, .25)',
    },
    image: {
        height: '40%',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        resizeMode: 'center',
        shadowColor: 'rgba(0,0,0,.5)',
        borderStyle: 'solid',
        borderWidth: 1,     
    },
    caption: {
        fontFamily: 'Rokkitt',
        color: 'rgba(0,0,0,1)',
        fontSize: 10,

        
    },
});