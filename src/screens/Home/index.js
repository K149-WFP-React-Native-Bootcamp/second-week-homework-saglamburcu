import React, {useState} from "react";
import { View } from "react-native";
import { AlbumPhoto, SongDetail, SongControl } from "../../components";
import Video from "react-native-video";
import { data } from "../../data";
import { styles } from "./styles";

const Home = () => {
    const [isPause, setIsPause] = useState(true);
    const [indexOfSong, setIndexOfSong] = useState(0);

    const onPause = () => {
        setIsPause(true);
    }

    const onPlay = () => {
        setIsPause(false);
    }

    const onNext = () => {
        setIndexOfSong(prev => {
            if (prev === data.length -1) {
                return 0;
            }
            return prev + 1;
        });
    }

    const onBack = () => {
        setIndexOfSong(prev => {
            if (prev === 0) {
                return data.length - 1;
            }
            return prev - 1;
        });
    }

    return (
        <View style={styles.container}>
            <AlbumPhoto photo={data[indexOfSong].photo} />
            <SongDetail singer={data[indexOfSong].singer} song={data[indexOfSong].song} />
            <SongControl isPause={isPause} onPause={onPause} onPlay={onPlay} onNext={onNext} onBack={onBack} />
            <Video 
                source={data[indexOfSong].url}
                paused={isPause}
                audioOnly
            />
        </View>
    )
}

export {Home};