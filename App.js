import React, {useState} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'yoshi', id: '2' },
    { name: 'mario', id: '3' },
    { name: 'luigi', id: '4' },
    { name: 'peach', id: '5' },
    { name: 'toad', id: '6' },
    { name: 'bowser', id: '7' }
  ]);

  return (
    <View style={styles.container}>

      <FlatList
          numColumns={0}                             // divides the data into columns
          keyExtractor={(item) => item.id}          //property on the item that is gonna be used as the key
          data={people}
          renderItem={( {item}) =>  (
            <Text style={styles.item}>{item.name}</Text>
            
            )}  
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }

});
