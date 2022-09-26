import React,{useState,useEffect} from 'react'
import YouTube from '@u-wave/react-youtube';

const videos = [
  { id: 'jsBG7oyEey4', name: 'JUNNY - kontra (Feat. Lil Gimch, Keeflow)' },
  { id: 'PYE7jXNjFWw', name: 'T W L V - Follow' },
  { id: 'ld8ugY47cps', name: 'SLCHLD - I can\'t love you anymore' },
];


const hashVideoRx = /^#!\/video\/(\d)$/;
const hash = typeof window.location !== 'undefined'
  ? window.location.hash : ''; // eslint-disable-line no-undef
const defaultVideo = hashVideoRx.test(hash)
  ? parseInt(hash.replace(hashVideoRx, '$1'), 10)
  : 0;


function Player() {

const [videoIndex, setVideoIndex] = useState(defaultVideo);
 
const [paused, setPaused] = useState(false);

  const video = videos[videoIndex];

  function selectVideo(index) {
    setVideoIndex(index);
  }

useEffect(() => {
  
  }, []);
  
  const [playing, setPlaying] = useState(false);

  const handleClick = () =>{
    if(playing){
      setPlaying(false);
    }else{
      setPlaying(true);
    }
  }

  function handlePause(event) {
    setPaused(event.target.checked);
  }

 function handlePlayerPause() {
    setPlaying(true);
  }

  function handlePlayerPlay() {
     setPlaying(false);
  }

    return (
    <div className="row" style={{width: '100%'}}>
      <div className="col s4">
              
              <div className="collection">
                {videos.map((choice, index) => (
                  <a
                    key={choice.id}
                    href={`#!/video/${index}`}
                    className={`collection-item ${video === choice ? 'active' : ''}`}
                    onClick={() => selectVideo(index)}
                  >
                    {choice.name}
                  </a>
                ))}
              </div>
              
              {/* <p>
                <label htmlFor="paused">
                  <input
                    type="checkbox"
                    id="paused"
                    checked={playing}
                    onChange={handleClick}
                  />
                  <span>Paused</span>
                </label>
              </p> */}

              <button onClick={handleClick}>play</button>
              
      </div>
      
      <div className="col s8 center-align">
        <YouTube
          video={video.id}
          width={640}
          height={480}
          autoplay={false}
          controls={true}
          paused={playing}
          onPause={handlePlayerPause}
          onPlaying={handlePlayerPlay}
        />
      </div>
    </div>
 
    )
}

export default Player
