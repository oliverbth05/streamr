import React from 'react';

const Header = (props) => {
    
    var tag;
    var styles = [];
    var margins = '';
    
    if (props.light) {
        styles.push('font-light')
    }
    
    if (props.bright) {
        styles.push('white-100')
    }
    
    if (props.center) {
        styles.push('text-center')
    }
    
    if (props.margin) {
        margins = props.margin
    }
    
    if (props.logo) {
        styles.push('logo')
    }
    
    styles = styles.join(' ');
    
    if (props.size === 1) {
        tag = <h1 className = {styles}>{props.children}</h1>
    }
    
    else if(props.size === 2) {
        tag = <h2 className = {styles}>{props.children}</h2>
    }
    
    else if (props.size === 3) {
        tag = <h3 className = {styles}>{props.children}</h3>
    }
    
    if (props.border) {
        return (
            <div className = {'border-header ' + margins}>
                <span></span>
                {tag}
                <span></span>
            </div>
        )
    }
    
    return (tag)
    
    
    
    
    
}

export default Header;
