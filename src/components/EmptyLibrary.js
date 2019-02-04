import React from 'react';

const EmptyLibrary = (props) => {
    
    var article = 'a';
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (var i = 0; i < vowels.length; i ++) {
        if (props.media[0] === vowels[i]) {
            article = 'an';
            break
        }
    }
    
    
    return (
        <div className = 'empty-lib'><p>No {props.media}s saved. Add {props.media}s to your library by clicking the <i class="fas fa-star"></i> icon when you visit {article} {props.media}'s page.</p></div>
        )
}

export default EmptyLibrary;