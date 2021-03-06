import React from 'react';
import 'react-redux';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc =`https://youtube.com/embed/${video.id.videoId}`
    return (<div>
        <div className="ui embed">
            <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p></div>
    </div>)

}

export default VideoDetail;