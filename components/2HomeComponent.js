import React, { Component } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ScrollView } from 'react-native';
import { HomePhotos } from '../shared/HomePhotosData';
import { Card, Title, Paragraph } from 'react-native-paper';
import { Image, Tile } from 'react-native-elements';





class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: HomePhotos
        }
    }

    render() {
        return(
            <ScrollView style={styles.container}>
                <View >
                    <View style={styles.cardContainer}>
                        <Card elevation={3}>
                            <Card.Cover source={ require('../assets/images/cakes/tiered-blue-cake.jpeg') } />
                            <Card.Content>
                                <Title style={styles.cardTitle}>Custom Cakes For Any Occasion</Title>
                                <Paragraph style={styles.text}>No more missing out on a delicious cake for your birthday! We're happy to design a sheet cake or a layer cake for any occasion.
                                </Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={styles.cardContainer}>
                        <Card elevation={3}>
                            <Card.Cover source={ require('../assets/images/cookies/silly-candy-corns-for-web.jpeg') } />
                            <Card.Content>
                                <Title style={styles.cardTitle}>Cookies Made Just For YOU</Title>
                                <Paragraph style={styles.text}>Silly...pretty...funny...we'll customize your cookies any way you like! Order two weeks ahead to ensure availability, or check our case if you want them today!
                                </Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                    <View style={styles.cardContainer}>
                        <Card elevation={3}>
                            <Card.Cover source={ require('../assets/images/cafe/circle-of-drinks-cropped.png') } />
                            <Card.Content>
                                <Title style={styles.cardTitle}>Organic Fair Trade Coffees and Teas</Title>
                                <Paragraph style={styles.text}>Come in to our cafe and have a choose from our carefully curated selection of organic loose-leaf teas, or try a cup of our shade-grown, fairtrade, locally-roasted coffee. Stay and relax, or take one to go.</Paragraph>
                            </Card.Content>
                        </Card>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(26, 245, 195, .25)',
    },
    text: {
        fontFamily: 'Rokkitt',
        fontSize: 20,
        textAlign: 'center',
        flex: 1
    },
    cardTitle:{
        fontFamily: 'Rochester',
        fontSize: 28,
        flex: 1,
        textAlign: 'center',
        marginTop: 10
    },
    cardContainer: {
        margin: 20,

    }
});

export default Home;