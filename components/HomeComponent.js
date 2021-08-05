import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { HomePhotos } from '../shared/HomePhotosData';
import { Divider } from 'react-native-elements';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homePhotos: HomePhotos
        }
    }

    render() {

        return(
            <View>
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
        )
    }
}

const styles = StyleSheet.create({
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
    }
});

export default Home;