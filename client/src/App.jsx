import React from 'react';

export default class SpotifyLogin extends React.Component{
  render() {
    const {children} = this.props
    return(
      <div>
          <h1>This is the SpotifyLogin component</h1>
          <p>This is an example of the Authorization Code flow using routes.</p>
        {children}
      </div>
    )
  }
};
