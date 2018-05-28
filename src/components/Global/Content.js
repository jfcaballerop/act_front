import React, { Component } from 'react';
import PropTypes from 'prop-types';

//components
import ContainerMain from '../ContainerMain';
import Mapa from '../Maps';


class Content extends Component {
    static PropTypes = {
        body: PropTypes.object.isRequired
    };

    render() {
        const { body } = this.props;

        return (
            <div className="content">
                {body}
            </div>
        );
    }
}

export default Content;