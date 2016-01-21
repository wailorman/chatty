import Message from '../components/Message'
import TypingBox from '../components/TypingBox'

const App = React.createClass({
    handleMessageSend(args) {},

    render() {
        return (
            <div>
                <Message author="Mike" text="Hey, noobs"/>
                <TypingBox onSend={}/>
            </div>
        );
    }
});

export default App;