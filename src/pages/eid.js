import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";

export default function EidPage() {
  const [qrValue, setQrValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchIntermediateUrl = async () => {
      try {
        const res = await axios.get("https://epass-backend.vercel.app/api/eid-tctoken");
        const intermediateUrl = res.data.intermediateUrl;

        if (!intermediateUrl || !intermediateUrl.includes("/doEid?authid=")) {
          setError("Invalid intermediate URL received.");
          return;
        }

        // Use intermediate URL directly in QR code
        const eidUrl = `eid://tcToken?url=${encodeURIComponent(intermediateUrl)}`;
        setQrValue(eidUrl);
      } catch (err) {
        console.error("Error fetching intermediate URL:", err);
        setError("Failed to fetch intermediate URL.");
      }
    };

    fetchIntermediateUrl();
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>eID QR Code</h1>
      <p>Scan this QR code using AusweisApp2 mobile:</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {qrValue ? (
        <QRCode value={qrValue} size={256} />
      ) : (
        !error && <p>Loading QR code...</p>
      )}
    </div>
  );
}
