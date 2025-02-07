import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {router} from "expo-router";
import React from "react";

export default function HeadSection() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text>꾸준한 학습으로</Text>
          <Text>금융 전문가가</Text>
          <Text>되어보세요</Text>
        </View>
        <Image
          source={require('@/assets/images/marulab-logo.png')}
          style={styles.image}
        />
      </View>
      
      <Pressable
        onPress={() => router.push('/invest')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>오늘의 학습 시작 🚢</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center'
  },
  content: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: '#3b82f6',
    width: '80%',
    padding: 8,
    borderRadius: 8
  },
  buttonText: {
    color: 'white'
  }
});