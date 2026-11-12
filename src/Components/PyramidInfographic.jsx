import "../PyramidInfographic.css";

const levels = [
  { number: "05", x: 174, y: 653, color: "#08758b" },
  { number: "04", x: 246, y: 525, color: "#e87922" },
  { number: "03", x: 324, y: 389, color: "#d81759" },
  { number: "02", x: 401, y: 248, color: "#32a900" },
  { number: "01", x: 478, y: 108, color: "#07528c" },
];

export default function PyramidInfographic() {
  return (
    <section className="design-container">
      <svg
        className="pyramid-svg"
        viewBox="0 0 1024 768"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Five-level colorful pyramid infographic"
      >
        <defs>
          <linearGradient id="top-blue" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#00d9f5" />
            <stop offset="1" stopColor="#0871d8" />
          </linearGradient>
          <linearGradient id="green" x1="0" y1="0" x2="1" y2=".2">
            <stop stopColor="#78e900" />
            <stop offset=".52" stopColor="#12c500" />
            <stop offset="1" stopColor="#007c83" />
          </linearGradient>
          <linearGradient id="pink" x1="0" y1="0" x2="1" y2=".15">
            <stop stopColor="#ff1763" />
            <stop offset=".55" stopColor="#e60088" />
            <stop offset="1" stopColor="#7100ce" />
          </linearGradient>
          <linearGradient id="orange" x1="0" y1="0" x2="1" y2=".1">
            <stop stopColor="#ff5900" />
            <stop offset=".6" stopColor="#ff9200" />
            <stop offset="1" stopColor="#ffdf00" />
          </linearGradient>
          <linearGradient id="teal" x1="0" y1="0" x2="1" y2=".2">
            <stop stopColor="#00a5bc" />
            <stop offset=".55" stopColor="#00bb78" />
            <stop offset="1" stopColor="#a7df00" />
          </linearGradient>
          <linearGradient id="white" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fff" />
            <stop offset="1" stopColor="#f4f5f6" />
          </linearGradient>
          <linearGradient id="edge" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#006454" />
            <stop offset="1" stopColor="#00352f" />
          </linearGradient>
          <filter id="ground-shadow" x="-.15" y="-.8" width="1.3" height="2.6">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <filter id="tier-shadow" x="-.15" y="-.15" width="1.3" height="1.4">
            <feDropShadow dx="0" dy="5" stdDeviation="4" floodOpacity=".24" />
          </filter>
        </defs>

        <ellipse
          cx="535"
          cy="709"
          rx="470"
          ry="22"
          fill="#35404a"
          opacity=".2"
          filter="url(#ground-shadow)"
        />

        <g filter="url(#tier-shadow)" strokeLinejoin="round">
          {/* Bottom tier */}
          <polygon points="136,568 270,628 210,739 75,683" fill="url(#white)" stroke="#e3e7e9" strokeWidth="2" />
          <polygon points="270,628 923,577 992,682 210,739" fill="url(#teal)" stroke="#009b91" strokeWidth="2" />

          {/* Shaded connector between the bottom two tiers */}
          <polygon points="270,628 283,609 913,555 923,577" fill="#087e75" />

          {/* Fourth tier */}
          <polygon points="145,553 212,435 343,495 283,609" fill="url(#white)" stroke="#e5e5e5" strokeWidth="2" />
          <polygon points="343,495 849,454 913,555 283,609" fill="url(#orange)" stroke="#ed8000" strokeWidth="2" />
          <polygon points="212,435 343,495 849,454 836,444 343,481" fill="#a93a00" opacity=".48" />

          {/* Shaded connector between the orange and pink tiers */}
          <polygon points="343,495 356,478 836,436 849,454" fill="#aa164f" />

          {/* Third tier */}
          <polygon points="219,422 290,296 422,359 356,478" fill="url(#white)" stroke="#e4e4e4" strokeWidth="2" />
          <polygon points="422,359 768,328 836,436 356,478" fill="url(#pink)" stroke="#c70b71" strokeWidth="2" />
          <polygon points="290,296 422,359 768,328 755,318 422,345" fill="#9b004b" opacity=".55" />

          {/* Shaded connector between the pink and green tiers */}
          <polygon points="422,359 434,340 755,312 768,328" fill="#8a155f" />

          {/* Second tier */}
          <polygon points="299,282 371,150 501,219 434,340" fill="url(#white)" stroke="#e4e4e4" strokeWidth="2" />
          <polygon points="501,219 686,204 755,312 434,340" fill="url(#green)" stroke="#16b400" strokeWidth="2" />
          <polygon points="371,150 422,150 501,201 686,204 501,219" fill="url(#edge)" />

          {/* Shaded connector beneath the blue top */}
          <polygon points="501,219 512,199 675,186 686,204" fill="#005a55" />

          {/* Top tier */}
          <polygon points="379,139 451,10 592,59 512,199" fill="url(#white)" stroke="#e2e5e8" strokeWidth="2" />
          <polygon points="592,59 675,186 512,199" fill="url(#top-blue)" stroke="#0088e8" strokeWidth="2" />
        </g>

        {levels.map(({ number, x, y, color }) => (
          <g key={number}>
            <circle cx={x} cy={y} r="46" fill="none" stroke={color} strokeWidth="2.5" />
            <text
              x={x}
              y={y + 20}
              fill={color}
              textAnchor="middle"
              fontFamily="Arial, Helvetica, sans-serif"
              fontSize="62"
              fontWeight="800"
              letterSpacing="-3"
            >
              {number}
            </text>
          </g>
        ))}

        {/* Smartphone */}
        <g transform="translate(596 142)" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-15 25 L-22 18 Q-28 13 -25 6 L-19 -5 V-25 Q-19 -29 -15 -29 H14 Q18 -29 18 -25 V24 Q18 28 14 28 H-5" />
          <path d="M-12 -20 H11 M-12 -10 H11 M-12 0 H10 M-12 10 H5 M-12 20 H-4" />
          <path d="M-22 18 L-11 24 L-17 30 L-28 24" fill="white" stroke="white" />
        </g>

        {/* Network */}
        <g transform="translate(594 273)" fill="none" stroke="white" strokeWidth="4">
          <path d="M0 0 L-21 -23 M0 0 L27 -27 M0 0 L-44 -9 M0 0 L-26 27 M0 0 L33 24" />
          <circle r="16" />
          <circle cx="-22" cy="-26" r="7" />
          <circle cx="30" cy="-32" r="9" />
          <circle cx="-49" cy="-12" r="6" />
          <circle cx="-31" cy="31" r="7" />
          <circle cx="39" cy="29" r="9" />
        </g>

        {/* Lightbulb */}
        <g transform="translate(590 407)" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-26 0 A26 26 0 1 1 26 0 C26 16 12 22 12 34 H-12 C-12 22 -26 16 -26 0Z" />
          <path d="M-11 39 H11 M-10 46 H10 M-6 52 H6 M0 29 V4 M0 17 L-7 8 M0 17 L7 8" />
          <path d="M0 -46 V-56 M-39 -27 L-47 -33 M39 -27 L47 -33 M-49 5 H-57 M49 5 H57" />
        </g>

        {/* Target */}
        <g transform="translate(600 532)" fill="none" stroke="white" strokeWidth="7">
          <circle r="34" />
          <circle r="23" />
          <circle r="11" />
          <path d="M0 0 L34 -34 M19 -34 H34 V-19" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Search */}
        <g fill="none" stroke="white" strokeWidth="7" strokeLinecap="round">
          <circle cx="590" cy="650" r="32" />
          <path d="M613 673 L640 697" />
          <path d="M584 627 Q590 623 596 627 M602 628 L606 631" strokeWidth="4" />
        </g>
      </svg>
    </section>
  );
}
