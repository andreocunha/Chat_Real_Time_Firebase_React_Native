import React from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Fire from '../../Fire';
import styles from './styles';


export default class ChatScreen extends React.Component {
    state = {
        messages: []
    }

    get user(){
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }

    componentDidMount() {
        Fire.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
        })))
    }

    componentWillUnmount(){
        Fire.off();
    }

    render(){
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}/>
        
        if (Platform.OS === 'android'){
            return(
                <KeyboardAvoidingView style={styles.container}>
                    {chat}
                </KeyboardAvoidingView>
            )
        }
        
        return <SafeAreaView style={styles.container}>{chat}</SafeAreaView>
    }
}
