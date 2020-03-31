import React from 'react';
import 'react-redux';

const VideoItem = ({video, onVideoSelect}) =>{
        return (
            <div onClick={()=> onVideoSelect(video)} className="item">
                    <img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url}/>
                    <div className="content"><div className="header">{video.snippet.title}</div></div>

            </div>
        )


}

export default VideoItem;