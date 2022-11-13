import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

const SongDetail = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.detailText}>{props.singer}</Text>
            <Text style={[styles.detailText, styles.bold]}>{props.song}</Text>
        </View>
    )
}

export {SongDetail};