import { StyleSheet } from "react-native";
import { theme } from "../../themes/palette";
import { W } from "../../utils/ui/dimensions";

export const styles = StyleSheet.create({
    container: {
        margin: W(10)
    },
    detailText: {
        textAlign: "center",
        fontSize: 24,
        margin: W(3),
        color: theme.white
    },
    bold: {
        fontWeight: "bold"
    }
})