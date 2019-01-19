import React, { PureComponent } from 'react';

import LogoSVG from '../../images/icons/logo.svg';
import LogoPNG from '../../images/logo.png';

export class Home extends PureComponent {
  static propTypes = {

  };

  render() {
    return (
      <div>
        Homepage

        <img src={LogoPNG} style={{ width: '100px' }} alt="" />
        <LogoSVG style={{ width: '100px' }} />
      </div>
    );
  }
}
