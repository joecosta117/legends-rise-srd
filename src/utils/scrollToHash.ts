import { useLayoutEffect } from 'react';
import { getHash, removeHash } from './getPath';
import { useLocation } from 'react-router-dom';

const scrollToHash = () => {
  const location = useLocation();

  const scrollFunc = () => {
    const hash = getHash().toLocaleLowerCase();

    if (hash) {
      const content = document.getElementById(`${hash}`);
      if (content) {
        setTimeout(() => {
          content.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
          removeHash();
        }, 500);
      } 
    }
  }

  useLayoutEffect(() => {
      scrollFunc(); // Scroll to hash on initial render
  
      const handleHashChange = () => {
        scrollFunc();
      };
  
      window.addEventListener("hashchange", handleHashChange);
  
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }, [location]);
  // useLayoutEffect(() => {
  //   const hash = getHash().toLocaleLowerCase();
  //   console.log('inside useLayoutEffect')

  //   if (hash) {
  //     const content = document.getElementById(`${hash}`);
  //     if (content) {
  //       setTimeout(() => {
  //         content.scrollIntoView({
  //           behavior: "smooth",
  //           block: "start",
  //         });
  //         removeHash();
  //       }, 500);
  //     } 
  //   }
  // }, []);
}

export default scrollToHash;