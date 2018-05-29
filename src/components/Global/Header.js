//Dependencies
import React from 'react';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';

//components
import NavBarSga from '../NavBarSga'

//Assets
import './css/index.css'


class Header extends React.Component {
    static PropTypes = {
        title: PropTypes.string.isRequired,
        location: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        const { location, history } = this.props;

        this.state = {
            path: this.props.location.path,
            history: this.props.location.history,
            administracion: false
        }
    }

    componentDidMount() {
        const { children, match, location, history } = this.props;

        console.log(this.state.path)
        switch (this.state.path) {
            case "/Home":
                this.setState((prevState, props) => ({
                    administracion: false
                }))

                break;
            case /administracion/:
                this.setState((prevState, props) => ({
                    administracion: true
                }))

                break;

            default:
                break;
        }
    }

    render() {
        const { children, match, location, history } = this.props;

        const { title, path } = this.props;
        console.log('** HOME **::', title);
        return (
            <div className="Header">
                <NavBarSga title={title} history={this.state.history} administracion={this.state.administracion} />
            </div>
        );
    }
}
export default withRouter(Header);

// export default Header;