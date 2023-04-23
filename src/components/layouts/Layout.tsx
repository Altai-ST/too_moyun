import React, { FC, PropsWithChildren } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Providers } from "@/GlobalRedux/provider";
import Image from "next/image";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <Image src="/tooBg.png" alt="background image" fill />
      </div>
      <div className="relative z-10">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </div>
    </div>
  );
};

export default Layout;
