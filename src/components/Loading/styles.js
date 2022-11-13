import { StyleSheet } from "react-native";
import { theme } from "../../themes/palette";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: theme.black
    },
    spinner: {
        color: theme.green
    }
})