import { StyleSheet, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import CustomTextDisplay from "../components/CustomTextDisplay";
import CustomTextEntry from "../components/CustomTextEntry";
import CustomButton from "../components/CustomButton";

const Optimized = () => {
    const [count, setCount] = useState(10);
    const [mounted,setMounted]= useState(false)
    
    const compute = useCallback(() => {
        setCount(prevCount => prevCount + 5);
        console.log("Stale count inside usecallback:", count);
    }, []);

    useEffect(()=>{
        if (mounted){
            console.log(`Optimized Screen component re-rendering`);
        }
    },[count]) //useEffect runs only on mounting phase

    useEffect(()=>{
        setMounted(true)
        console.log(`Optimized Screen component mounted`)
    },[]) //useEffect runs only on mounting phase

    return (
        <View style={styles.container}>
            <CustomTextDisplay txtToDisp={"I am same as the count component but no state changes in me so I don’t re-render, I use memo"} />
            <CustomTextEntry />
            <CustomTextDisplay txtToDisp={"Count using useCallback: "+count} />
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

export default Optimized;
