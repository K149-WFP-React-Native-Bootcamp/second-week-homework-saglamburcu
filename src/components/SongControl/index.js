import React from "react";
import { View, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "./styles";

const SongControl = ({isPause, onPause, onPlay, onNext, onBack}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconWrapper} onPress={onBack}>
                <AntDesign style={styles.icon} name="banckward" />
            </TouchableOpacity>

            {
                isPause 
                    ?   
                    <TouchableOpacity style={styles.iconWrapper} onPress={onPlay}>
                        <AntDesign style={styles.icon} name="play" />
                    </TouchableOpacity>
                    :   
                    <TouchableOpacity style={styles.iconWrapper} onPress={onPause}>
                        <AntDesign style={styles.icon} name="pausecircle" />
                    </TouchableOpacity>
            }
            
            <TouchableOpacity style={styles.iconWrapper} onPress={onNext}>
                <AntDesign style={styles.icon} name="forward" />
            </TouchableOpacity>            
        </View>
    )
}

export {SongControl};