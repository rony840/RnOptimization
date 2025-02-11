import { memo } from "react";
import { TextInput, StyleSheet } from "react-native";


const CustomTextEntry = (props) => {
    const {inputPlaceholder, onInputText} = props;
    console.log(`Text Entry component rendering`);

    return(
        <TextInput
        style={styles.txtInput}
        placeholder={inputPlaceholder || "this is default placeholder"}
        onChangeText={onInputText}
        />
    );

}
const styles = StyleSheet.create({
    txtInput:{
        padding: 10,
        marginTop: '20%',
        backgroundColor: '#d3d3d3',
        borderColor: 'red',
        borderRadius: 20,
        borderWidth:2,
        width: '80%',
        height: 70,
        fontSize:20

    }
});

export default memo(CustomTextEntry);