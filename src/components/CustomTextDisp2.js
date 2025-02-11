import { useEffect } from "react";
import { Text, StyleSheet } from "react-native";

const CustomTextDisp2 = (props) => {
    const {txtToDisp} = props;
    console.log(`TextToDisp2 component rendering un-necessarily`)

    useEffect(()=>{
        console.log(`TextToDisp2 component re-rendering due to prop change`);
    },[txtToDisp])
    
    return(
        <Text style={styles.txtDisp}>{txtToDisp||"this is default text"}</Text>
    );

}
const styles = StyleSheet.create({
    txtDisp:{
        marginTop: '20%',
        fontSize:18,
        color: 'blue',
    }
});

export default CustomTextDisp2;         //not using memo in this component
// so it will re-render even its state or props are not changed