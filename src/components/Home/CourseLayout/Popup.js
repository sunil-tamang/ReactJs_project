import React, {useState, useEffect,} from 'react';

import { withStyles } from '@material-ui/core/styles';

import Dialog from '@material-ui/core/Dialog';

import CloseIcon from '@material-ui/icons/Close';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CardMedia from '@material-ui/core/CardMedia'

import Vimeo from '@u-wave/react-vimeo';
import YouTube from '@u-wave/react-youtube';

import './Popup.css';

export default function Popup(props) {

// const videos = [
//   { url: 'https://vimeo.com/192376447', name: 'Jambinai - Connection' },
//   { url: 'https://vimeo.com/174010441', name: 'Jambinai - They Keep Silence' },
//   { url: 'https://vimeo.com/191430328', name: 'Hoody - Like You' },
// ]; 
   
// const [ videoIndex, setvideoIndex ] = useState(0);
// const video = videos[videoIndex];


const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      
     <svg onClick={handleClickOpen} width="30px" height="30px" viewBox="0 0 80 80" class="">
        <path d="M40 0c-7.911 0-15.645 2.346-22.223 6.741s-11.705 10.642-14.732 17.951c-3.028 7.309-3.82 15.352-2.276 23.111s5.353 14.887 10.947 20.481c5.594 5.594 12.721 9.404 20.481 10.947s15.802 0.751 23.111-2.276c7.309-3.028 13.556-8.155 17.951-14.733s6.741-14.311 6.741-22.223c-0.011-10.605-4.229-20.773-11.728-28.272s-17.667-11.717-28.272-11.728v0zM55.344 43.61l-18.174 10.461c-0.621 0.369-1.329 0.567-2.051 0.575-0.736-0-1.459-0.199-2.092-0.575-0.634-0.356-1.161-0.874-1.529-1.501s-0.562-1.341-0.564-2.068v-21.005c0.001-0.727 0.196-1.44 0.564-2.068s0.895-1.145 1.529-1.501c0.624-0.36 1.331-0.55 2.051-0.55s1.428 0.19 2.051 0.55l18.174 10.461c0.651 0.351 1.195 0.873 1.575 1.508s0.58 1.362 0.58 2.102-0.2 1.466-0.58 2.102c-0.379 0.635-0.923 1.157-1.575 1.508h0.041z" fill="#121212" fill-rule="unset" clip-rule="unset" stroke-linecap="butt" stroke-linejoin="miter"></path>
     </svg>


      <Dialog className="dialog" onClose={handleClose} open={open}>
           
          <div className="min-dialog">
                
                <div className="customized-dialog-title" onClose={handleClose}>
                      <CloseIcon style={{width: '40px', height: '40px'}} onClick={handleClose} />
                </div>
              
                <div className="">
                    {/* <Vimeo
                      // video={ props.src}
                      video={props.src } 
                      width={600}
                      height={500}
                      autoplay
                      // volume={volume}
                      // paused={paused}
                      // onPause={this.handlePlayerPause}
                      // onPlay={this.handlePlayerPlay}
                    /> */}
                      <YouTube
                        // title={props.src}
                        video={props.src}
                        allowFullScreen
                        autoplay
                        frameBorder="0"
                        height="100%"
                        width="100%"
                        style={{borderRadius:'10px'}}
                        // allow="accelerometer; autoplay;  gyroscope; picture-in-picture"
                    />
                  </div>

             </div>

              
      </Dialog>
    </>
  );
}
