import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggeleGPTSearchView } from "../utils/GPTSlice";
import lang from "../utils/languageConstants";
import { changeLangauage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  // data from redux store 
  const user = useSelector((store) => store.user);
  const showGPTSearch =  useSelector((store) => store.GPT.showGPTSearch)
  const dispatch = useDispatch();

  const handleLanguageChange = (e) =>{
  dispatch(changeLangauage(e.target.value))    
  }
  const handleGPTSearchClick = () => {
    // toggle gpt search button
    dispatch(toggeleGPTSearchView());
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  // navigate 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute 'w-44 px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      <img className="w-44" src={LOGO_URL} />
      {user && (
        <div className="flex p-2">
          { showGPTSearch &&
            <select className="py-2 px-4 mx-4 my-2 bg-red-900 rounded-md" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => (

              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
              
            ))}
          </select>
          }

          <button
            className="py-2 px-4 mx-4 my-2 bg-red-900 rounded-md"
            onClick={handleGPTSearchClick}
          >
            { showGPTSearch ? "Home Page" :"Search GPT"}
          </button>
          <img className="w-12 h-12" alt="" src={USER_AVATAR} />
          <button className="text-bold text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
