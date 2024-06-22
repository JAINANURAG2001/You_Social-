import React from 'react'
import VideoCard from './VideoCard'

const VIDEOS=[{
    title:"How to do coding in this beautiful world " ,author:"CodeTutuorial",
    views:"14M" ,
    timestamp:"13daysago",
    image:"photo.jpg",
    thumbImage:"logo.jpg"
},{
    title:"How to do videoediting in this beautiful world " ,author:"CodeTutuorial",
    views:"14M" ,
    timestamp:"13daysago",
    image:"photo.jpg",
    thumbImage:"logo.jpg"
},{
    title:"How to do programming in this beautiful world " ,author:"CodeTutuorial",
    views:"14M" ,
    timestamp:"13daysago",
    image:"photo.jpg",
    thumbImage:"logo.jpg"
},{
    title:"How to do programming in this beautiful world " ,author:"CodeTutuorial",
    views:"14M" ,
    timestamp:"13daysago",
    image:"photo.jpg",
    thumbImage:"logo.jpg"
},{
    title:"How to do programming in this beautiful world " ,author:"CodeTutuorial",
    views:"14M" ,
    timestamp:"13daysago",
    image:"photo.jpg",
    thumbImage:"logo.jpg"
}]

function VideoGrid() {
  return (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        {
            VIDEOS.map(video=><div>
              <VideoCard title={video.title }author={video.author}views={video.views} timestamp={video.timestamp} image={video.image}thumbImage={video.thumbImage} />
            </div>)

        }
    
        </div>
  )
}

export default VideoGrid