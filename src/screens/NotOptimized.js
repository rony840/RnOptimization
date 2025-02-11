import { StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import CustomTextDisplay from "../components/CustomTextDisplay";
import CustomButton from "../components/CustomButton";
import CustomTextDisp2 from "../components/CustomTextDisp2";
import CustomTextEntry2 from "../components/CustomTextEntry2";

const NotOptimized = () => {
    const [count, setCount] = useState(10);
    const [mounted,setMounted]= useState(false)

    // Corrected useCallback with functional state update
    const compute = () => {
        setCount(prevCount => prevCount + 5);
        console.log("Stale count 2 :", count);
    };

    useEffect(()=>{
        if (mounted){
            console.log(`Not Optimized Screen component re-rendering`);
        }
    },[count]) //useEffect runs only on mounting phase

    useEffect(()=>{
        console.log(`Not optimized screen component mounted`)
        setMounted(true)
    },[]) //useEffect runs only on mounting phase
    console.log(`Not Optimized Screen component re-rendering`)
    
    return (
        <View style={styles.container}>
            <CustomTextDisp2 txtToDisp={"I will always re-render with Home screen"} />
            <CustomTextEntry2 />
            <CustomTextDisplay txtToDisp={"Count without useCallback: "+count} />
            <CustomButton btnTitle={"Increment"} onBtnPress={compute} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 30,
        flex: 1,
        alignItems: "center",
    },
});

export default NotOptimized;
