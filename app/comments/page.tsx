"use client";
import { useEffect } from "react";

export function Comments({ height = 800 }: { height?: number }) {
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

    // Cleanup on unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
      document.head.removeChild(nicknameTrans);
    };
  }, []);

  return (
    <div className="bg-white">
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="7ecbb2a4-4ea6-4772-a66c-48409b5900fb"
        data-page-id={
          typeof window !== "undefined" ? window.location.pathname : ""
        }
        data-page-url={
          typeof window !== "undefined" ? window.location.pathname : ""
        }
        data-page-title={
          typeof window !== "undefined" ? window.location.pathname : ""
        }
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

export default function Page() {
  return (
    <div className="bg-white min-h-screen py-36 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">అభిప్రాయాలు</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          మీ అభిప్రాయాలు మరియు సూచనలు మాకు చాలా విలువైనవి. మీ ఆలోచనలను మాతో
          పంచుకోండి.
        </p>
        <div className="mt-4">
          <a
            href="mailto:nishabdham.sh@gmail.com"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            ఈమెయిల్ ద్వారా సంప్రదించండి (nishabdham.sh@gmail.com)
          </a>

          <div className="my-2 text-gray-500">లేదా</div>
          <p className="text-gray-600 mb-4">క్రింది ఫారమ్ ని నింపి పంపండి</p>
        </div>
      </div>
      <Comments height={2000} />
    </div>
  );
}
