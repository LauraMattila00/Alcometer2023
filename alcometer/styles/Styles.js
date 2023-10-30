import { StyleSheet, StatusBar } from "react-native";

const lightStyle = StyleSheet.create({
    container : {
        marginTop: StatusBar.currentHeight + 5,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    view: {
        margin: 10,
        alignItems: 'center'
    },
    radio: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#3c636b',
        margin: 5,
        padding: 15,
        borderWidth: 2,
        borderRadius: 8,
        alignItems: 'center'
    },
    header: {
        fontSize: 50,
        margin: 15,
        fontWeight: 'bold',
        color: '#3c636b'
    },
    text: {
        fontSize: 18,
        margin: 8
    },
    textInput: {
        width: 130,
        margin: 10
    }
  })

  const darkStyle = StyleSheet.create({
    ...lightStyle,
    container: {
        ...lightStyle.container,
        backgroundColor: '#3c636b',
        color: 'white'
    },
    header: {
        ...lightStyle.header,
        color: 'white'
    },
    text: {
        ...lightStyle.text,
        color: 'white'
    },
    button: {
        ...lightStyle.button,
        color: 'white',
        borderColor: 'white'
    }
  })


  export {lightStyle, darkStyle};
  