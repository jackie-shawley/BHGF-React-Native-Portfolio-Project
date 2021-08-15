import React, { Component, useState } from 'react';
import { FlatList, View, Text, StyleSheet, StatusBar, Button, TouchableOpacity, LayoutAnimation, Alert } from 'react-native';
import { AccordionData } from '../shared/AccordionData';
import { List } from 'react-native-paper';
import { Accordion } from 'react-native-paper';
import { Transitioning, Transition } from 'react-native-reanimated';
import Constants from 'expo-constants';
import { UIManager } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaView } from 'react-native-safe-area-context';




const transition = (
    <Transition.Together>
      <Transition.Out
        type="fade"
        durationMs={200}
        // interpolation="easeOut"
      />
      <Transition.Change />
      <Transition.In
        type="fade"
        durationMs={200}
        // interpolation="easeIn"
      />
    </Transition.Together>
  );

  
  
function RenderAccordion(props) {
    const ref = React.useRef();
    const [selectedColor, setSelectedColor] = React.useState('');
    const [selectedItem, setSelectedItem] = React.useState('');
    const {ingredients} = props;

  
        return (
          
            <Transitioning.View
                ref={ref}
                transition={transition}
                style={styles.container}>
                <StatusBar hidden/>
                {ingredients.map(({ bg, color, type, products, id }, index) => {
                return (
                    <TouchableOpacity
                        key={type}
                        activeOpacity={.7}
                        onPress={() => {
                            ref.current.animateNextTransition();
                            // setSelectedItem(products.type === selectedItem ? products.type : null);
                            setSelectedColor(bg === selectedColor ? '' : bg);
                        }}
                        style={styles.cardContainer}>
                        <View
                            style={[styles.card, { backgroundColor: bg }]}>
                            <Text style={[styles.type, { color }]}>{type}</Text>
                            {selectedColor === bg && (
                            <View style={{ marginTop: 10 }}>
                                {products.map(product => (
                                  <TouchableOpacity>
                                    <Text
                                      style={styles.text}
                                      key={id}
                                      onPress={() => 
                                       Alert.alert(
                                         `${product.name}`,
                                         `${product.ingred}`, 
                                       )}>
                                    {product.name}
                                    </Text>
                                  </TouchableOpacity>
                                ))}
                            </View> 
                            )}
                        </View>
                        

                    </TouchableOpacity>
                );
            })}
            </Transitioning.View>
          
        );
}
  

class IngredientsDirectory extends Component {
        constructor(props) {
            super(props);
            this.state = {
                ingredients: AccordionData
            }
        }

    render() {
        return (
            <RenderAccordion ingredients={this.state.ingredients} />
        )
    
    
    }
   }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#ecf0f1',
    },
    cardContainer: {
      flexGrow: 1
    },
    card: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      borderWidth: 5,
      borderColor: 'white',
      borderRadius: 20
      
    },
    type: {
      fontSize: 42,
      fontWeight: '800',
      textTransform: 'uppercase',
      letterSpacing: -2,
      fontFamily: "Rokkitt"
    },
    topic: {
      fontSize: 18,
      textAlign: 'center',
      lineHeight: 18 * 1.5
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Rokkitt'

    }
  });




// const Accordion = (props) => {
//     const [expanded, setExpanded] = useState(true);

//     const handlePress = () => setExpanded(!expanded);

//     const {ingredient} = props;

//     return (
//         <List.Section title='Ingredients'>
//             <List.Accordion
//                 title={ingredient.type}
//             >
//                 <List.Item title={ingredient.name} />
//             </List.Accordion>
//         </List.Section>
//     )
// }

// const RenderAccordion = (props) => {
//     const [expanded, setExpanded] = useState(true);

//     const handlePress = () => setExpanded(!expanded);

//     const {ingredient} = props;

//     return (
//         <View>
//             <Accordion  
//                 title = {ingredient.type}
//                 data = {ingredient.description}
//             />
//         </View>
//     )
// }


// class IngredientsDirectory extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             ingredients: AccordionData,
//             expanded: false
//         }

//         if (Platform.OS === 'android') {
//             UIManager.setLayoutAnimationEnabledExperimental(true);
//         }
//     }

//     render() {
        
//         const ingredient = this.state.ingredients.filter(ingredient => ingredient.id);
//         return(
//             <RenderAccordion ingredient={ingredient} />
//         );
//     }
// }

export default IngredientsDirectory;