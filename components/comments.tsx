"use client";
import { useEffect } from "react";

export default function Comments({ height = 800 }: { height?: number }) {
  useEffect(() => {
    // Load Cusdis script
    const script = document.createElement("script");
    script.src = "https://cusdis.com/js/cusdis.es.js";
    script.async = true;
    document.body.appendChild(script);

    // Set iframe height
    const style = document.createElement("style");
    style.textContent = `
        #cusdis_thread iframe {
          min-height: ${height}px !important;
        }
      `;
    document.head.appendChild(style);

    // Add translation for nickname
    const nicknameTrans = document.createElement("script");
    nicknameTrans.textContent = `
        window.CUSDIS_LOCALE = {
          "powered_by": "నిశ్శబ్దం",
          "post_comment": "పంపండి",
          "loading": "లోడ్ అవుతోంది",
          "Reply...": "సమాధానం",
          "reply_to": "ప్రత్యుత్తరం",
          "comment": "వ్యాఖ్య",
          "refresh": "రిఫ్రెష్",
          "close": "మూసివేయి",
          "no_comment": "ఇంకా వ్యాఖ్యలు లేవు"
        }
      `;
    document.head.appendChild(nicknameTrans);

    // Update Cusdis attributes with window location
    const cusdisThread = document.getElementById('cusdis_thread');
    if (cusdisThread) {
      cusdisThread.setAttribute('data-page-id', window.location.pathname);
      cusdisThread.setAttribute('data-page-url', window.location.pathname);
      cusdisThread.setAttribute('data-page-title', window.location.pathname);
    }

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
      document.head.removeChild(nicknameTrans);
    };
  }, [height]);

  return (
    <div className="bg-white">
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="7ecbb2a4-4ea6-4772-a66c-48409b5900fb"
        className="prose max-w-none min-h-[800px]"
        style={{
          ["--cusdis-comment-box-height" as string]: "200px",
          ["--cusdis-comment-box-border" as string]: "2px solid #e5e7eb",
          ["--cusdis-comment-box-border-radius" as string]: "8px",
        }}
      ></div>
    </div>
  );
}
