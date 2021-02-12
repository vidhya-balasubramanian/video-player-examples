import React from 'react';
import { withRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <div>	
      <button type="button" onClick={() => props.history.push('/video-js')}>Video JS Example</button><br /><br />
    </div>
  )
}

export default withRouter(App);