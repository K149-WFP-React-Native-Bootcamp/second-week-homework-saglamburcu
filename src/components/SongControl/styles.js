import { StyleSheet } from "react-native";
import { theme } from "../../themes/palette";
import {W} from "../../utils/ui/dimensions";

export const styles = StyleSheet.create({
    container: {
        marginTop: W(10),
        flexDirection: "row",
    },
    iconWrapper: {
        margin: W(5)
    },
    icon: {
        color: theme.green,
        fontSize: W(16)
    }
})