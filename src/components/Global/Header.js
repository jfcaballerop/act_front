import React from 'react';

//components
import NavBarSga from '../NavBarSga'
import './css/index.css'


class Header extends React.Component {



    render() {
        return (
            <div className="Header">
                <NavBarSga history={this.props.history} administracion={false} />
            </div>
        );
    }
}

export default Header;