import * as React from "react";
import {
  useState,
  useLayoutEffect
} from "react";

const useIntersectionObserver = (
  ref,
  options = {
    rootMargin: "0px",
    threshold: "1.0"
  }
) => {
  const [intersecting, setIntersecting] = useState(false);
  const callback = ([entry]) => setIntersecting(entry.isIntersecting);
  const observer = new IntersectionObserver(callback, options);
  useLayoutEffect(() => {
    const currentRef = ref.current;
    currentRef && observer.observe(currentRef);
    return () => {
      currentRef && observer.unobserve(currentRef);
    };
  }, [ref]);
  return intersecting;
};

export default useIntersectionObserver;
