import ListOfVideo from 'components/videoTutorials/ListOfVideo';
import React, { useEffect, useState } from 'react';

const YOU_TUBE_APIKEY = process.env.REACT_APP_YOU_TUBE_APIKEY;
const CHANEL_ID = process.env.REACT_APP_CHANNEL_ID;

const VideoTutorialsPage = () => {
  const [videos, setVideos] = useState(JSON.parse(localStorage.getItem("videos"))||[]);

 useEffect(() => {
   if (!videos.length) {
     const fetchVideos = async () => {
       try {
         const response = await fetch(
           `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANEL_ID}&key=${YOU_TUBE_APIKEY}`
         );
         const { items } = await response.json();
         localStorage.setItem('videos', JSON.stringify(items));
         //  Локал сторейдж для того, щоб зайвий раз не посилати запит до ютюб
         setVideos(items);
       } catch (error) {
         console.error('Error fetching videos:', error.message);
       }
     };
     fetchVideos();
   }
 }, [videos.length]);

  return (
    // <div>
    //   <div className="video-container">
    //     {videos.slice(1).map(video => (
    //       // videos.slice(1) вирізаю перше відео, тому що воно не доступне
    //       <div key={video.etag} className="video-wrapper">
    //         <h2>{video.snippet.title }</h2>
    //         <iframe
    //           title={video.snippet.title}
    //           width="560"
    //           height="315"
    //           src={`https://www.youtube.com/embed/${video.id.videoId}`}
    //           frameBorder="0"
    //           allowFullScreen
    //         ></iframe>
    //         <p>
    //           {video.snippet.localized?.description ||
    //             video.snippet.description}
    //         </p>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <ListOfVideo videos={videos} />
  );
};

export default VideoTutorialsPage;
