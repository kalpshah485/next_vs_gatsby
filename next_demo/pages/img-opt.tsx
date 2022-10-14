import Image from "next/image";
import * as React from "react";

const ImgOptPage = () => (
  <>
    <Image
      src="https://atlas-content-cdn.pixelsquid.com/stock-images/palm-tree-n1K3PDF-600.jpg"
      alt="palm tree"
      loading="lazy"
      layout="fixed"
      height={600}
      width={1200}
    />
  </>
);

export default ImgOptPage;
