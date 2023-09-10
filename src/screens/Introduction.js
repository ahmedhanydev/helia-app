import {
    View, Text,
    Image,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    FlatList
} from 'react-native'
import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../theme/color'
import themeContext from '../theme/themeContex'
import style from '../theme/style'
import Slides from './Slides';
import IntroItem from './IntroItem';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Introduction() {
    const navigation = useNavigation();
    const theme = useContext(themeContext);
    const ref = React.useRef(null);
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    const Footer = () => {
        return <View style={{ paddingHorizontal: 20 ,}}>
            <View style={{
                flexDirection: 'row',alignSelf:'center'
            }}>
                {Slides.map((_, index) =>
                (
                    <View key={index}
                        style={[style.indicator, currentSlideIndex === index && {
                            borderColor: Colors.primary,
                            borderWidth: 1,
                            paddingHorizontal: 15,
                            borderRadius: 10,
                            backgroundColor: Colors.primary,
                            // alignItems:'center'
                        },]}
                    />
                     ))}
            </View>
            <View>
                {currentSlideIndex==0?(
                    <View style={{ paddingVertical: 20 }}>
                            <TouchableOpacity style=
                                {[style.btn,
                                {
                                    // width: width / 2.5,
                                    alignItems: 'center',
                                    backgroundColor: Colors.primary
                                }]}
                                onPress={goNextSlide}
                            >
                                <Text style={[style.btntxt]}>Next</Text>
                            </TouchableOpacity>
                            <View style={{paddingTop:10}}></View>
                            <TouchableOpacity style=
                                {[style.btn,
                                {
                                    // width: width / 2.5,
                                    alignItems: 'center',
                                    backgroundColor: theme.btn,
                                   
                                }]}
                                onPress={()=>navigation.navigate('Letsin')}
                            >
                                <Text style={[style.btntxt, { color:theme.skip }]}>Skip</Text>
                            </TouchableOpacity>
                    </View>
                        
                ):currentSlideIndex==1?(
                    <View style={{ paddingVertical: 20 }}>
                            <TouchableOpacity style=
                                {[style.btn,
                                {
                                    // width: width / 2.5,
                                    alignItems: 'center',
                                    backgroundColor: Colors.primary
                                }]}
                                onPress={goNextSlide}
                            >
                                <Text style={[style.btntxt]}>Next</Text>
                            </TouchableOpacity>
                            <View style={{paddingTop:10}}></View>
                            <TouchableOpacity style=
                                {[style.btn,
                                {
                                    // width: width / 2.5,
                                    alignItems: 'center',
                                    backgroundColor: theme.btn
                                }]}
                                onPress={()=>navigation.navigate('Letsin')}
                            >
                                <Text style={[style.btntxt, { color: theme.skip, }]}>Skip</Text>
                            </TouchableOpacity>
                    </View>
                ):
                <View style={{ paddingVertical: 20 }}>
                            <TouchableOpacity style=
                                {[style.btn,
                                {
                                    // width: width / 2.5,
                                    alignItems: 'center',
                                    backgroundColor: Colors.primary
                                }]}
                                onPress={()=>navigation.navigate('Letsin')}
                            >
                                <Text style={[style.btntxt]}>Next</Text>
                            </TouchableOpacity>
                            <View style={{paddingTop:10}}></View>
                            <TouchableOpacity style=
                                {[style.btn,
                                {
                                    // width: width / 2.5,
                                    alignItems: 'center',
                                    backgroundColor: theme.btn
                                }]}
                                onPress={()=>navigation.navigate('Letsin')}
                            >
                                <Text style={[style.btntxt, { color: theme.skip, }]}>Skip</Text>
                            </TouchableOpacity>
                    </View>
                }
            </View>
        </View>
    }

    const updateCurrentSlideIndex = (e) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != Slides.length) {
            const offset = nextSlideIndex * width;
            ref?.current?.scrollToOffset({ offset });
            setCurrentSlideIndex(nextSlideIndex);
        }

    };
    return (
        <SafeAreaView style={[style.area]}>
            <FlatList data={Slides}
                ref={ref}
                renderItem={({ item }) => <IntroItem item={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onMomentumScrollEnd={updateCurrentSlideIndex}
            />
            <Footer />
        </SafeAreaView>
    )
}