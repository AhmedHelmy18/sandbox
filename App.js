import React from 'react';
import {Text, Image, TextInput, ScrollView, StyleSheet , FlatList} from 'react-native';



const styles = StyleSheet.create({
  item : {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  flatListContainer : {
    flex : 1,
    justifyContent : 'space-evenly'
  }
});
const Friends = () => {
  return (
    <ScrollView 

    style={{
      flex : 1,
      marginTop : 100,
    }}>
      <Image 
      source = {require('./assets/friends.jpeg')}
      style = {{
        width : 400,
        height : 200,
      }}
      />
      <Text 
    
      style = {{
        marginTop : 30,
        fontSize : 20,
        fontStyle : 'italic',
        color : 'blue',
        textDecorationLine : "underline",
        textAlign: 'center'
      }}>Friends</Text>

      <FlatList 
      data = {[
        {key : '1. Ahmed Helmy'},
        {key : '2. Ahmed Salah'},
        {key : '3. Ahmed Elbelehy'},
        {key : '4. Khaled Ghazy'},
        {key : '5. Mohamed Eldahtory'},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      numColumns={2}
      columnWrapperStyle={styles.flatListContainer}
      keyExtractor={(item) => item.key}
      />

      <TextInput
      style = {{
        height : 40,
        width : 300,
        borderWidth : 2,
        borderColor : 'grey',
        fontSize : 15,
        color : 'red',
        textAlign : 'center',
        marginTop : 30,
        marginLeft:50
      }}
      defaultValue='Sorry for Raed and Hegazy'
      />

    </ScrollView>
  );
};

export default Friends;