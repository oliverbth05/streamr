import React            from 'react';
import { Link }         from 'react-router-dom';
import TrackList        from './TrackList/TrackList';
import TagGrid          from './TagGrid';
import Bio              from './Bio';
import FavBarAlbum      from './FavBar/FavBarAlbum';

const AlbumInfo = (props) => {
    
    if (props.image !== undefined) {
        
       
        return (
            <div className = 'album-info'>
                <h1 className = 'heading center'>{props.name}</h1>
                <img alt = {props.name} className = 'album-info__image' src = {props.image[3]['#text']} />
                <Link className = 'album-info__link' to = {'/artist/' + props.artist}>{props.artist}</Link>
                <FavBarAlbum name = {props.name} img = {props.image[3]['#text']} artist = {props.artist} />
                
                {props.wiki ?
                <Bio summary = {props.wiki.summary} content = {props.wiki.content} />
                : null }
                
                <h2 className = 'heading'>Tracks | {props.tracks.length}</h2>
                <TrackList tracks = {props.tracks} />
                
                <h2 className = 'heading'>Tags</h2>
                <TagGrid tags = {props.tags.tag} />
                
                <br />
                <br />
                <br />
            </div>
        )
    }
    
    else {
        return null
    }
}

export default AlbumInfo;