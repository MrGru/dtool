import { invoke } from "@tauri-apps/api";
import { useEffect, useState } from "react";

const useDevice = () => {
  const [mac, setMac] = useState("");
  const getMacAddress = async () => {
    const address: string = await invoke("get_mac_address");
    setMac(address);
  };

  return { mac, getMacAddress };
};

export default useDevice;
