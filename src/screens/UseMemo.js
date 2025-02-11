import React, { useState, useMemo } from "react";
import { View } from "react-native";
import CustomTextDisplay from "../components/CustomTextDisplay";
import CustomButton from "../components/CustomButton";

const ExpensiveFunction = (num) => {
    console.log("Running expensive calculation...");
    for (let i = 0; i < 100000000; i++) {} // Simulated delay
    return num * 2;
};

const UseMemoExample = () => {
    const [count, setCount] = useState(5);
    const [darkTheme, setDarkTheme] = useState(false);
    const noMemoValue = ExpensiveFunction(count);
    const memoizedValue = useMemo(() => ExpensiveFunction(count), [count]);

    const themeStyles = {
        backgroundColor: darkTheme ? "black" : "white",
        color: darkTheme ? "white" : "black",
        padding: 20,
        alignItems: "center",
    };

    return (
        <View style={[themeStyles, { flex: 1 }]}>
            <CustomTextDisplay
            txtStyle={{ color: themeStyles.color }}
            txtToDisp={'Count: '+count}/>

            <CustomTextDisplay
            txtStyle={{ color: themeStyles.color }}
            txtToDisp={'Without useMemo: '+noMemoValue}/>

            <CustomTextDisplay
            txtStyle={{ color: themeStyles.color }}
            txtToDisp={'With useMemo: '+memoizedValue}/>
            
            <CustomButton btnTitle={'Increment Count'} onBtnPress={() => setCount(count + 1)}/>
            <CustomButton btnTitle={'Change Theme'} onBtnPress={() => setDarkTheme(!darkTheme)}/>
        </View>
    );
};

export default UseMemoExample;
