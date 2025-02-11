import { memo, useEffect } from "react";
import { Text, StyleSheet } from "react-native";

const CustomTextDisplay = (props) => {
    const {txtToDisp,txtStyle} = props;

    console.log(`TextDisplay component rendering`)

    useEffect(()=>{
        console.log(`TextDisplay component re-rendering due to prop change`);
    },[txtToDisp]) 

    return(
        <Text style={{...styles.txtDisp,...txtStyle}}>{txtToDisp||"this is default text"}</Text>
    );
}
const styles = StyleSheet.create({
    txtDisp:{
        marginTop: '20%',
        fontSize:22,
        color: 'blue',
        textAlign:'center',
    }
});

export default memo(CustomTextDisplay);     //optimizing child component re-render
//it will only re-render on state or prop change