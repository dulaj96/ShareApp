import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
  } from 'react-native';
  import React, { useState } from 'react';
  import Share from 'react-native-share';
  
  const Home = () => {
    const share = () => {
      const options = {
        message: 'Data Pass Wenne Ne Bn'
      };
      Share.open(options)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    };
  
    const [sms, setSms] = useState();
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Type your Message Here"
          placeholderTextColor="#666666"
          multiline={true}
          value={sms}
          onChange={setSms}
          style={styles.input}
        />
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={styles.button} onPress={share}>
            <Text style={{textAlign: 'center', fontSize: 16, color: '#fff'}}>
              Share
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    button: {
      borderRadius: 10,
      backgroundColor: '#3262a8',
      width: 150,
      padding: 15,
    },
    input: {
      borderWidth: 1,
      borderColor: '#7a42f4',
  
      margin: 10,
      paddingLeft: 10,
      color: '#05375a',
      borderRadius: 10,
      backgroundColor: '#fff',
    },
  });
  
  export default Home;