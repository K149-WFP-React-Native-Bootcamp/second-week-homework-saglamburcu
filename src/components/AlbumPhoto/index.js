import React from "react";
import { View, Image } from "react-native";
import { styles } from "./styles";

const AlbumPhoto = (props) => {
    return (
        <View>
            <Image 
                style={styles.albumPhoto}
                source={{
                    uri: props.photo
                }}
                resizeMode="cover"
            />
        </View>
    )
}

export {AlbumPhoto};