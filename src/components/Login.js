import Header from "./Header";

const Login = () => {

    const toggleSignInForm = () => {
        
    }





  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fcfcd5ee-d40a-43d7-bebc-9e9aae7f7798/web/IN-en-20250922-TRIFECTA-perspective_4fd75b17-c493-446a-a3de-3d1ab753c304_large.jpg " alt="netfilx_logo" />
      </div>
      <form className="p-12 bg-black absolute w-4/12 mt-24 mx-auto left-0 right-0 z-10 flex flex-col text-white bg-opacity-65 rounded-md">
      <h1 className="font-bold text-3xl mb-6">Sign In</h1>
        <input type="text"  placeholder="Email Address" 
        className="p-4 my-4 w-full bg-gray-800 rounded-md border bg-opacity-20" />
        <input type="text" placeholder="password"
        className="p-4 my-4 w-full bg-gray-800 rounded-md border bg-opacity-20" />
        <button className="p-3 my-4 w-full text-white bg-[#E50914]  rounded-md text-bold ">Sign In</button>
        <p className="py-4 " onClick={toggleSignInForm} >New to Netflix? Sign Up</p>
      </form>
    </div>
  );
};

export default Login;
