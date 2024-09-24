import React from 'react';
import {Text, Image, View, TextInput} from 'react-native';

const friends = () => {
  return (
    <View style={{
      margin : 100,
      alignItems : 'center'
    }}>
      <Image 
      source = {require('./assets/friends.jpeg')}
      style = {{
        width : 400,
        height : 200,
      }}
      />
      <Text style = {{
        marginVertical : 100,
        fontSize : 20,
        fontStyle : 'italic',
        color : 'blue',
        textDecorationLine : "underline"
      }}>Friends</Text>

      <TextInput
      style = {{
        height : 40,
        width : 300,
        borderWidth : 2,
        borderColor : 'grey',
        fontSize : 15,
        color : 'red',
        textAlign : 'center'

      }}
      defaultValue='Sorry for Raed and Hegazy'
      />

    </View>
  );
};

export default friends;