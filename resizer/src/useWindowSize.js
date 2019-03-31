import { useState, useEffect } from "react";

export default function useWindowSize(searchTerm) {
  const isClient = typeof window === "object";
  const [windowSize, setWindowSize] = useState(getSize);

  function getSize() {
    return {
      width: isClient ? window.innerWidth : null,
      height: isClient ? window.innerHeight : null
    };
  }

  // set up a listener - componentDidMount, cleaned up in componentWillUnmount
  useEffect(() => {
    if (!isClient) return false;
    console.log("adding event listener");

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // will only run the cb onMount and willUnmount

  useEffect(() => {
    // make an API call
  }, [searchTerm]); // will run on mount and when searchTerm changes

  return windowSize;
}
