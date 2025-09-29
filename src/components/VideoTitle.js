const VideoTitle = ({title, overview}) => {
  return (
    <div className="px-24 pt-[10%] absolute text-white w-screen aspect-video bg-gradient-to-r from-black" >
      <h1 className="text-bold text-2xl  ">{title}</h1>
      <p className="py-6 text-lg p-8 w-1/4">{overview}</p>
      <div >
        <button className="p-4 px-12 mx-4 text-xl bg-white text-black bg-opacity-50 rounded-md hover:bg-opacity-30">Play</button>
        <button className="p-4 px-12 mx-4 text-xl bg-white text-black bg-opacity-50 rounded-md hover:bg-opacity-30">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle; 
