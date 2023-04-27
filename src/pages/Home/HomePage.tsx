import useDevice from "@/hooks/useDevice/useDevice";
import { useEffect } from "react";

const HomePage = () => {
  const { mac, getMacAddress } = useDevice();
  useEffect(() => {
    getMacAddress();
  }, []);
  return (
    <div className="hero h-4/5">
      <div className="hero-content text-accent text-center">
        <div className="max-w-md">
          <h3 className="text-3xl font-bold mb-4">Welcome to DevTools</h3>
          <div className="flex flex-col items-start">
            <h5>1. Your MAC address: {mac}</h5>
            <h5>2. Cmd+R quick reload app</h5>
            <h5 className="">
              3. Press <kbd className="kbd kbd-sm">F</kbd> to pay respects.
            </h5>
            <h5 className="">
              4. <kbd className="kbd">⌘</kbd> + <kbd className="kbd">⌥</kbd> +
              <kbd className="kbd">⇧</kbd> + <kbd className="kbd">⌃</kbd>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
