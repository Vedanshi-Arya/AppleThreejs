import React,{useState, useRef, useEffect} from 'react'
import { hightlightsSlides} from '../constants'

function VideoCarousel() {

    const videoRef=useRef([]);
    const videoSpanRef=useRef([]);
    const videoDivRef=useRef([]);

    const [video,setVideo]=useState({
        isEnd:false,
        startPlay:false,
        videoId:0,
        isLastVideo:false,
        isPlaying:false,

    })

    const {isEnd , isLastVideo , startPlay,videoId,isPlaying}=video;

    useEffect(()=>{

    },[videoId, startPlay ])

  return (
    <>
    <div className='flex items-center'>
        {hightlightsSlides.map((list,i)=>(
            <div key={list.id} id="slider" className='sm:pr-20 pr-10'>
                <div className='video-carousel_container'>
                    <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                        <video id="video" playsInline={true} preload='auto' muted>
                            <source src={list.video} type="video/mp4"></source>
                        </video> 
                    </div>

                    <div className='absolute top-12 left-[5%] z-10'>
                        {list.textLists.map((text)=>(
                            <p key={text} className='md:text-2xl text-xl font-medium'>
                                {text}</p>
                        ))}

                    </div>
                </div>
            </div>
        ))}
    </div>
    </>
    
    // for immediate return of anything we use parenthesis not curly braces
  )
}

export default VideoCarousel