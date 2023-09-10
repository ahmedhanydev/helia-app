import { View, Text ,Dimensions,SafeAreaView, ImageBackground,TextInput,FlatList, StatusBar,TouchableOpacity,Image,ScrollView} from 'react-native'
import React,{useState,useContext} from 'react'
import theme from '../theme/theme';
import themeContext from '../theme/themeContex';
import style from '../theme/style';
import { Colors } from '../theme/color';
import { useNavigation } from '@react-navigation/native';
import { AppBar} from '@react-native-material/core';
// import  Icon  from 'react-native-vector-icons/Ionicons';

import { Ionicons } from '@expo/vector-icons'; 


const width =Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function SearchFilter() {

    const theme = useContext(themeContext);
    const navigation=useNavigation();
    const [like, setLike] = useState(false);
    const [like1, setLike1] = useState(false);
    const [like2, setLike2] = useState(false);
    const [like3, setLike3] = useState(false);
    const categories =[ 'All Hotel','Recommended','Popular', 'Trending', 'Nearby'];
    const [categoryIndex, setcategoryIndex] = useState(0)

    const Categorylist=()=>{
        return( <View style={style.categorycontainer}>
          {categories.map((item,index)=>(
            <TouchableOpacity key={index} 
              activeOpacity={0.8}
              onPress={()=>setcategoryIndex(index)}>
              <Text 
               key={index} 
               style={[
               style.categoryText ,
               categoryIndex==index && style.categoryTextSelected]}>
              {item}
            </Text>
            </TouchableOpacity>
            
          ))}
        </View>
        );
      };

  return (
    <SafeAreaView style={[style.area,{backgroundColor:theme.bg,marginTop:20}]}>
        <View style={[style.main,{backgroundColor:theme.bg,}]}>
        <AppBar 
            color={theme.bg}
            elevation={0}
            leading={ <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
            <Ionicons name="arrow-back"  
            // style={{backgroundColor:Colors.secondary,}}  
            color={theme.txt} size={30}
            />
            </TouchableOpacity>
        }/>
            <View style={[style.inputContainer,{backgroundColor:theme.input,marginTop:10}]}>
            <Ionicons name="search" size={20} color={Colors.disable}/>  
                <TextInput placeholder='Search...'
                    selectionColor={Colors.primary}
                    placeholderTextColor={Colors.disable}
                    style={{flex:1,color:Colors.active,fontFamily:'Philosopher-Regular'}}/>
                <Image source={require('../../assets/image/Filter.png')}
                style={{width:width/19,height:height/35,alignSelf:'center'}}></Image>
            </View>

            <View>
                <ScrollView horizontal nestedScrollEnabled={true} showsHorizontalScrollIndicator={false}>
                    <Categorylist></Categorylist>
                </ScrollView>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={[style.txt,{color:theme.txt}]}>Recommended (586,379)</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name='reader' size={25} color={Colors.primary} style={{marginHorizontal:10}}></Ionicons>
                    <Ionicons name='grid-outline' size={25} color={Colors.primary}></Ionicons>
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flexDirection:'row',alignItems:'center',marginTop:20,backgroundColor:theme.input,padding:10,borderRadius:10}}>
                <Image source={require('../../assets/image/Rectangle1.png')}
                resizeMode='stretch'
                style={{height:height/10,width:width/5}}></Image>
                <View style={{marginHorizontal:10}}>
                    <Text style={[style.subtitle,{color:theme.txt}]}>Royale President</Text>
                    <Text style={[style.txt,{color:theme.txt2}]}>Paris, France</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons name='star' size={12} color='#FFD300'></Ionicons>
                        <Text style={[style.subtxt,{color:Colors.primary,marginHorizontal:5}]}>4.8</Text>
                        <Text style={[style.subtxt,{color:Colors.disable}]}>(4,981 reviews)</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end',flex:1,}}>
                    <Text style={[style.subtitle,{color:Colors.primary}]}>$29</Text>
                    <Text style={[style.subtxt,{color:theme.txt2}]}>/ night</Text>
                    <TouchableOpacity onPress={()=>setLike(!like)}>
                    <Ionicons name={like?'bookmark':'bookmark-outline'} 
                    size={25} color={Colors.primary}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20,backgroundColor:theme.input,padding:10,borderRadius:10}}>
                <Image source={require('../../assets/image/Rectangle12.png')}
                resizeMode='stretch'
                style={{height:height/10,width:width/5}}></Image>
                <View style={{marginHorizontal:10}}>
                    <Text style={[style.subtitle,{color:theme.txt}]}>Laluna De Hotel</Text>
                    <Text style={[style.txt,{color:theme.txt2}]}>Istanbul, Turkiye</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons name='star' size={12} color='#FFD300'></Ionicons>
                        <Text style={[style.subtxt,{color:Colors.primary,marginHorizontal:5}]}>4.8</Text>
                        <Text style={[style.subtxt,{color:Colors.disable}]}>(4,378 reviews)</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end',flex:1,}}>
                    <Text style={[style.subtitle,{color:Colors.primary}]}>$33</Text>
                    <Text style={[style.subtxt,{color:theme.txt2}]}>/ night</Text>
                    <TouchableOpacity onPress={()=>setLike1(!like1)}>
                    <Ionicons name={like1?'bookmark':'bookmark-outline'} 
                    size={25} color={Colors.primary}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20,backgroundColor:theme.input,padding:10,borderRadius:10}}>
                <Image source={require('../../assets/image/Rectangle14.png')}
                resizeMode='stretch'
                style={{height:height/10,width:width/5}}></Image>
                <View style={{marginHorizontal:10}}>
                    <Text style={[style.subtitle,{color:theme.txt}]}>Carnia Merina</Text>
                    <Text style={[style.txt,{color:theme.txt2,width:150}]}>Rome, Italia</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons name='star' size={12} color='#FFD300'></Ionicons>
                        <Text style={[style.subtxt,{color:Colors.primary,marginHorizontal:5}]}>4.7</Text>
                        <Text style={[style.subtxt,{color:Colors.disable}]}>(3,277 reviews)</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end',flex:1,}}>
                    <Text style={[style.subtitle,{color:Colors.primary}]}>$32</Text>
                    <Text style={[style.subtxt,{color:theme.txt2}]}>/ night</Text>
                    <TouchableOpacity onPress={()=>setLike2(!like2)}>
                    <Ionicons name={like2?'bookmark':'bookmark-outline'} 
                    size={25} color={Colors.primary}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginTop:20,backgroundColor:theme.input,padding:10,borderRadius:10}}>
                <Image source={require('../../assets/image/Rectangle13.png')}
                resizeMode='stretch'
                style={{height:height/10,width:width/5}}></Image>
                <View style={{marginHorizontal:10}}>
                    <Text style={[style.subtitle,{color:theme.txt}]}>Le De Merische</Text>
                    <Text style={[style.txt,{color:theme.txt2,width:150}]}>London, United Kingdom</Text>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Icon name='star' size={12} color='#FFD300'></Icon>
                        <Text style={[style.subtxt,{color:Colors.primary,marginHorizontal:5}]}>4.8</Text>
                        <Text style={[style.subtxt,{color:Colors.disable}]}>(3,277 reviews)</Text>
                    </View>
                </View>
                <View style={{alignItems:'flex-end',flex:1,}}>
                    <Text style={[style.subtitle,{color:Colors.primary}]}>$31</Text>
                    <Text style={[style.subtxt,{color:theme.txt2}]}>/ night</Text>
                    <TouchableOpacity onPress={()=>setLike3(!like3)}>
                    <Ionicons name={like3?'bookmark':'bookmark-outline'} 
                    size={25} color={Colors.primary}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
    </View>
    </SafeAreaView>
  )
}