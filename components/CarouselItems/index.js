import React from 'react';
import { View , StyleSheet ,Text ,Image ,Dimensions} from 'react-native';

// import { Container } from './styles';

const {width,height} = Dimensions.get('window');

const CarouselItems = ({item}) => {
  const Data = item.item;
  return (
  <View style={styles.cardView}>
      <Image style={styles.image} source={{uri: Data.url}} />
      <View style={styles.TextView}>
         <Text style={styles.itemTitle}>{Data.title}</Text>
         <Text style={styles.itemDescription}>{Data.description}</Text>
      </View>
  </View>
  );
}
const styles = StyleSheet.create({
    cardView:{
      width: width - 20,
      height: height / 3,
      backgroundColor: 'white',
      margin:10,
      borderRadius:10,
      shadowColor:'#000',
      shadowOffset:{width: 0.5,height: 0.5},
      shadowOpacity:0.5,
      shadowRadius:3,
      elevation: 5,

    },
    TextView:{
      position: 'absolute',
      bottom:10,
      margin:10,
      left:5,
    },
    image:{
      width: width - 20 ,
      height: height / 3,
      borderRadius:10,

    },
    itemTitle:{
      color:'white',
      fontSize: 22,
      shadowColor:'#000',
      shadowOffset:{width: 0.8,height: 0.8},
      shadowOpacity:1,
      shadowRadius:3,
      marginBottom:5,
      fontWeight:"bold",
      elevation:5,
    },
    itemDescription:{
      color:'white',
      fontSize:12,
      shadowColor:'#000',
      shadowOffset:{width:0.8,height:0.8},
      shadowOpacity:1,
      shadowRadius:3,
      elevation:5,
    }
})
export default CarouselItems;