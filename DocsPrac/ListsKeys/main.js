'use strict';

//! Basic List Component with keys

function ListItem(props) {
    return React.createElement(
        'li',
        null,
        props.value
    );
}
function NumberList(props) {
    var numbers = props.numbers;
    var listItems = numbers.map(function (number) {
        return (
            // Keys identify what items have changed, been added or removed
            // Use their item's ID as the key - avoid using index from map function
            // Keys should be on the list item itself like below and not when the item is being returned - el's in the map call need keys
            React.createElement(ListItem, { key: number.toString(), value: number })
        );
    });
    return React.createElement(
        'ul',
        null,
        listItems
    );
}

var numbers = [1, 2, 3, 4, 5];
ReactDOM.render(React.createElement(NumberList, { numbers: numbers }), document.querySelector('#root'));

//! Keys don't need to be globally unique
function Blog(props) {
    var sidebar = React.createElement(
        'ul',
        null,
        props.posts.map(function (post) {
            return React.createElement(
                'li',
                { key: post.id },
                post.title
            );
        })
    );

    var content = props.posts.map(function (post) {
        return React.createElement(
            'div',
            { key: post.id },
            React.createElement(
                'h3',
                null,
                post.title
            ),
            React.createElement(
                'p',
                null,
                post.content
            )
        );
    });
    //! If you need the same key value in your component
    //! Pass it explicitly as a prop with a different name
    // const content = props.posts.map((post) => 
    //     <Post 
    //         key={post.id}
    //         id={post.id}
    //         title = {post.title}
    //     />
    // );
    return React.createElement(
        'div',
        null,
        sidebar,
        React.createElement('hr', null),
        content
    );
}

var posts = [{ id: 1, title: 'Hello World', content: 'Welcome to learning React!' }, { id: 2, title: 'Installation', content: 'You can install React from npm.' }];
ReactDOM.render(React.createElement(Blog, { posts: posts }), document.querySelector('#root'));

//! Alt example with embeding map()
function NumberList(props) {
    var numbers = props.numbers;
    return React.createElement(
        'ul',
        null,
        numbers.map(function (number) {
            return React.createElement(ListItem, { key: number.toString(), value: number });
        })
    );
}