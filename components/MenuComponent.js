import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MENU } from '../shared/MenuData';
import { SectionList, View, Text, StyleSheet } from 'react-native';
import { Divider } from 'react-native-elements';


export default class Menu extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            menu: MENU
        }
    }

    render() {
        const Item = ({ name, description }) => (
            <View  style={styles.itemContainer}>
                <Text style={styles.menuItem}>{name}</Text>
                <Text style={styles.menuText}>{description}</Text>
            </View>
        )

        const renderItem = ({item}) => <Item title={item.name} description={item.description} name={item.name}/>;

        const flatListItemSeparator = () => {
            return(
                <View style={styles.listItemSeparatorStyle} />
            );
        };

        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.topcontainer}>
                    {/* <Text style={styles.headerText}>Menu</Text> */}
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
                <View style={{marginTop: 13}}>
                    <SectionList
                        sections={this.state.menu}
                        keyExtractor={(item) => item.id}
                        renderItem={renderItem}
                        renderSectionHeader={({ section: { title } }) => (
                            <View style={styles.itemContainer}>
                                <Text style={styles.sectionHeading}>{title}</Text>
                            </View>
                        )}
                        ItemSeparatorComponent={flatListItemSeparator}
                    />
                    </View>
            </SafeAreaView>
        );
    }

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
    topcontainer:{
        flex: 2,
        backgroundColor: 'rgba(26, 245, 195, .2)',
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    itemContainer: {
        backgroundColor: 'rgba(26, 245, 195, .2)',
    },
    sectionHeading: {
        fontFamily: 'Rochester',
        fontSize: 25,
        alignSelf: 'center',
        textDecorationLine: 'underline',
    },
    menuItem: {
        fontFamily: 'Rokkitt',
        fontSize: 18,
        marginLeft: 3
    },
    menuText: {
        fontFamily: 'Rokkitt',
        fontSize: 15,
        paddingLeft: 12,
        paddingRight: 8,
        paddingTop: 2,
        paddingBottom: 4
    },
    listItemSeparatorStyle: {
        height: 0.5,
        width: '100%',
        backgroundColor: '#404040',
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
    },
    headerText: {
        fontFamily: 'Rochester',
        color: 'black',
        textShadowColor: '#1af5c3',
        textShadowOffset: {width: 2, height: 2},
        fontSize: 40,
        marginTop: 10
    },
});