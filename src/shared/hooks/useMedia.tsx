"use client";

import { useEffect, useState } from "react";

interface MediaQuery {
  matches: boolean;
  media: string;
}

const useMedia = (query: string) => {
  const [mediaQuery, setMediaQuery] = useState<MediaQuery>(() => ({
    matches: window.matchMedia(query).matches,
    media: query,
  }));

  useEffect(() => {
    const media = window.matchMedia(query);

    const updateMediaQuery = () => {
      setMediaQuery({
        matches: media.matches,
        media: query,
      });
    };

    media.addEventListener("change", updateMediaQuery);
    updateMediaQuery();

    return () => {
      media.removeEventListener("change", updateMediaQuery);
    };
  }, [query]);

  return mediaQuery;
};

export { useMedia };
