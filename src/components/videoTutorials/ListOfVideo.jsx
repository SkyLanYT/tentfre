import React from 'react'
import s from './ListOfVideo.module.css'
import Video from './Video';

const ListOfVideo = ({videos}) => {
  return (
    <div className={s.listOfVideo}>
      <ul className={s.videoList}>
        {videos?.slice(1).map((el, idx) => (
          //       // videos.slice(1) вирізаю перше відео, тому що воно не доступне

          <li key={idx} className={s.videoItem}>
            <Video el={el} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfVideo