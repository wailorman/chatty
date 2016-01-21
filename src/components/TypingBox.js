const TypingBox = React.createClass({
    propTypes: {
        onSend: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            onSend: ()=> {
            }
        };
    },

    getInitialState() {
        return {
            messageText: ""
        };
    },


    handleChange(event) {
        const newMessageText = event.target.value || "";

        this.setState({
            messageText: newMessageText
        });
    },

    handleClick() {

        this.props.onSend({text: this.state.messageText});

    },

    render() {
        return (
            <div>
                <input type="text" value={this.state.messageText} onChange={this.handleChange} placeholder="Text..."/>
                <button onClick={this.handleClick}>Send</button>
            </div>
        );
    }
});

export default TypingBox;
