
import React from 'react';
import { View, Image, StyleSheet, Text  } from 'react-native';
import { Card, Divider } from 'react-native-elements';
import { useFonts } from '@expo-google-fonts/rokkitt';



export default function AboutUs() {

    const [loaded] = useFonts({
        Rokkitt: require('../assets/fonts/Rokkitt-Regular.ttf'),
        Rochester: require('../assets/fonts/Rochester-Regular.ttf')
    });

    if(!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>About Us</Text>
            <View style={styles.lineContainer}>
                <Divider style={styles.dividerBlack} />
                <Divider style={styles.dividerAqua} />
                <Divider style={styles.dividerBlack} />
                <Divider style={styles.dividerAqua} />
                <Divider style={styles.dividerBlack} />
                <Divider style={styles.dividerAqua} />
                <Divider style={styles.dividerBlack} />
                <Divider style={styles.dividerAqua} />
                <Divider style={styles.dividerBlack} />
                <Divider style={styles.dividerAqua} />
                <Divider style={styles.dividerBlack} />
                <Divider style={styles.dividerAqua} />
                <Divider style={styles.dividerBlack} />
                <Divider style={styles.dividerAqua} />
                <Divider style={styles.dividerBlack} />
            </View>           
            <Card
                style={styles.image}
                image={require('../assets/images/mom-and-jackie-for-website-bigger.png')}
            >
                <Text style={styles.caption}>Luanne and Jackie at their favorite place...the beach!!</Text>
            </Card>
            <View style={styles.textContainer}>
                <Text styles={styles.text}>
                Luanne and Jackie are a mother-daughter team who got tired of eating lousy gluten-free food. Just like you, probably. Jackie brought her love of web design, her business sense and her creative hand to the partnership, and Luanne brought the most important thing - unparalleled baking skills! No one can develop a recipe like her (true story!). They wanted to offer a place for people with dietary restrictions to come and enjoy, and they knew they would do it without compromising quality and taste. Now, people from far and wide can enjoy a luxurious cafe breakfast (or lunch or afternoon snack!) while they're on vacation, and they can order their favorites to be shipped directly to their home. Locals can enjoy birthday cakes and wedding cakes that are even better than their gluten-filled (no thank you!) counterparts. It is important to Lu and Jackie that all guests feel comforable, safe eating their food, and totally and completely <Text style={styles.span}>spoiled.</Text>
                </Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(26, 245, 195, .25)',
    },
    image: {
        height: '40%',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        resizeMode: 'center',
        shadowColor: 'rgba(0,0,0,.5)',
    },
    caption: {
        fontFamily: 'Rokkitt',
        color: 'rgba(0,0,0,1)',
        fontSize: 12,
    },
    text: {
        fontFamily: 'Rokkitt',
        fontSize: 20,
        textAlign: 'center'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    headerText: {
        fontFamily: 'Rochester',
        color: 'black',
        textShadowColor: '#1af5c3',
        textShadowOffset: {width: 2, height: 2},
        fontSize: 40,
    },
    span: {
        fontFamily: 'Rochester',
        color: 'black',
        textShadowColor: '#1af5c3',
        textShadowOffset: {width: 2, height: 2},
        fontSize: 20,
    },
    dividerBlack: {
        flexDirection: 'row',
        flex:1,
        margin: 0,
        padding: 2,
        backgroundColor: 'black',
        width: '85%',
        height: 1,  
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: .5,
        borderBottomColor: 'black',
        borderBottomWidth: .5,
    },
    dividerAqua: {
        flexDirection: 'row',
        flex: 1.5,
        margin: 0,
        padding: 2,
        backgroundColor: '#1af5c3',
        width: '85%',
        height: 1,
        alignSelf: 'center',
        borderColor: 'black',
        borderWidth: .5,
        borderBottomColor: 'black',
        borderBottomWidth: .5,
    },
    lineContainer: {
        justifyContent: 'center',
        backgroundColor: 'rgba(26, 245, 195, .25)',
        marginTop: 10,
        flexDirection: 'row'
    }
});