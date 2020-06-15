import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F5F7',
      },
      circle:{
        width: 500,
        height: 500,
        borderRadius: 300,
        backgroundColor: "#FFF",
        position: "absolute",
        left: 10,
        top: -5,
      },
      header:{
        fontWeight: "700",
        fontSize: 25,
        color: "#514E5A",
        marginTop: 32,
      },
      input:{
        marginTop: 15,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#000",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "500",
        fontSize: 17,
      },
      continue:{
        width: 70,
        height: 70,
        borderRadius: 70/2,
        backgroundColor: "#3596F3",
        alignItems: "center",
        justifyContent: "center",
      },
      areaDev:{
        alignItems: 'center',
        marginTop: 200,
      },
      textDev:{
        fontWeight: '700',
        fontSize: 20,
        color: '#B7B7B7'
      },
      imagem:{
        width:100, 
        height: 100, 
        alignSelf: 'center',
      },
      botao: {
        alignItems:"flex-end", 
        marginTop: 64,
      }
});