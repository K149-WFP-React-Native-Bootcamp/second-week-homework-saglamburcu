import { StyleSheet } from "react-native";
import { theme } from "../../themes/palette";
import { W, H } from "../../utils/ui/dimensions";

export const styles = StyleSheet.create({
    albumPhoto: {
        width: W(70),
        height: H(30),
        borderWidth: 5,
        borderRadius: 20,
        borderColor: theme.green,
    }
})