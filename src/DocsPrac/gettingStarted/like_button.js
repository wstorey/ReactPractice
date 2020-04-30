'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render() {
        if (this.state.liked) {
            return `You liked #${this.props.commentID}`;
        }
        
        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
}

// Find DOM containers, and render Like buttons into them
document.querySelectorAll('.like_button_container')
    .forEach(domContainer => {
        // Read comment ID from data-* attribute
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(LikeButton, { commentID }),
            domContainer
        );
    });