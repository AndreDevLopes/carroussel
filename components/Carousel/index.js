import React,{useEffect, useState} from 'react';
import {SafeAreaView , Text , StyleSheet , Dimensions , FlatList , Animated , View} from 'react-native';
import CarouselItems from '../CarouselItems';


const { width, height} = Dimensions.get('window');

let flatList

function infiniteScroll(dataList){
    const numberOfData = dataList.length

    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else{
            scrollValue = 0
            scrolled = 0
        }
       
        this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 3000)
}

// import { Container } from './styles';

const Carousel = ({data}) => {
         const scrollX = new Animated.Value(0);  
         let position = Animated.divide(scrollX, width);
         const [dataList, setDataList] = useState(data)

         useEffect(()=> {
             setDataList(data)
             infiniteScroll(dataList)
         })

        const renderItem = (data)=>(
            
            <CarouselItems item={data}/>
        );
        return(
            <SafeAreaView>
                <FlatList
                    data={data}
                    ref = {(flatList) => {this.flatList = flatList}}
                    renderItem={renderItem}
                    keyExtractor={(item, index)=> 'key' + index}
                    horizontal
                    pagingEnabled
                    scrollEnabled
                    snapToAlignment = 'center'
                    scrollEventThrottle = {16}
                    decelerationRate={'fast'}
                    showsHorizontalScrollIndicator = {false}
                    onScroll = {Animated.event(
                        [{nativeEvent: {contentOffset:{x: scrollX}}}]
                        
                    )}


                />
                <View style={styles.dotView}>
                    {data.map((_,i)=>{
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i , i + 1],
                            outputRange: [0.3, 1 , 0.3],
                            extrapolate: 'clamp'
                        })
                        return(
                            <Animated.View
                                key={i}
                                style={{ opacity, height: 10, width: 10, backgroundColor: '#595959', margin: 8, borderRadius: 5 }}
                            />
                        )
                    })}
                </View>
            </SafeAreaView>
        );
  
}



export default Carousel;

const styles = StyleSheet.create({
    dotView: { flexDirection: 'row', justifyContent: 'center' }
})