import React, {useState} from 'react';
import {
  View,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';



const HomeScreen = ({navigation}) =>{
  const img = {
    uri:
      'https://images.pexels.com/photos/227417/pexels-photo-227417.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  };
  const recentImage = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" };

  const [gallery, setgallery] = useState([
    {
      image: {
        uri:
          'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
      },
      title: 'Switzerland',
      key: '1',
    },
    {
      image: {
        uri:
          'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
      },
      title: 'New Zeland',
      key: '2',
    },
    {
      image: {
        uri:
          'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
      },
      title: 'Rome',
      key: '3',
    },
    {
      image: {
        uri:
          'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940%27',
      },
      title: 'Tahiti',
      key: '4',
    },
  ]);

  const godetail=()=>{
    navigation.navigate('Detail');
  }

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black"></StatusBar>
      <View style={{flexGrow:1,height:'100%'}}>
        <View>
          <ImageBackground
            source={img}
            style={{width: '100%', height: 270}}
            imageStyle={{borderBottomRightRadius: 65}}>
            <View style={styles.dark}></View>
            <View style={styles.search}>
              <Text style={styles.text}>Hi Suraj Yadav</Text>
              <Text style={styles.text1}>
                Where would you like to go today?
              </Text>
              <View style={styles.icon}>
                <Item rounded style={styles.item}>
                  <Input placeholder="Search Destination" />
                  <Button transparent>
                    <Icon name="ios-search" />
                  </Button>
                </Item>
              </View>
            </View>
          </ImageBackground>
        </View>

        <ScrollView>
          <View style={{padding: 10}}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Top Tredning</Text>
          </View>
          <View>
            <FlatList
              horizontal={true}
              data={gallery}
              renderItem={({item}) => {
                return (
                  <View style={{paddingVertical: 20, paddingLeft: 10}}>
                    <TouchableOpacity onPress={() => {
          
          navigation.navigate('Detail', {
            img: item.image,
            title: item.title,
          });
        }}>
                      <Image
                        source={item.image}
                        style={{
                          width: 150,
                          height: 250,
                          marginRight: 8,
                          borderRadius: 10,
                        }}></Image>
                      <View style={styles.flate}>
                        <Text style={styles.imgtext}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
          <View>
            <View style={{padding: 10 , flexDirection:'row',justifyContent:"space-between"}}>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  headerimg: {
    width: '100%',
    height: 270,
  },
  dark: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 270,
    opacity: 0.5,
    borderBottomRightRadius: 65,
  },
  search: {},
  text: {
    fontSize: 40,
    paddingLeft: 30,
    color: 'white',
    paddingTop: 40,
  },
  text1: {
    fontSize: 20,
    paddingLeft: 30,
    color: 'white',
    paddingTop: 20,
  },
  icon: {
    paddingLeft: 20,
    paddingTop: 20,
    paddingRight: 20,
  },
  item: {
    backgroundColor: 'white',
  },
  flate: {
    position: 'absolute',
    marginTop: 220,
    paddingLeft: 20,
  },
  imgtext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
