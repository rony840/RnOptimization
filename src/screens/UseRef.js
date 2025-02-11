import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import CustomTextDisplay from "../components/CustomTextDisplay";
import CustomButton from "../components/CustomButton";

const UseRef = () => {
    const [count, setCount] = useState(0);
    const renders = useRef(0); // `useRef` does NOT trigger re-renders
    const refValue = useRef(100); // Example of storing a value without causing re-renders

    renders.current += 1; // Updating ref, but this won't trigger a re-render
    console.log('Rendering UseRefExample...');

    return (
        <View style={styles.container}>
            <CustomTextDisplay txtToDisp={"Count: "+count}/>
            <CustomTextDisplay txtToDisp={"Component Re-renders: "+renders.current}/>
            <CustomTextDisplay txtToDisp={"useRef value, will only change on re-render caused by setCount\nUseRef Value:"+refValue.current}/>
            <CustomButton btnTitle={"Increment Count"} onBtnPress={() => setCount(count + 1)}/>
            <CustomButton btnTitle={"Update Ref"} onBtnPress={() => console.log('Updated Ref Value: ',refValue.current += 10)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        alignItems: "center",
    },
})

export default UseRef;
