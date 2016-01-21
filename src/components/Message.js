const Message = React.createClass({

    propTypes: {

        author: React.PropTypes.string,
        messageText: React.PropTypes.string

    },

    getDefaultProps() {
        return {
            author: 'anon',
            messageText: ''
        }
    },

    render: function () {
        return (
            <div>
                <strong>{this.props.author}</strong>: {this.props.messageText}
            </div>
        );
    }
});


export default Message;