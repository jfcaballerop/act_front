import React from 'react';

//components
import { Footer } from 'react-materialize'


class FooterApp extends React.Component {



    render() {
        return (
            <div className="Footer">
                <Footer copyrights="&copy; 2018 - Ines Ingenieros y Consultores S.L." className="footer" >
                </Footer>;
            </div>
        )
    }
}

export default FooterApp;