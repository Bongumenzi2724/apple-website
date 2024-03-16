import { hightlightsSlides } from "../constants"

const VideoCarousel = () => {
  return (
    <>
        <div className="flex items-center">
            {hightlightsSlides.map((list)=>(
                <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                    <div className="video-carousel_container">
                        <div className="w-full h-full flex-center rounded-3xl overflow-hidded bg-black">
                            <video>
                                <source src={list.video} type="video/mp4"/>
                            </video>
                        </div>
                    </div> 
                </div>
            ))}
        </div>
    </>
  )
}

export default VideoCarousel