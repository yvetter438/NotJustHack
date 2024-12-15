import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRef, useState } from 'react';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { useEffect } from 'react';


type VideoPost = {
    post: {
        id: string;
        video: string;
        caption: string;
    };
    activePostId: string;
};

export default function VideoPost({post, activePostId }: VideoPost) {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>();
  const isPlaying = status?.isLoaded && status.isPlaying;
  const { height }= useWindowDimensions();
  const tabBarHeight: number = useBottomTabBarHeight();
  const adjustedHeight: number = height - tabBarHeight;


  useEffect(() => {
    if (!video.current) {
        return;
    }
    if (activePostId != post.id) {
        video.current.pauseAsync();
    }
    if (activePostId == post.id) {
        video.current.playAsync();
    }
  }, [activePostId, video.current])
  
  const onPress = () => {
    if (!video.current) {
      return;
    }
    if (isPlaying) {
      video.current.pauseAsync();
    }
    else {
      video.current.playAsync();
    } 
  }

  return (
    <View style={[styles.container, {height: adjustedHeight}]}>
      <Video 
        ref={video}
        source= {{uri: post.video }}
        style={[StyleSheet.absoluteFill, styles.video]}
        resizeMode={ResizeMode.COVER}
        onPlaybackStatusUpdate={setStatus}
        isLooping
         />

       <Pressable onPress={onPress} style={styles.content}>
      <LinearGradient 
        colors={['transparent', 'rgba(0,0,0,0.8)']}
        style={[StyleSheet.absoluteFill, styles.overlay]}
      />
      {!isPlaying && (<Ionicons style={{ position: 'absolute', alignSelf: 'center', top: '50%'}}
        name="play"
        size={70} 
        color="rgba(255,255,255,0.7)" /> )}
      <SafeAreaView style={{ flex: 1}}>
         <View style={styles.footer}>
          {/* bottom: caption */}
          <View style={styles.leftColumn}>
            <Text style={styles.caption}>{post.caption}</Text>
          </View>

          {/* Vertical column of icon-buttons.*/}
          <View style={styles.rightColumn}>
            <Ionicons name='heart' size={40} color="white" />
            <Ionicons name='share-social-sharp' size={40} color="white" />
            <Ionicons name='bookmark' size={40} color="white" />
          </View>
        </View>
        </SafeAreaView>
        </Pressable> 
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
  },
  content: {
    flex: 1,
    padding: 10,
  },
  video: {},
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  caption: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Inter',
  },
  rightColumn: {
    gap: 10,
  },
  leftColumn: {
    flex: 1,
  },
  overlay: {
    top: '50%',
  },
});
