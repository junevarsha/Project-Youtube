import React from 'react'
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	var videoListItem = props.videos.map((video) => {
							return <VideoListItem video={video} />
						});

	

	return (
		<ul className="col-md-4 list-group">
		{videoListItem}
		</ul>

	);
}

export default VideoList;