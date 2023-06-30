import React from 'react';
import { View,Text,Image,TextInput, ScrollView, ImageBackground } from 'react-native';




export default class Home extends React.Component {
    render ( ) {
        return (
<View>

            <ImageBackground source={require('../Images/back.jpg')} style={{width:500,height:700}} >
           
            <View style={{
                flexDirection:'row',
                marginTop:40,
                alignItems:'center',
                paddingHorizontal:40
            }}>

            <Image source={require('../Images/menu.png')} style={{width:30,height:30}}/>
            <Image source={require('../Images/studentlogo.png')} style={{width:30,height:30,marginLeft:350}}/>

  
            </View>


            <View style={{paddingHorizontal:40,marginTop:25}}>
              <Text style={{fontSize:40,color:'black',fontFamily:'RobotoBold'}}>Hello</Text>

                <Text style={{fontSize:15,paddingVertical:10,paddingRight:80,lineHeight:22,fontFamily:'RobotoRegular',color:'#a2a2db'}}>Lorem ipsum dolor sit amet , consectetuer adipscing elit.</Text>

                <View style={{
                      flexDirection:'row',
                      backgroundColor:'#FFF',
                      borderRadius:40,
                      alignItems:'center',
                      paddingVertical:10,
                      paddingHorizontal:20,
                      marginTop:30
                }}>
                          <Image source={require('../Images/search2.png')} style={{width:30,height:30}}/>
                          <TextInput placeholder='Search' style={{paddingHorizontal:20,fontSize:15,color:'#ccccef'}}></TextInput>

                </View>
                <ScrollView horizontal style={{marginRight:40,marginTop:30}}>

                <View style={{
                    alignItems:'center',
                    justifyContent:'center',
                    height:66,
                    width:66,
                    borderRadius:50,
                    backgroundColor:'#5facdb',
              
                }}>
                          <Image source={require('../Images/Aeroplane.png')} style={{width:30,height:30}}/>
                   
                </View>
                            <View style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                    height:66,
                                    width:66,
                                    borderRadius:50,
                                    backgroundColor:'yellow',
                                    marginLeft:20
                            
                                }}>
                   <Image source={require('../Images/building.png')} style={{width:30,height:30}}/>

              
                          </View>

                          <View style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                    height:66,
                                    width:66,
                                    borderRadius:50,
                                    backgroundColor:'grey',
                                    marginLeft:20
                            
                                }}>
                   <Image source={require('../Images/bus.png')} style={{width:30,height:30}}/>

              
                          </View>

                          <View style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                    height:66,
                                    width:66,
                                    borderRadius:50,
                                    backgroundColor:'white',
                                    marginLeft:20
                            
                                }}>
                   <Image source={require('../Images/bike.jpg')} style={{width:40,height:30}}/>

              
                          </View>


                          <View style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                    height:66,
                                    width:66,
                                    borderRadius:50,
                                    backgroundColor:'white',
                                    marginLeft:20
                            
                                }}>
                   <Image source={require('../Images/car.png')} style={{width:40,height:30}}/>

</View>
                   
                   <View style={{
                                    alignItems:'center',
                                    justifyContent:'center',
                                    height:66,
                                    width:66,
                                    borderRadius:50,
                                    backgroundColor:'white',
                                    marginLeft:20
                            
                                }}>
                   <Image source={require('../Images/dots.png')} style={{width:40,height:30}}/>
 
              
                          
           
            </View>
         
            </ScrollView>

            <Text style={{
                color:'#FFF',
                fontFamily:'RobotoRegular',
                marginTop:20,
                fontSize:17

            }}>Recommended</Text>
            
            <ScrollView horizontal showsHorizontalScrollIndicator style={{marginHorizontal:1,marginTop:30}}>

            <View style={{
                backgroundColor:'#FEFEFE',
                height:200,
                width:190,
                borderRadius:15,
                padding:5
            }}>
                  
                  <Image source={require('../Images/tourist1.jpg')} style={{width:100,height:100,margin:'auto'}}/>

            </View>

            <View style={{flexDirection:'row',width:100}}>

        

            </View>


            <View style={{
                backgroundColor:'#FEFEFE',
                height:200,
                width:190,
                borderRadius:15,
                padding:5
            }}>
                  
                  <Image source={require('../Images/tourist.jpg')} style={{width:100,height:100,margin:'auto'}}/>

            </View>

            <View style={{flexDirection:'row',width:100}}>

        

            </View>

            <View style={{
                backgroundColor:'#FEFEFE',
                height:200,
                width:190,
                borderRadius:15,
                padding:5
            }}>
                  
                  <Image source={require('../Images/tourist2.png')} style={{width:100,height:100,margin:'auto'}}/>

            </View>

            <View style={{flexDirection:'row',width:100}}>

        

            </View>

            </ScrollView>

            </View>   
            </ImageBackground>
                          
          
            </View>
          
        )
    }
}