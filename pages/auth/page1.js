// pages/page1.js
import React from "react";

const Page1 = () => {
  return (
    <div>
      <h1>Page 1</h1>
      {/* Page content for Page 1 */}
    </div>
  );
};

Page1.pageProps = { useLayoutA: true };

export default Page1;
