import { View, Text } from 'react-native'
import React, { useEffect, useRef, useState} from 'react'
import { Video, ResizeMode} from 'expo-av'
import { Playback } from 'expo-av/build/AV'
import { Platform } from 'react-native'
import { VideoPlayerProps } from '../types/param-prop'

const isWeb = Platform.OS === 'web'

const VideoPlayer = (props: VideoPlayerProps) => {

  const { episode, isPlaying } = props;
    const [status, setStatus] = useState({});

    const video = useRef<Playback>(null);

    useEffect(() => {
        const playOrPause = async () => {
            if (video.current) {
                if (isPlaying) {
                    await video.current.playAsync();
                } else {
                    await video.current.pauseAsync();
                }
            }
        };

        playOrPause();

    }, [isPlaying]);

    

    useEffect(() => {
        const loadVideo = async () => {
            if (video.current) {
                await video.current.unloadAsync();
                await video.current.loadAsync({
                    uri: episode.video
                }, {}, false);
            }
        };

        loadVideo();

    }, [episode]);


  return isWeb ? (

    <Video
    ref={video}
      className='aspect-video object-contain'
      source={{
        uri: episode.video,
      }}
      useNativeControls
      resizeMode={ResizeMode.CONTAIN}
      onPlaybackStatusUpdate={status => setStatus(() => status)}
  />
  ) : (

      <Video
      ref={video}
        className='w-screen h-full aspect-video'
        source={{
          uri: episode.video,
        }}
        posterSource={{
            uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: "cover",
        }}
        usePoster={true}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
    />

  )
}

export default VideoPlayer;