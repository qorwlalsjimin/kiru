import { useEffect, useRef } from 'react';

let count = 0;
const useDidMountEffect = (func, deps) => {
  const didMount = useRef(false);
    useEffect(() => {
        count++;
        console.log(count);
    if (didMount.current && count <= 4) func();
    else didMount.current = true;
  }, deps);
};

export default useDidMountEffect;