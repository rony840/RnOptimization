import { memo } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CustomButton = (props) => {
    const {onBtnPress,btnTitle} = props;
    console.log(`Button component rendering`);
    return(
        <TouchableOpacity
        style={styles.btnStyle}
        onPress={onBtnPress}>
        <Text style={styles.btnTitle}> {btnTitle||"Default Title"} </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    btnStyle:{
        marginTop:'20%',
        backgroundColor: 'green',
        borderRadius: 20,
        borderWidth:2,
        width: "50%",
        height: 60,
        alignItems:'center',
        justifyContent:'center'
    },
    btnTitle:{
        color:'white',
        fontSize: 18,
        fontWeight: 600,
    }

});

export default memo(CustomButton);