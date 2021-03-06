import React, { useEffect, useState } from 'react';

// import { Searcher } from '../molecules';
import { Products, Nav } from '../containers';
import { useAuth } from '../../hooks';
import Cookies from 'universal-cookie';
import { Loader } from '../atoms';

const Home = () => {
  const cookie = new Cookies();
  const { isAuth, finished, token } = useAuth(cookie.get('token'));

  cookie.set('token', token);

  if (!finished) {
    return <Loader border="5px" width="30px" height="30px" />;
  }

  return (
    <>
      {isAuth ? (
        <>
          <Nav isAuth={isAuth} />
          {/* <Searcher /> */}
          <Products />
        </>
      ) : (
        <>
          <Nav isAuth={isAuth} />
          {/* <Searcher /> */}
          <Products />
        </>
      )}
    </>
  );
};

export default Home;
