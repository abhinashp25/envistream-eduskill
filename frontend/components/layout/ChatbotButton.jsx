"use client";

// Floating "Ask Envi" pill — Infosys Ask Leon style.
// IDLE: completely static — no pulse, no animation (professional).
// HOVER: Gemini-style aurora gradient sweeps across the pill.
// No chatbot logic wired yet — replace onClick when chat panel is ready.

export default function ChatbotButton() {
  return (
    <>
      <style>{`
        @keyframes envi-shimmer {
          0%   { background-position: 0% 50%; }
          50%  { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .envi-chat-pill {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 40;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px 11px 18px;
          border-radius: 9999px;
          border: 1.5px solid rgba(255,255,255,0.15);
          cursor: pointer;
          font-family: inherit;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.01em;
          color: #ffffff;
          /* Idle: clean solid — zero animation, zero distraction */
          background: #0B6E6E;
          box-shadow: 0 4px 18px rgba(11,110,110,0.30);
          transition:
            background 0.35s ease,
            box-shadow 0.35s ease,
            transform 0.2s ease,
            border-color 0.35s ease;
          outline: none;
          white-space: nowrap;
        }

        /* Hover: Gemini aurora activates — only on cursor interaction */
        .envi-chat-pill:hover {
          background: linear-gradient(
            135deg,
            #0B6E6E 0%,
            #E58A2E 35%,
            #818cf8 65%,
            #0B6E6E 100%
          );
          background-size: 300% 300%;
          animation: envi-shimmer 1.8s ease infinite;
          border-color: rgba(229,138,46,0.5);
          box-shadow:
            0 0 0 3px rgba(229,138,46,0.20),
            0 8px 30px rgba(11,110,110,0.45);
          transform: translateY(-2px) scale(1.03);
        }

        .envi-chat-pill:active {
          transform: translateY(0px) scale(0.97);
          animation: none;
          background: #0B6E6E;
        }

        .envi-chat-icon {
          transition: filter 0.3s ease, transform 0.3s ease;
          flex-shrink: 0;
        }
        .envi-chat-pill:hover .envi-chat-icon {
          filter: drop-shadow(0 0 5px rgba(255,255,255,0.9));
          transform: rotate(15deg) scale(1.1);
        }
      `}</style>

      <button
        type="button"
        aria-label="Chat with Ask Envi — Envistream EduSkill assistant (coming soon)"
        onClick={() => alert("Ask Envi — chat assistant coming soon!")}
        className="envi-chat-pill"
      >
        {/* Gemini 4-pointed star spark — only animates when CSS hover fires */}
        <svg
          width="17"
          height="17"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="envi-chat-icon"
        >
          <path d="M12 2C12 2 13.5 8.5 20 10C13.5 11.5 12 18 12 18C12 18 10.5 11.5 4 10C10.5 8.5 12 2 12 2Z" />
          <path d="M19 2C19 2 19.8 5.2 23 6C19.8 6.8 19 10 19 10C19 10 18.2 6.8 15 6C18.2 5.2 19 2 19 2Z" opacity="0.55" />
        </svg>
        <span>Ask Envi</span>
      </button>
    </>
  );
}
