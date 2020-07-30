import * as React from 'react';
import {View, Button, Text,Image, ImageBackground,StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//
//<Text>otherParam: {JSON.stringify(title)}</Text>

function Detail({route, navigation}) {
  const {img} = route.params;
  const {title} = route.params;
  const recentImage = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };

  return (
    <View style={{backgroundColor:'white' ,flex:1}}>
      
        <ImageBackground
          source={img}
          style={{width: '100%', height: 270}}
          imageStyle={{
            borderBottomRightRadius: 65,
            borderBottomLeftRadius: 65,
          }}>
          <View >
            <View style={styles.font} >
              <Text style={{fontSize:25,fontWeight:'bold',color:'white'}}>{title}</Text>
            </View>
            <View style={styles.font1}>
            <Text style={{fontSize:20,color:'white'}}>
              Mumbai is best beacuse oF mulund !!!!!
            </Text>
            </View>
          </View>
        </ImageBackground>
        <View>
            <View style={{padding: 25 , flexDirection:'row',justifyContent:"space-between"}}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                Recent Viewed
              </Text>
              <Text style={{fontSize: 15, fontWeight: 'bold', color:"red"}}>
                View All
              </Text>
              
            </View >
            <Image source={recentImage} style={{height:250,width:"92%" ,borderRadius:10,alignSelf:'center'}}></Image>
            <View style={{position:'absolute',marginTop:250,paddingLeft:170}}>
              <Text style={{color:"white",fontSize:40}}>Venice</Text>
              
              
            </View>
          </View>
      </View>
   
  );
}

const styles=StyleSheet.create({
font:{
  position:'absolute',
  marginTop:180,
  paddingLeft:160,

},
font1:{
  position:'absolute',
  marginTop:220,
  paddingLeft:80,

},


})
export default Detail;
