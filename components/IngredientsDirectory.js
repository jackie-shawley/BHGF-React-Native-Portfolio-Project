import React, { Component, useState, useRef } from 'react';
import { FlatList, View, Text, StyleSheet, StatusBar, TouchableOpacity, Alert, Modal, ScrollView, Platform, UIManager, LayoutAnimation} from 'react-native';
import { AccordionData } from '../shared/AccordionData';
import { Transitioning, Transition } from 'react-native-reanimated';
import { Divider, Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/material-top-tabs'


class IngredientsDirectory extends Component {
  constructor(props) {
      super(props);
      this.state = {
          ingredients: AccordionData,
          
      };

      
      
      if(Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
   }

 

 
  render() {
    return (
      <RenderAccordion ingredients={this.state.ingredients} navigation={this.props.navigation} />
    );
  }
}


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
    const ref = useRef();
    const [selectedColor, setSelectedColor] = React.useState('');
    const [isModalVisible, setIsModalVisible] = React.useState(false)
    const {ingredients, navigation} = props;

    

    React.useEffect(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        setIsModalVisible(true);
      });
      return unsubscribe;
    }, [navigation]);
    
     
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
              <View>
                  <Modal
                    transparent={true}
                    visible={isModalVisible}
                    >
                      <View style={{backgroundColor: '#000000aa', flex: 1}}>
                        <View style={{backgroundColor: '#CCFFFF', margin: 30, padding: 10, borderRadius: 10}}>
                          <Text style={styles.modalHeader}>Allergens</Text>
                          <Divider />
                          <Text style={styles.text}>Please be aware that we do use common allergens in our bakery, including Peanuts, Tree Nuts, Eggs and Milk. We take great care when working with our ingredients and preparing your food. We start the day by making baked goods with the least allergens, and work our way up. We have a completely separate area of the kitchen dedicated to preparing recipes that use Peanuts and/or Tree Nuts, and we also have color-coded bowls, baking utensils and pans, and we even have a separate mixer that is used ONLY for items containing Peanuts and Tree Nuts. We understand the severe allergic reactions that some people have to certain allergens and will always work hard to keep you safe. We will always be transparent with our baking practices, as well as our ingredients. Please do not hesitate to ask if you have ANY questions about our food, drinks or our preparation. Happy Eating!
                          </Text>
                          <Button title='Got It!' onPress={() => setIsModalVisible(false)}  />
                        </View>
                      </View>
                    </Modal>
                
              </View>
            </Transitioning.View>
        );
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

    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      backgroundColor: '#000000aa',
      flex: 1
    },
    modalHeader: {
      fontFamily: 'Rochester',
      fontSize: 25,
      textAlign: 'center'
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