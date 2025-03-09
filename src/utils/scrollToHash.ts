import { useLayoutEffect } from 'react';
import { getHash, removeHash } from './getPath';

const scrollToHash = () => {
  // useLayOut hits after the render
  useLayoutEffect(() => {
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
  }, []);
}

export default scrollToHash;