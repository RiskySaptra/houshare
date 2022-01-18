import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

// components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import GroupCreationPage from "./pages/GroupCreationPage";
import LoginPage from "./pages/Login";
import NotFound404 from "./pages/NotFound404";
import PrivateWrapper from "./routing/PrivateWrapper";
import GlobalNotification from "./components/GlobalNotification";
import "./index.css";

// recoil atom
import { isAuthenticated } from "./atom";
import Dashboard from "./pages/Dashboard";
import Group from "./pages/Group";

const App = () => {
  const [authenticated, setAuthenticated] = useRecoilState(isAuthenticated);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      return user ? setAuthenticated(true) : setAuthenticated(false);
    });
  }, [setAuthenticated]);

  return (
    <div>
      <GlobalNotification />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route element={<PrivateWrapper />}>
          <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="group" element={<Group />} />
          </Route>
          <Route path="/createGroup" element={<GroupCreationPage />} />
        </Route>
        <Route path="login" element={<LoginPage auth={authenticated} />} />
        <Route path="/404" element={<NotFound404 />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    </div>
  );
};

export default App;
