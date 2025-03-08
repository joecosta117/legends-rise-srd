import { useEffect } from 'react';
import { getHash, removeHash } from './getPath';

const scrollToHash = () => {
  useEffect(() => {
    const hash = getHash().toLocaleLowerCase();

    if (hash) {
      const content = document.getElementById(`${hash}`);
      if (content) {
        content.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setTimeout(() => {
          removeHash()
        }, 500)
      } 
    }
  }, []);
}

export default scrollToHash;