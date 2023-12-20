import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Kebab from '@components/kebab';

const Brands = () => {
  const [visible, toggleVisibility] = useState(true);
  return (
    <>
      <Kebab
        className="cursor-pointer"
        onClick={() => toggleVisibility(!visible)}
        expanded={visible}
      >
        I have worked with these brands
      </Kebab>
      <div
        className={`mt-2 items-center justify-center flex-wrap ${
          visible ? 'flex' : 'hidden'
        }`}
      >
        <StaticImage
          alt="Simply Financial Services"
          title="Simply Financial Services"
          src="../../images/logos/simply.png"
          className="inline-block mr-8 mt-4"
          height={40}
          layout="fixed"
        />

        <StaticImage
          alt="Microsoft"
          title="Microsoft"
          src="../../images/logos/microsoft.png"
          className="inline-block mr-8 mt-4"
          height={40}
          layout="fixed"
        />

        <StaticImage
          alt="Absa"
          title="Absa"
          src="../../images/logos/absa.png"
          className="inline-block mr-8 mt-4"
          height={50}
          layout="fixed"
        />

        <StaticImage
          alt="Old Mutual"
          title="Old Mutual"
          src="../../images/logos/old-mutual.png"
          className="inline-block mr-8 mt-4"
          height={60}
          layout="fixed"
        />

        <StaticImage
          alt="Vodacom"
          title="Vodacom"
          src="../../images/logos/vodacom.png"
          className="inline-block mr-8 mt-4"
          height={50}
          layout="fixed"
        />

        <StaticImage
          alt="MultiChoice"
          title="MultiChoice"
          src="../../images/logos/multichoice.png"
          className="inline-block mr-8 mt-4"
          height={60}
          layout="fixed"
        />

        <StaticImage
          alt="DStv"
          title="DStv"
          src="../../images/logos/dstv.png"
          className="inline-block mr-8 mt-4"
          height={30}
          layout="fixed"
        />

        <StaticImage
          alt="Idols South Africa"
          title="Idols South Africa"
          src="../../images/logos/idols.png"
          className="inline-block mr-8 mt-4"
          height={50}
          layout="fixed"
        />
      </div>
    </>
  );
};

export default Brands;
