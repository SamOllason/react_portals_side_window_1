import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from './Portal';

const showingStyle = {
    marginRight: '0',

    zIndex: 2000,
    height: '100%',
    width: '25%',
    position: 'fixed',
    right: 0,
    top: 0,
    backgroundColor: ' #f9f9f9',
    boxShadow: '-2px 2px 5px grey',
    display: 'flex',

    transition: 'all 0.25s ease',
    WebkitTransition: 'all 0.25s ease',
    MozTransition: 'all 0.25s ease',
    Otransition: 'all 0.25s ease',
};

const hiddenStyle = {
    marginRight: '-25%',

    zIndex: 2000,
    height: '100%',
    width: '25%',
    position: 'fixed',
    right: 0,
    top: 0,
    backgroundColor: ' #f9f9f9',
    boxShadow: '-2px 2px 5px grey',
    display: 'flex',

    transition: 'all 0.25s ease',
    WebkitTransition: 'all 0.25s ease',
    MozTransition: 'all 0.25s ease',
    Otransition: 'all 0.25s ease',
};

class SidePanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Portal>
                <div style={this.props.showPanel ? showingStyle : hiddenStyle}>
                    Side Panel
                </div>
            </Portal>
        );
    }
}

// Reinforces types in our component, passing a wrong type throws warning in console
SidePanel.propTypes = {
    showPanel: PropTypes.bool.isRequired,
};

export default SidePanel