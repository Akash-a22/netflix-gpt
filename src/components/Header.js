import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const navigateToHome = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unSubscribes = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(addUser(user));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unSubscribes();
  }, []);
  const user = useSelector((store) => store.user.user);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 hover:cursor-pointer"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>
      {user && (
        <div className="flex justify-between my-4">
          <img
            className="w-10 h-10  p-2 mx-4"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="user logo"
          />
          <button
            onClick={navigateToHome}
            className="bg-red-200 rounded-sm p-2 h-8 w-30 hover:bg-red-400 "
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
