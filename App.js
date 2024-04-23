import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Image, Button,Text } from 'react-native';
  // https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg


export default function App() {
  const [inputUrl, setInputUrl] = useState('');
  const [imgUrl, setImgUrl] = useState('');



  const handleSubmit = () => {
    setImgUrl(inputUrl); // 將輸入的 URL 設為要顯示的圖片 URL
  };

  return (
    <View style={styles.container}>
      <Text>Input image url</Text>
      <TextInput
        style={styles.input}
        value={inputUrl}
        onChangeText={setInputUrl}
        placeholder='Please input the image url'
      />
      <Button
        title="Submit"
        onPress={handleSubmit}
      />
      {imgUrl ? (
        <Image
          source={{ uri: imgUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%', // 輸入框的寬度
  },
  image: {
    width: '80%', // 圖片的寬度
    height: 200, // 圖片的高度
    marginTop: 20,
  },
});













// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
