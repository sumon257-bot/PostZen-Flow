import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

const splashLines = [
  "অসংখ্য চোখ দেখেছে আমায় অবজ্ঞার দৃষ্টিতে,",
  "অসংখ্য মুখ বলেছে—",
  "'তুই কিছুই হবি না।'",
  "",
  "তবু আমি উচ্চস্বরে কিছু বলিনি,",
  "শব্দ নয়, নীরবতাকে করেছি লালন।",
  "",
  "আমি জানি, প্রতিটি অভিমান জমে আছে অন্তরে,",
  "প্রতিটি অপমান জন্ম দিয়েছে প্রতিজ্ঞার।",
  "",
  "আমি হেরে যাইনি,",
  "আমি প্রস্তুত হচ্ছি—",
  "একটি শান্ত অথচ অমোঘ জবাবের জন্য।",
  "",
  "একদিন,",
  "আমার নীরব সাফল্যই হবে",
  "সেই সর্বশেষ উচ্চারণ—",
  "যা আর কোনো শব্দের প্রয়োজন রাখবে না।"
];

export default function SplashScreen({ onComplete }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState([]);

  useEffect(() => {
    if (currentLine < splashLines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, splashLines[currentLine]]);
        setCurrentLine(currentLine + 1);
      }, 300);
      return () => clearTimeout(timeout);
    } else {
      const done = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1000);
      return () => clearTimeout(done);
    }
  }, [currentLine]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {displayedLines.map((line, index) => (
        <Text key={index} style={styles.line}>{line}</Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  line: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    marginBottom: 10,
  },
});