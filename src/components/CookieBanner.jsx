import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = Cookies.get("cookieConsent");
    if (!cookieConsent) {
      setIsBannerVisible(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 });
    setIsBannerVisible(false);
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 365 });
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
    <div className="fixed bottom-0 w-[100%] left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-16 z-[1000]">
      <p className="flex justify-center">We use cookies to improve your experience. Accept or reject?</p>
      <div className="flex justify-center mt-4 gap-4">
        <button
            onClick={handleAccept}
            className="bg-gray-900 px-4 py-2 rounded mx-2"
        >
            Accept
        </button>
        <button
            onClick={handleReject}
            className="bg-gray-900 px-4 py-2 rounded mx-2"
        >
            Reject
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;


