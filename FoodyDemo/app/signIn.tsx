import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
      />
      <Link href="/(tabs)">
        <View>
            <Text style={styles.buttonText}> Sign In</Text>
        </View>
        </Link>

        <Text style={styles.footerText}>
        Don't have an account?{' '}
        <Link href="/signUp" style={styles.link}>
          Sign Up
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  footerText: {
    marginTop: 20,
    fontSize: 14,
    color: '#999',
  },
  link: {
    color: '#0066cc',
    fontWeight: 'bold',
  },
  buttonText: {
    color: '#aaa',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#0066cc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
