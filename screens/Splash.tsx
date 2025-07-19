import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Splash({ navigation }) {
  const poem = `অসংখ্য চোখ দেখেছে আমায় অবজ্ঞার দৃষ্টিতে,
অসংখ্য মুখ বলেছে—
'তুই কিছুই হবি না।'

তবু আমি উচ্চস্বরে কিছু বলিনি,
শব্দ নয়, নীরবতাকে করেছি লালন।

আমি জানি, প্রতিটি অভিমান জমে আছে অন্তরে,
প্রতিটি অপমান জন্ম দিয়েছে প্রতিজ্ঞার।

আমি হেরে যাইনি,
আমি প্রস্তুত হচ্ছি—
একটি শান্ত অথচ অমোঘ জবাবের জন্য।

একদিন,
আমার নীরব সাফল্যই হবে
সেই সর্বশেষ উচ্চারণ—
যা আর কোনো শব্দের প্রয়োজন রাখবে না।`;

  const [text, setText] = useState('');
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(poem.slice(0, i));
      i++;
      if (i > poem.length) {
        clearInterval(interval);
        setTimeout(() => navigation.replace('LanguageSelect'), 400);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.poem}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#FAF9F6' },
  poem: { fontSize: 16, color: '#111' }
});