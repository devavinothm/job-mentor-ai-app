import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';

export default function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { text: 'Hi! I am your Job Mentor AI. How can I assist you today?', isBot: true }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (input.trim() === '') {
      const userMessage = { text: input, isBot: false };
      const newMessages = [...messages, userMessage];
      setMessages(newMessages);
      setInput('');
      setLoading(true);

      try {
        const apiKey = "YOUR_API_KEY";

        const prompt = `Your name is Job Mentor AI. You are an AI assistant that helps people with job-related questions. Answer this question: ${input}`;

        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-4',
            messages: [
              { role: 'system', content: prompt },
            ],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${apiKey}`,
            },
          }
        );

        const botReply = response.data.choices[0].message.content.trim();
        setMessages([...newMessages, { text: botReply, isBot: true }]);
      } catch (error) {
        console.error(error);
        setMessages([...newMessages, { text: 'Sorry, something went wrong. Please try again.', isBot: true }]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Job Mentor AI</Text>
        <Text style={{ color: '#555', textAlign: 'center' }}>Ask me anything about jobs...</Text>
      </View>
      <KeyboardAvoidingView behavior="padding" style={styles.innerContainer}>
        <ScrollView contentContainerStyle={styles.messagesContainer}>
          {messages.map((message, index) => (
            <View
              key={index}
              style={[
                styles.messageBubble,
                message.isBot ? styles.botBubble : styles.userBubble,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  message.isBot ? styles.botText : styles.userText,
                ]}
              >
                {message.text}
              </Text>
            </View>
          ))}
          {loading && (
            <View style={[styles.messageBubble, styles.botBubble]}>
              <ActivityIndicator size="small" color="#555" />
            </View>
          )}
        </ScrollView>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ask me anything about jobs..."
            value={input}
            onChangeText={setInput}
            onSubmitEditing={handleSend}
            returnKeyType="send"
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  header: {
    // backgroundColor: '#007BFF',
    padding: 16,
  },
  headerText: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  messagesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 20,
    marginVertical: 4,
    maxWidth: '80%',
  },
  botBubble: {
    backgroundColor: '#E8E8E8',
    alignSelf: 'flex-start',
  },
  userBubble: {
    backgroundColor: '#007BFF',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  botText: {
    color: '#333',
  },
  userText: {
    color: '#FFF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: '#DDD',
    backgroundColor: '#FFF',
  },
  input: {
    flex: 1,
    backgroundColor: '#F0F0F0',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#007BFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
