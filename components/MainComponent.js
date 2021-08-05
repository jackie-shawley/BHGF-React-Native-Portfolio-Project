// import React, { Component } from 'react';
// import { View, Text } from 'react-native';
// import { AccordionData } from '../shared/AccordionData';
// import TopBarNavigator from '../navigators/TopBarNavigator';
// import { SafeAreaProvider } from 'react-native-safe-area-context';



// class Main extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             ingredients: AccordionData,
//             selectedIngredient: null,
//             selectedProduct: null
//         }
//     }

//     onIngredientSelect(ingredientId) {
//         this.setState({selectedIngredient: ingredientId})
//     }

//     onProductSelect(productId) {
//         this.setState({selectedProduct: productId})
//     }

//     render() {
//        return(
//             <SafeAreaProvider>
//                 <TopBarNavigator />
//             </SafeAreaProvider>
//        )
//     }
// }

// export default Main; 