import * as React from 'react';
import './style.css';
// Parent text (I need to be updated from my child) should be updated (Using Callback) when Child button below is clicked.
// Feel free to use any string to update the parent's current string.
export default function App() {
  function Child() {
    return (
      <div>
        <div>Child</div>
        <button>Change Parent Value</button>
      </div>
    );
  }

  function Parent() {
    const [value, setValue] = React.useState(
      'I need to be updated from my child'
    );

    return (
      <div>
        <h3>Update Parent State Challenge</h3>
        <span>
          Parent text (I need to be updated from my child) should be updated
          when Child button below is clicked.
          <br />
          <br />
          Feel free to use any string to update the parent's current string.
        </span>
        <br />
        <br />
        <div className="wrapper">
          <div>Parent</div>
          <div className="box-wrapper">{value}</div>
        </div>

        <div className="wrapper">
          <Child />
        </div>
      </div>
    );
  }
  return <Parent />;
}
