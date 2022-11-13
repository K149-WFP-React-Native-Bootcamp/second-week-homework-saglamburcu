import React, { useState, useEffect } from "react";
import { View } from "react-native";

import { Home } from "./screens";
import styles from "./AppStyles";
import { Loading } from "./components";

const App = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setIsLoading(false);
        }, 1250);

        return () => clearTimeout(timeOut);
    }, []);

    if (isLoading) {
        return <Loading />
    }

    return (
        <View style={styles.container}>
            <Home />
        </View>
    )
}

export {App};