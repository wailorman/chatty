const TypingBox = React.createClass({
    propTypes: {
        onSend: React.PropTypes.func
    },

    getDefaultProps() {
        return {
            author: "Olive",
            onSend: ()=> {},
            onAuthorChange: ()=>{}
        };
    },

    getInitialState() {
        return {
            author: this.props.author,
            messageText: ""
        };
    },

    handleAuthorChange(event){
        const newAuthor = event.target.value || "";

        this.setState({
            author: newAuthor
        });

        this.props.onAuthorChange({author: newAuthor});
    },

    handleMessageTextChange(event) {
        const newMessageText = event.target.value || "";

        this.setState({
            messageText: newMessageText
        });
    },

    handleClick() {

        this.props.onSend({messageText: this.state.messageText});

    },

    render() {
        return (
            <div>
                <input type="text" size="5" value={this.state.author} onChange={this.handleAuthorChange}/>
                <input type="text" value={this.state.messageText} onChange={this.handleMessageTextChange} placeholder="Text..."/>
                <button onClick={this.handleClick}>Send</button>
            </div>
        );
    }
});

export default TypingBox;
