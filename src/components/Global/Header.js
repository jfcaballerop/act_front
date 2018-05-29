//Dependencies
import React from 'react';
import PropTypes from 'prop-types'

//components
import NavBarSga from '../NavBarSga'

//Assets
import './css/index.css'


class Header extends React.Component {
    static PropTypes = {
        title: PropTypes.string.isRequired
    };


    render() {
        const { title } = this.props;
        console.log('** HOME **::', title);

        return (
            <div className="Header">
                <NavBarSga title={title}  history={this.props.history} administracion={this.props.administracion} />
            </div>
        );
    }
}

export default Header;