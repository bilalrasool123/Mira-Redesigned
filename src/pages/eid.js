import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import axios from "axios";

export default function EidPage() {
  const [qrValue, setQrValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTcToken = async () => {
      try {
        const res = await axios.get("https://epass-backend.vercel.app/api/eid-tctoken");
        const tcTokenURL = res.data.tcTokenURL;

        if (!tcTokenURL || !tcTokenURL.includes("tcToken")) {
          setError("Invalid tcTokenURL received.");
          return;
        }

        const eidUrl = `eid://tcToken?url=${encodeURIComponent(tcTokenURL)}`;
        setQrValue(eidUrl);
      } catch (err) {
        console.error("Error fetching tcTokenURL:", err);
        setError("Failed to fetch tcTokenURL.");
      }
    };

    fetchTcToken();
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>eID QR Code</h1>
      <p>Scan this QR code using AusweisApp2 mobile:</p>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <img src="/eid.png"/>

      {qrValue ? (
        <QRCode value={qrValue} size={256} />
      ) : (
        !error && <p>Loading QR code...</p>
      )}
    </div>
  );
}
