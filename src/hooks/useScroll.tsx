import {useRef, useEffect, useCallback} from "react";

export default function useScroll() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);

    element && element.scrollIntoView({behavior: "smooth", block: "start"});
  }, []);

  const handleScroll = useCallback(() => {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  return {
    sectionRef,
    handleScroll,
  };
}
