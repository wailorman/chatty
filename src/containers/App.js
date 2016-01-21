import Message from '../components/Message'
import TypingBox from '../components/TypingBox'
import { sendMessage } from '../actions'
import reducer from '../reducer'
import store from '../store'


const App = React.createClass({

    propTypes: {
        store: React.PropTypes.object.isRequired
    },

    componentWillMount(){
        this.props.store.subscribe(()=> {
            this.forceUpdate();
        });
    },

    handleMessageSend(args) {
        let messageText = args.messageText;
        this.props.store.dispatch(sendMessage(messageText));
    },

    render() {
        const messages = this.props.store.getState().messages;

        return (
            <div>
                {messages.map((message)=> {
                    return (
                        <Message key={message.id} author={message.author} messageText={message.messageText}/>
                    );
                })}
                <TypingBox onSend={this.handleMessageSend}/>
            </div>
        );
    }
});

export default App;