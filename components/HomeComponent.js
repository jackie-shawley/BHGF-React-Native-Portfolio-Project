import React, { Component, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList  } from 'react-native';
import { HomePhotos } from '../shared/HomePhotosData';
import {  Card, Divider, ListItem } from 'react-native-elements';
import * as Font from 'expo-font';
import { interpolateNode } from 'react-native-reanimated';


                

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: HomePhotos,
            //loaded: false
        };
    }

    // _loadFontsAsync = async () => {
    //     let isLoaded = await Font.loadAsync({
    //         Rokkitt: require('../assets/fonts/Rokkitt-Regular.ttf'),
    //         Rokkitt_Thin: require('../assets/fonts/Rokkitt-Thin.ttf'),
    //         Rochester: require('../assets/fonts/Rochester-Regular.ttf')
    //     });
    //     this.setState({ loaded: isLoaded });
    // };
   
       
    render() {

        const RenderPhoto = ({ item }) => {
            //const [open, setOpen] = useState(false);        
            return( 
                <View>
                    {/* <Image 
                        style={styles.image} 
                        source={item.image}
                    /> */}
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Text style={styles.itemText}>{item.description}</Text>
                </View>
                  
                   
               
            )
        }
    
        // <Card style={styles.card}>
        //                     <Card.Image source={item.image} />
        //                     <Card.Title>{item.name}</Card.Title>
        //                     <Card.Divider />
        //                     <Card.FeaturedSubtitle>{item.description}</Card.FeaturedSubtitle>
        //                 </Card>

        return(
            <View>
                <View>
                    <Image 
                        style={styles.image}
                        source={require('../assets/images/logos-etc/Be-Happily-Gluten-Free-Logo-dark-flower-transparent.png')} />
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
                    <View>
                      <Text style={styles.text}>
                          Come on in for a sweet treat and a cup of our delicous Fair Trade house-blended coffee or loose-leaf tea. Want something special for your party, shower or plain old Tuesday? We can do that too? Give us a call or stop in to order muffins, bread, custom cakes, cookies, you name it! 
                      </Text>
                    </View>
                <View>
                    <FlatList
                        data={this.state.photos}
                        renderItem={RenderPhoto}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        // width: '100%',
        // height: '100%',
        //alignItems: 'center',
        backgroundColor: 'rgba(26, 245, 195, .25)',
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
        alignSelf: 'center',
        backgroundColor: 'rgba(26, 245, 195, .25)',
        flexDirection: 'row'
    },
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,        
    },
    image: {
        height: '40%',
        justifyContent: 'center',
        flexDirection: 'row', 
        resizeMode: 'center',
        shadowColor: 'rgba(0,0,0,.5)',
    },
    text: {
        fontFamily: 'Rokkitt',
        fontSize: 20,
        textAlign: 'center',
        alignSelf: 'flex-start'
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
        fontSize: 25,
        textAlign: 'center',
    },
    itemTitle: {
        fontFamily: 'Rochester',
        color: 'black',
        textShadowColor: '#1af5c3',
        textShadowOffset: {width: 2, height: 2},
        fontSize: 15,
        textAlign: 'center',
    },
    itemText: {
        fontFamily: 'Rokkitt',
        fontSize: 18,
    }
});

//export default Home;