import React, { Component } from 'react';

//components
import ContainerMain from '../ContainerMain';
import Mapa from '../Maps';
import './css/index.css'


class Container extends Component {



    render() {
        return (
            <div className="content">
                <ContainerMain mapa={<Mapa />} />
            </div>
        );
    }
}

export default Container;