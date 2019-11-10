import React, { Component } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'
import io from 'socket.io-client';



export default class ChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
    }

    componentDidMount() {
        this.socket = io('http://192.168.1.11:3000/', {transports: ['websocket']});
    
        this.socket.on('receiveMessage', (msg) => {
            console.log('chat application', msg);
            this.setState(previousState => ({
                messages: GiftedChat.append(previousState.messages, msg),
            }));
        });
    }

    onSend = (messages = []) => {
        this.socket.emit('sendMessage', messages);
      }


    render() {
        return (
            <View style={{ flex: 1 }}>
                    <GiftedChat
                            messages={this.state.messages}
                            onSend={messages => this.onSend(messages)}
                            user={{
                            _id: 1,
                            }}
                    />
            </View>
        )
    }
}
