import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default class LoginScreen extends React.Component {

    state = {
        name: ""
    }

    continue = () => {
        this.props.navigation.navigate("Chat", {name: this.state.name})
    }

    render(){
        return (
        <View style={styles.container}>
            <View style={styles.circle}/>
            <View style={{ marginTop: 100 }}>
                <Image 
                    source={require("../../assets/chat.png")} 
                    style={styles.imagem}
                />
                <View style={{ marginHorizontal: 32 }}>
                    <Text style={styles.header}>Nome do usuário</Text>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Seu nome" 
                        onChangeText={name => {this.setState({name})}}
                        value={this.state.name} 
                    />
                    <View style={styles.botao}>
                        <TouchableOpacity style={styles.continue} onPress={this.continue}>
                            <Ionicons name="md-arrow-round-forward" size={24} color="#FFF"/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.areaDev}>
                      <Text style={styles.textDev}>Feito por: André Oliveira Cunha</Text>
                    </View>
                </View>
            </View>
        </View>
        );
    }
}
