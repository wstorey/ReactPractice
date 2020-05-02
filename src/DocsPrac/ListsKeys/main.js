'use strict';

//! Basic List Component with keys
function ListItem(props) {
    return <li>{props.value}</li>
}
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) => 
        // Keys identify what items have changed, been added or removed
        // Use their item's ID as the key - avoid using index from map function
        // Keys should be on the list item itself like below and not when the item is being returned - el's in the map call need keys
        <ListItem key={number.toString()} value={number} />
    );
    return (
        <ul>{listItems}</ul>
    );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.querySelector('#root')
);

//! Keys don't need to be globally unique
function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => 
                <li key={post.id}>
                    {post.title}
                </li>
            )}
        </ul>
    );

    const content = props.posts.map((post) => 
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
    //! If you need the same key value in your component
    //! Pass it explicitly as a prop with a different name
    // const content = props.posts.map((post) => 
    //     <Post 
    //         key={post.id}
    //         id={post.id}
    //         title = {post.title}
    //     />
    // );
    return (
        <div>
            {sidebar}
            <hr/>
            {content}
        </div>
    );
}

const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
ReactDOM.render(
    <Blog posts={posts} />,
    document.querySelector('#root')
);

//! Alt example with embeding map()
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) => 
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>
    );
}