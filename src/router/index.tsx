import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  generalRoutes,
  profileRoutes,
  noteRoutes,
} from "../utils/consts/routes";

const Home = lazy(() => import("../screens/home"));
const Note = lazy(() => import("../screens/note"));
const Notfound = lazy(() => import("../screens/notFound"));
const Profile = lazy(() => import("../screens/profile"));
const Signin = lazy(() => import("../screens/signin"));
const Signup = lazy(() => import("../screens/signup"));
const Router = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <BrowserRouter>
        <Routes>
          {/* <Navbar /> */}
          <Route path="/" element={<Home />} />
          <Route path={generalRoutes.home} element={<Home />} />
          <Route path={noteRoutes.note} element={<Note />} />
          <Route path={profileRoutes.profile} element={<Profile />} />
          <Route path={profileRoutes.signIn} element={<Signin />} />
          <Route path={profileRoutes.signUp} element={<Signup />} />
          <Route path={generalRoutes.notFound} element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Router;
