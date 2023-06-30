import React from 'react';
import { View,Text,Image,TextInput, ScrollView, ImageBackground,StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView, TouchableHighlight } from 'react-native-web';



export default class Detail extends React.Component {
    render ( ) {
        return (
            <SafeAreaView >
         <ScrollView>
           <View style={{borderBottomLeftRadius:50,borderBottomRightRadius:50,height:300,overflow:'hidden'}}>
            <ImageBackground source={require('../Images/blue.png')} style={{width:530,height:350}} >
       
          
          <View style={{
                flexDirection:'row',
                marginTop:40,
                alignItems:'center',
                paddingHorizontal:40,
               

            }}>


          <Image source={require('../Images/menuicon.png')} style={{width:26,height:30}}/>

          <Image source={require('../Images/icons.png')} style={{width:26,height:30,marginLeft:360}}/>

            </View>


            <View style={{width:'100%',marginTop:50,marginBottom:20,justifyContent:'center', alignItems:'center' }}>
 
            <View style={{width:80,height:80,borderRadius:50,backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
            <Image source={require('../Images/Aeroplane.png')} style={{width:76,height:30}}/>

            </View>

            </View>



             <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:40}}>
               <Text style={{fontSize:24,fontFamily:'RobotoBold',color:'#FFF'}}>NYC</Text>
               <Text style={{fontSize:20,color:'#a2a2db',paddingHorizontal:15}}>. . . . . . . . . . . . . . . . . . . . . . . . . . </Text>
               <Text style={{fontSize:24,fontFamily:'RobotBold',color:'#FFF'}}>IDN</Text>
             </View>
        

                 <View style={{flexDirection:'row',paddingHorizontal:40}}>
                 <Text style={{color:'#a2a2db',fontFamily:'RobotRegular',fontSize:12,marginTop:4}}>New York</Text>
                 <Text style={{color:'#a2a2db',fontFamily:'RobotRegular',paddingLeft:285,marginTop:4}}>Indonesia</Text>

                 </View>
                  <Text style={{paddingHorizontal:30,color:'#a2a2db',fontFamily:'RobotoRegular'}}>16 Oct,2001</Text>
                  </ImageBackground>

                  <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:50,marginTop:60}}>

                  </View>
                 </View>
                 <View style={{flexDirection:'row'}}>
                  <Image source={require('../Images/dots (2).png')} style={{width:25,height:20,marginTop:13,marginLeft:40}}/>
                  <Image source={require('../Images/filter.png')} style={{width:25,height:20,marginTop:13,marginLeft:'70%'}}/>

                  </View>

                 
              
 
          <View style={{paddingHorizontal:36,alignSelf:'center',height:300,width:330,shadowColor:'#171717',shadowOffset:{width:-2,height:6},shadowOpacity:0.2,shadowRadius:3,borderRadius:8,backgroundColor:'white',marginTop:10,borderWidth:1}}>
          
          <View style={{flexDirection:'row',paddingTop:20,alignSelf:'center'}}>
          <Text style={{fontFamily:'RobotoBold',color:'4b3ca7',fontSize:20}}>NYC</Text>
          <Text style={{fontSize:20,color:'#a2a2db',paddingHorizontal:10}}>. . . . . . . . . . . . . . . . . </Text>
          <Text style={{fontFamily:'RobotoBold',color:'4b3ca7',fontSize:20}}>IDN</Text>

          </View>
         

          <View style={{flexDirection:'row',marginTop:-30}}>
          <Text style={{fontFamily:'RobotoRegular',color:'#a2a2db',fontSize:11}}> New York</Text>
          <Text style={{fontFamily:'RobotoRegular',color:'#a2a2db',fontSize:12,paddingLeft:160}}>Indonesia</Text>


          </View>
          
         <View style={{flexDirection:'row',marginTop:9,alignItems:'center'}}>
         <Text style={{fontFamily:'RobotoRegular',fontSize:13,color:'#522289'}}> 09:00 AM</Text>
         <Text style={{fontFamily:'RobotoRegular',fontSize:13,color:'#522289',paddingLeft:110,marginLeft:30}}> 21:00 AM</Text>
         </View>

         <Text style={{fontFamily:'RobotoRegular',color:'#a2a2db',fontSize:12}}>20June,2022</Text>


         <View style={{flexDirection:'row',marginTop:10,alignItems:'center'}}>
         <Text style={{fontFamily:'RobotoRegular',color:'#a2a2db',fontSize:12,marginLeft:3}}>Name</Text>
         <Text style={{fontFamily:'RobotoRegular',color:'#a2a2db',fontSize:12,paddingLeft:200}}>Seat</Text>


         </View>

          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={{fontFamily:'RobotoRegular',color:'#522289',fontSize:16}}>Alexson</Text>
            <Text style={{fontFamily:'RobotoRegular',color:'#522289',fontSize:16,paddingLeft:172}}>ISA</Text>

          </View>


          <Text style={{marginTop:-5,marginVertical:16,color:'#a2a2db',fontSize:16}}>. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .  </Text>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:-10}}>
          <Text style={{fontFamily:'RobotoRegular',color:'#a2a2db',fontSize:12}}>Class</Text>
          <Text style={{fontFamily:'RobotoRegular',color:'#a2a2db',fontSize:12,paddingLeft:200}}>Price</Text>



          </View> 

          <View style={{flexDirection:'row',alignItems:'center'}}>
          <Text style={{fontFamily:'RobotoRegular',color:'#522289',fontSize:16}}>Lorem ipsum</Text>
          <Text style={{fontFamily:'RobotoBold',color:'#4b3ca7',fontSize:16,paddingLeft:132}}>#400</Text>


          </View>
          <View style={{width:'35%',marginLeft:78,marginTop:30}}>

<Button title='CHECK' ></Button>

     
</View>
            
         
           </View>
            
           
       
      
  
       





</ScrollView>
             </SafeAreaView>
            
                   )
                  }
              }



             
          
  