import React, { Component } from 'react';

import ToolbarCV from '../ToolbarCV/ToolbarCV.jsx';
import BannerCV from '../BannerCV/BannerCV.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <ToolbarCV />
          <BannerCV />
        </header>
      </div>
    );
  }
}

export default App;
