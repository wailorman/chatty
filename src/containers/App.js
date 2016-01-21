import Message from '../components/Message'

const App = React.createClass({
    render: function () {
        return (
            <div>
                <Message author="Mike" text="Hey, noobs"/>
            </div>
        );
    }
});

export default App;