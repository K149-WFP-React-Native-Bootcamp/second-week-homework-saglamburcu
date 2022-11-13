import { View, ActivityIndicator } from "react-native"
import { theme } from "../../themes/palette";
import { styles } from "./styles";

const Loading = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={75} color={theme.green} />
        </View>
    )
}

export {Loading};