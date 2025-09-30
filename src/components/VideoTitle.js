const VideoTitle = ({title, overview}) => {
  return (
    <div className="px-24 pt-[10%] absolute text-white w-screen aspect-video bg-gradient-to-r from-black" >
      <h1 className="text-bold text-xl  ">{title}</h1>
      <p className="py-2  w-80">{overview}</p>
      <div className="pt-2">
        <button className="p-2 px-10 mx-2 text-xl bg-white text-black bg-opacity-50 rounded-md hover:bg-opacity-30"> |> Play</button>
        <button className="p-2 px-10 mx-2 text-xl bg-white text-black bg-opacity-50 rounded-md hover:bg-opacity-30">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle; 
