import { View, Text, Image, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from 'react';

export default function Upload() {
    const [caption, setCaption] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.topContent}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
                    }}
                />
                <Text style={styles.text}>Change</Text>

                <TextInput 
                    value={caption}
                    onChangeText={(newValue) => setCaption(newValue)}
                    style={styles.caption}
                    placeholder="What's on your mind" 
                />
            </View>

            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Share</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between', // Space between top content and bottom button
        padding: 16,
    },
    topContent: {
        alignItems: 'center', // Center the image, text, and description horizontally
    },
    image: {
        width: 208,             
        aspectRatio: 3 / 4,     
        borderRadius: 16,       
        backgroundColor: '#cbd5e1',
        marginBottom: 16, // Space between image and "Change" text
    },
    text: {
        fontSize: 18,
        marginBottom: 8, // Space between text and TextInput
    },
    caption: {
        width: '100%',
        padding: 8,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
    },
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        alignSelf: 'center', // Center the button horizontally
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
