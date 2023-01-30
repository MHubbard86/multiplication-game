import React, { useEffect } from "react";

const usePageTitle = (title: string): void => {
  useEffect(() => {
    document.title = title;
  }, [document]);
};

export default usePageTitle;