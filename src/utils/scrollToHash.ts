import { useEffect } from 'react';
import { getHash } from './getPath';

const scrollToHash = () => {
  useEffect(() => {
    const hash = getHash().toLocaleLowerCase();

    if (hash) {
      const content = document.getElementById(`${hash}`);
      content &&
        content.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }
  }, []);
}

export default scrollToHash;