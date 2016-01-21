import Message from '../components/Message'
import TypingBox from '../components/TypingBox'
import { sendMessage, changeAuthor } from '../actions'
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

    handleAuthorChange(args){
        let newAuthor = args.author;
        this.props.store.dispatch(changeAuthor(newAuthor));
    },

    handleMessageSend(args) {
        let newMessageText = args.messageText;
        this.props.store.dispatch(sendMessage(newMessageText));
    },

    render() {
        const state = this.props.store.getState();

        return (
            <div>
                {state.messages.map((message)=> {
                    return (
                        <Message key={message.id} author={message.author} messageText={message.messageText}/>
                    );
                })}
                <TypingBox author={state.author}
                           onAuthorChange={this.handleAuthorChange} onSend={this.handleMessageSend}/>
            </div>
        );
    }
});

export default App;