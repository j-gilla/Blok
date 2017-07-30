import React from 'react';

export default class SpotifyLogin extends React.Component{
  render() {
    const {children} = this.props
    return(
      <div>
        <div className='someheading'>
          <h1>This is the SpotifyLogin component</h1>
        </div>
        <div className='p-styles'>
          <p>This is an example of the Authorization Code flow using routes.</p>
        </div>
        {children}
      </div>
    )
  }
};
