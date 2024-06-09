import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { defaultDevice } from "./consts";
import { IDevice } from "./types";

/**
 * Get current device for the page
 * @returns {IDevice} Is it mobile or table, laptop, desktop
 */
const useDevice = (): IDevice => {
  const [device, setDevice] = useState<IDevice>(defaultDevice);

  const isMobile = useMediaQuery({ maxWidth: 320 });
  const isTablet = useMediaQuery({ maxWidth: 768 });
  const isLaptop = useMediaQuery({ maxWidth: 1366 });
  const isDesktop = useMediaQuery({ maxWidth: 1680 });

  useEffect(() => {
    setDevice({ isMobile, isTablet, isLaptop, isDesktop });
  }, [isMobile, isTablet, isLaptop, isDesktop]);

  return device;
};

export default useDevice;
