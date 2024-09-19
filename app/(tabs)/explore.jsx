import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>👩‍💼 About Job Mentor AI 👨‍💻</Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=' }} // Replace with an actual image URL or local image
            style={styles.image}
          />
        </View>

        <Text style={styles.subHeaderText}>Your Personal Career Guide 🎯</Text>
        <Text style={styles.descriptionText}>
          Job Mentor AI is your dedicated career advisor, here to guide you through the complex world of jobs, careers, and professional growth. Whether you're a fresh graduate, a seasoned professional, or someone in between, we've got you covered!
        </Text>

        <Text style={styles.sectionTitle}>🌟 Features 🌟</Text>
        <View style={styles.featureContainer}>
          <Text style={styles.featureText}>🚀 Instant Career Advice</Text>
          <Text style={styles.featureText}>💼 Resume & Cover Letter Tips</Text>
          <Text style={styles.featureText}>🔍 Job Search Assistance</Text>
          <Text style={styles.featureText}>📈 Career Growth Strategies</Text>
          <Text style={styles.featureText}>💬 24/7 Support</Text>
        </View>

        <Text style={styles.subHeaderText}>How It Works? 🤔</Text>
        <Text style={styles.descriptionText}>
          Just type in your questions, and Job Mentor AI will provide you with instant answers, advice, and resources tailored to your career needs. It's like having a personal career coach in your pocket! 🧳
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=' }} // Replace with an actual image URL or local image
            style={styles.image}
          />
        </View>

        <Text style={styles.sectionTitle}>🧠 Powered by AI 🧠</Text>
        <Text style={styles.descriptionText}>
          Built on cutting-edge AI technology, Job Mentor AI leverages the power of machine learning and natural language processing to understand your needs and provide personalized advice. It's like having a mentor who's always learning and improving! 💡
        </Text>

        <Text style={styles.subHeaderText}>Join Thousands of Happy Users! 🎉</Text>
        <Text style={styles.descriptionText}>
          Become a part of our community and take your career to the next level with Job Mentor AI. We're here to help you succeed. 💪
        </Text>

        <Link href="/" asChild>
          <TouchableOpacity style={styles.footerContainer}>
            <Text style={styles.footerText}>🚀 Let's Get Started!</Text>
          </TouchableOpacity>
        </Link>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  imageContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  subHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  featureContainer: {
    marginBottom: 20,
  },
  featureText: {
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  footerContainer: {
    marginTop: 30,
    backgroundColor: '#007BFF',
    paddingVertical: 16,
    borderRadius: 8,
    width: '100%',
  },
  footerText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
