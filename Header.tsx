import React, { useEffect, useState } from "react";
import TextScramble from "@twistezo/react-text-scramble/lib/TextScramble";
import "./Header.css";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const [paused, setPaused] = useState<boolean>(false);
  const [listScrambled, setScrambled] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setPaused(true);
      setTimeout(() => {
        setScrambled(true);
      }, 2800);
    }, 2800);
    return () => clearTimeout(timeout);
  }, []);

  const scrambleTexts = [t("loading"), t("evolving"), t("growing")];
  const scrambleText1 = [t("noctem2")];
  return (
    <header className="header">
      {/* <div className="radial_circle"></div> */}
      <div className={`header_text_box show-page`}>
        <div>
          <h2 className="heading">
            {paused ? (
              t("REVOLUTIONIZING YOUR TEAM")
            ) : (
              <>
                {t("")}
               
              </>
            )}
            &nbsp;
          </h2>
          <h2 id="Elevation">
            Elevate Your Success with our AI and other Services
          {/* Elevate your success with our AI and other services */}
            {/* <span>
              {paused && (
                <>
                  {listScrambled ? (
                    t("Elevate your success with our AI and other services")
                  ) : (
                    <TextScramble
                      texts={scrambleText1}
                      letterSpeed={25}
                      nextLetterSpeed={50}
                      pauseTime={500}
                    />
                  )}
                </>
              )}
            </span> */}
          </h2>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
