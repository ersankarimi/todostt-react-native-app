import { Stack } from "expo-router";
import { TailwindProvider } from "tailwind-rn";

import utilities from "../tailwind.json";

const Layout = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <Stack />
    </TailwindProvider>
  );
};

export default Layout;
