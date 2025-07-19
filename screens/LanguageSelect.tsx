import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default function LanguageSelect({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>ভাষা নির্বাচন করুন</Text>
      <TouchableOpacity onPress={() => navigation.replace('Home')}>
        <Text style={{ fontSize: 16, marginBottom: 10 }}>বাংলা</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.replace('Home')}>
        <Text style={{ fontSize: 16 }}>English</Text>
      </TouchableOpacity>
    </View>
  );
}