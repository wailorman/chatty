const Message = React.createClass({

    propTypes: {

        author: React.PropTypes.string,
        text: React.PropTypes.string

    },

    getDefaultProps() {
        return {
            author: 'anon',
            text: ''
        }
    },

    render: function () {
        return (
            <div>
                <strong>{this.props.author}</strong>: {this.props.text}
            </div>
        );
    }
});


export default Message;