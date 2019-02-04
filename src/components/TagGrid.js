import React  from 'react';
import {Link} from 'react-router-dom';

const TagGrid = (props) => {
    
    const tagsMapped = props.tags.map((tag, index) => {
        return <Link key = {index} to = {'/tag/' + tag.name} className = 'tag'>{tag.name}</Link>
    })

    return (
        <div className = 'flex-grid'>
            {tagsMapped}
        </div>
    )
}

export default TagGrid;