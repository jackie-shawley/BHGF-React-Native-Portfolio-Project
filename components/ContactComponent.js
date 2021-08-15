import React from 'react';
import { Component } from 'react';
import { Linking, Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import { Card } from 'react-native-paper';
import * as MailComposer from 'expo-mail-composer';


export default class Contact extends Component {
    constructor(props) {
        super(props);
    }

    sendMail() {
        MailComposer.composeAsync({
            recipients: ['behappilyglutenfree@gmail.com'],
            subject: 'Inquiry',
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Contact Us</Text>
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
                    wrapperStyle={{ margin: 20 }}
                    style={styles.card}
                >
                    <Card.Content>
                        <Image source={require('../assets/images/logos-etc/logo.png')} style={styles.image} />
                        <Text style={styles.text}>708 S Lumina Ave</Text>
                        <Text style={styles.textNoPad}>Wrightsville Beach, NC 28480</Text>
                        <Text style={styles.phone} 
                        onPress={() => {Linking.openURL('tel:(987)867-5309');}}>(987)867-5309</Text>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.sendMail}
                            activeOpacity={.8}
                        >
                            <Text style={styles.btnText}>Send Email</Text>
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
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
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(26, 245, 195, .2)',
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(26, 245, 195)'
    },
    title: {
        padding: 20,
        fontFamily: 'Rochester',
        fontSize: 40,
        textAlign: 'center',
        marginTop: 40
    },
    text: {
        paddingTop: 20,
        fontFamily: 'Rokkitt',
        fontSize: 25,
        alignSelf: 'center'
    },
    textNoPad: {
        fontFamily: 'Rokkitt',
        fontSize: 25,
        alignSelf: 'center'
    },
    phone: {
        fontFamily: 'Rokkitt',
        fontSize: 25,
        alignSelf: 'center',
        color: 'blue',
        textDecorationLine: 'underline'
    },
    button: { 
        backgroundColor: 'white', 
        margin: 40, 
        color: 'black',
        width: 200,
        height: 50,
        borderRadius: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontFamily: 'Rokkitt',
        fontSize: 22,
        alignSelf: 'center'
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
        flexDirection: 'row'
    },
    headerText: {
        fontFamily: 'Rochester',
        color: 'black',
        textShadowColor: '#1af5c3',
        textShadowOffset: {width: 2, height: 2},
        fontSize: 40,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    image: {
        width: 225,
        height: 100,
        resizeMode: 'stretch',
        alignSelf: 'center',
        marginTop: 10
    }
})