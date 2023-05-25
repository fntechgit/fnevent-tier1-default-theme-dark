import {
  useRef,
  useState,
  useCallback
} from "react";

import useResizeObserver from "use-resize-observer";

const useBoundingClientRect = () => {
  const [boundingClientRect, setBoundingClientRect] = useState();
  const nodeRef = useRef();
  const ref = useCallback(node => {
    if (node) {
      nodeRef.current = node;
      setBoundingClientRect(node.getBoundingClientRect());
    };
  }, []);
  useResizeObserver({
    nodeRef,
    onResize: ref
  });
  return [ref, boundingClientRect];
};

export default useBoundingClientRect;
