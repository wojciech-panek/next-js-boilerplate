import React from 'react';
import ReactDOM from 'react-dom';
import { createDevTools } from 'redux-devtools';
import { Provider } from 'react-redux';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';


export const Component = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-w"
    defaultIsVisible={false}
  >
    <LogMonitor />
  </DockMonitor>
);

export const appendToDOM = (store) => {
  const devToolsRoot = window.document.createElement('div');
  window.document.body.appendChild(devToolsRoot);

  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    devToolsRoot
  );
};
