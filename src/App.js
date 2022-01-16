import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

// components
import Dashboard from "./pages/Dashboard";
import GroupCreationPage from "./pages/GroupCreationPage";
import LoginPage from "./pages/Login";
import NotFound404 from "./pages/NotFound404";
import PrivateWrapper from "./routing/PrivateWrapper";
import "./index.css";

// recoil atom
import { isAuthenticated } from "./atom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link
        className="bg-blue-400  px-1 py-1 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow m-1"
        to="/login"
      >
        Login
      </Link>
      <Link
        className="bg-blue-400  px-1 py-1 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow m-1"
        to="/group"
      >
        Group Creation
      </Link>
      <Link
        className="bg-blue-400  px-1 py-1 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded hover:shadow m-1"
        to="/dashboard"
      >
        Dashboard
      </Link>
    </div>
  );
};

const App = () => {
  const setAuthenticated = useSetRecoilState(isAuthenticated);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      return user ? setAuthenticated(true) : setAuthenticated(false);
    });
  }, [setAuthenticated]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* private routes */}
      <Route element={<PrivateWrapper />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="group" element={<GroupCreationPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
      <Route path="/404" element={<NotFound404 />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};

export default App;
