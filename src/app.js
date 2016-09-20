var React = require('react');
var ReactDOM = require('react-dom');

// コンポーネント名の頭文字は大文字にする
var HelloReact = React.createClass({
  render: function () {
    return (
      <div>
        Hello React!!
      </div>
    );
  }
});

var LikeButton = React.createClass( {
  render() {
    return (
      <span>いいねボタン予定地</span>
    );
  }
});

ReactDOM.render(
  <HelloReact />,
  <LikeButton />,
  document.querySelector(".content")
);
