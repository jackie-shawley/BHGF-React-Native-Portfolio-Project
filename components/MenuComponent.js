import React, { Component } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MENU } from '../shared/MenuData';
import { SectionList, View, Text, StyleSheet } from 'react-native';


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
            <SafeAreaView>
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
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(26, 245, 195, .2)',
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
    }
});