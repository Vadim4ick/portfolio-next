import { RefObject, useRef } from "react";

const useAsideMenu = () => {
  const refContacts = useRef<HTMLTableSectionElement>(null);
  const refProjects = useRef<HTMLTableSectionElement>(null);
  const refAbout = useRef<HTMLTableSectionElement>(null);

  const handleClick = (ref: RefObject<HTMLTableSectionElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const asideMenu = [
    {
      name: "about",
      fn: () => handleClick(refAbout),
    },
    {
      name: "projects",
      fn: () => handleClick(refProjects),
    },
    {
      name: "contacts",
      fn: () => handleClick(refContacts),
    },
  ];

  return { asideMenu, refAbout, refContacts, refProjects };
};

export { useAsideMenu };
