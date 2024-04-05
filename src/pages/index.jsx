import React, { useState, useEffect } from "react";
import DefaultLayout from "../components/layout/Default/DefaultLayout";
import ContentMainPage from "../components/layout/Default/ContentMainPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../src/store/ProductSlice";
import { getSession } from "next-auth/react";

/* Домашнаяя страница */
const Home = () => {
  useEffect(() => {
    authorizedUser();
  }, []);
  const authorizedUser = async (context) => {
    const session = await getSession(context);
    console.log(session?.user);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <DefaultLayout>
      <ContentMainPage />
    </DefaultLayout>
  );
};

export default Home;
