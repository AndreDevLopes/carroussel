import React from 'react';
import { View , Text } from 'react-native';
import Carousel from '../components/Carousel';
import  Data  from '../data';
// import { Container } from './styles';

const Home = ({navigation}) => {
  return (<View>
      <Carousel data={Data}/>
  </View>);
}

export default Home;