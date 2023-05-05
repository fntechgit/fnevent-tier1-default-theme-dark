import {
  useRef,
  useState,
  useCallback,
  useLayoutEffect
} from "react";
 
export const useLayoutEffectEventListener = (
  type,
  listener,
  useCapture
) =>
  useLayoutEffect(() => {
    window.addEventListener(type, listener, useCapture);
    return () => window.removeEventListener(type, listener, useCapture);
  }, [type, listener, useCapture]);

const useBoundingClientRect = () => {
  const [boundingClientRect, setBoundingClientRect] = useState();
  const nodeRef = useRef();
  const ref = useCallback(node => {
    if (node) {
      nodeRef.current = node;
      setBoundingClientRect(node.getBoundingClientRect());
    };
  }, []);
  const listener = () => nodeRef && nodeRef.current && setBoundingClientRect(nodeRef.current.getBoundingClientRect());
  useLayoutEffectEventListener("resize", listener);
  useLayoutEffectEventListener("scroll", listener, true);
  return [ref, boundingClientRect];
};

export default useBoundingClientRect;
