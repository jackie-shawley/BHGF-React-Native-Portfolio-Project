import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { View, Image, StyleSheet, Text } from 'react-native';
import { HomePhotos } from '../shared/HomePhotosData';
import { Card, Title, Paragraph } from 'react-native-paper';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: HomePhotos
        }
    }

    render() {
        return(
            
            <View style={styles.container}>
                <View>
                    <View>
                        <FlatList
                            data={this.state.photos}
                            renderItem={({item}) => 
                                <View style={{flex: 1, padding: 10}}>
                                    <Card>
                                        <Card.Cover source={item.image} />
                                        <Card.Content>
                                            <Title style={styles.cardTitle}>{item.name}</Title>
                                            <Paragraph style={styles.text}>{item.description}</Paragraph>
                                        </Card.Content>
                                    </Card>
                                </View>
                            }

                            keyExtractor={item => item.id.toString()}
                        />
                    </View>
                </View>
            </View>
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
        fontSize: 22,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center'
        
    },
});

export default Home;