import React from 'react';
import { StyleSheet, Text, TextInput, View, Dimensions, TouchableOpacity, Image , StatusBar} from 'react-native';
import Carousel from 'react-native-card-carousel-animated';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const Home = ({navigation}) => {

    const onPressHandler = () => {
        navigation.navigate('Journal');
      }

      const data = [
        {
            id: '1',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Happy</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/happy.png')}
                    />
                    
                </View>
            ),
        },
        {
            id: '2',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Sad</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/sad.png')}
                    />
                </View>
            )
        },
        {
            id: '3',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Angry</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/angry.png')}
                    />
                </View>
            )
        },
        {
            id: '4',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Surprised</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/surprise.png')}
                    />
                </View>
            )
        },
        {
            id: '5',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Fear</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/fear.png')}
                    />
                </View>
            )
        },
        {
            id: '6',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Relaxed</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/relaxed.png')}
                    />
                </View>
            )
        },
        {
            id: '7',
            child: (
                <View style={styles.cards}>
                    <Text style={styles.cardText}>Tired</Text>
                    <Image 
                    style={styles.image}
                    source={require('../assets/images/tired.png')}
                    />
                </View>
            )
        },
    ];
    return(
        <View style={styles.container}>
             <StatusBar backgroundColor="#7d7a9f"  />
            <Text style={styles.subtitle}>How are you feeling today?</Text>
            
            
			<View style={styles.carousel}>
            <Carousel cards={data} />
            </View>

            <View style={{height:5}}></View>

            <View style={styles.explainContainer}>
                <Text style={styles.explainText}>Why do you feel this way?</Text>

                <View style={styles.explainArea}>
                <TextInput
                style={styles.textInput}
                placeholder='Date...'
                placeholderTextColor="grey"
                
                />
                <TextInput
                style={styles.textInput}
                placeholder='I felt this way because.....'
                placeholderTextColor="grey"
                
                />
                </View>

                <TouchableOpacity style={styles.journalBtn}
        onPress={onPressHandler}
        >
          <Text style={styles.btnText}>Go to journal</Text>
          <FontAwesome style={styles.icon}
          name='angle-right'
          size={40}
          color='white'
          />
        </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#7d7a9f',
        height:Dimensions.get('window').height +25,
    },
    subtitle:{
        color:'white',
        fontSize:24,
        paddingTop:25,
        paddingLeft:20
    },
    carousel:{
        bottom:100,
        height: 280,
        marginLeft:25,
        marginRight:25
    },
    cards:{
        backgroundColor:'#7d7a9f',
        width: '100%',
        height: '100%',
        paddingTop:18,
        paddingBottom:22,
        alignItems:'center',
        
    },
    cardText:{
        color:'white',
        top:132,
        
    },
    image:{
        flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    },
    explainContainer:{
        backgroundColor:'#fce1b8',
        paddingBottom:200,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        bottom:100
    },
    explainArea:{
        backgroundColor:'white',
        borderRadius:30,
        marginLeft:10,
        marginRight:10,
        height:360,
        top:15,
        paddingVertical:20
    },
    explainText:{
        fontSize:22,
        color:'#7d7a9f',
        paddingTop:15,
        paddingLeft:20,
        paddingBottom:10,
    },
    textInput:{
        paddingLeft:25
    },
    journalBtn:{
        width:'100%',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
        marginTop:60,
        backgroundColor:'white',
        paddingLeft:40,
        height:80,
        backgroundColor:'#7d7a9f'
    },
    btnText:{
        color:'white',
        fontSize:24,
        top:18,
        alignItems:'center',
        right:20
    },
    icon:{
        left:130,
        bottom:17
    }
})
export default Home;