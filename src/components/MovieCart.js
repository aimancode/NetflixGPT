import  {IMG_CDN_URL} from "../utils/constants"
const MovieCart = ({posterPath}) => {
  return (
<div className="w-32 h-auto rounded-lg p-1 flex-shrink-0">
  <img
    alt="Movie Card"
    src={IMG_CDN_URL + posterPath}
    className="w-full h-auto object-cover rounded-lg"
  />
</div>
  )
}

export default MovieCart;