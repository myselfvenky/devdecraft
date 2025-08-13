import Head from "next/head";
import React from "react";

const AppLayout = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title> {title ? `DevdeCraft | ${title}` : "DevDeCraft | Software Consultancy & Products"}</title>
        <meta
          name="description"
          content={description ? description : "DevDeCraft builds reliable, scalable software and ready-to-use products for consumers and businesses."}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
