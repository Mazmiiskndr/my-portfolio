import Image from "next/image";
import { Fragment } from "react";
const PreLoader = () => {
  return (
    <Fragment>
      {/* Preloader */}
      <div className="preloader">
        <div className="centrize full-width">
          <div className="vertical-center">
            <div className="spinner-logo">
              <Image
                src="/assets/images/logo-azmi.png"
                alt="Moch Azmi Iskandar - Personal Portfolio"
                height={0}
                width={0}
                quality={100}
                priority={true}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
              <div className="spinner-dot" />
              <div className="spinner spinner-line" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default PreLoader;
