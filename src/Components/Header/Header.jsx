import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.scss';
import SignOut from '../SignOut/SignOut';

const Header = () => {

  // returns location object(can access further properties via dot notation)
  const location = useLocation();

  // doesn't display logout button on root/main page
  const rootPage = "/";
  const [currentPage, setCurrentPage] = useState(rootPage);

  // for knowing when url location/page changes
  useEffect(() => {
    setCurrentPage(location.pathname);
  },[location])
  
  return (
    <header className={styles.heading}>
        <h1>MyTodos</h1>
        {(currentPage !== rootPage) && <SignOut />}
    </header>
  )
};

export default Header;
