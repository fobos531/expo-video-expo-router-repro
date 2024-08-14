import React, { memo, useEffect, useRef } from "react";

import { useVideoPlayer, VideoView } from "expo-video";
import { View } from "react-native";
import { useNavigation } from "expo-router";

interface VideoProps {
  url: string;
}

const Video: React.FC<VideoProps> = ({ url }) => {
  const ref = useRef(null);
  const player = useVideoPlayer(url, (pl) => {
    pl.play();
  });

  const navigation = useNavigation();

  navigation.addListener("blur", () => {
    if (player.playing) {
      player.pause();
    }
  });

  return (
    <View style={{ backgroundColor: "black" }}>
      <VideoView ref={ref} style={{ width: "100%", height: 175 }} player={player} />
    </View>
  );
};

export default Video;
