import React from 'react';

export default class Error extends React.Component {
  render() {
    const { errorMsg } = this.props.params;
    return (
      <div>
        <h2>An Error Occured</h2>
        <p>{errorMsg}</p>
      </div>
    );
  }
}
