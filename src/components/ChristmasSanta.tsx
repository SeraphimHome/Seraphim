import { useEffect, useState } from "react";

export const ChristmasSanta = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Papai Noel aparece após 15 segundos
    const timer = setTimeout(() => {
      setShow(true);
      // Some após a animação terminar (20s)
      setTimeout(() => setShow(false), 20000);
    }, 15000);

    // Repete a cada 60 segundos
    const interval = setInterval(() => {
      setShow(true);
      setTimeout(() => setShow(false), 20000);
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="fixed top-20 -left-32 z-40 animate-santa-sleigh pointer-events-none">
      <div className="relative w-32 h-24">
        {/* Trenó */}
        <svg
          viewBox="0 0 200 150"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Renas */}
          <g transform="translate(0, 30)">
            <ellipse cx="30" cy="40" rx="8" ry="12" fill="#8B4513" />
            <circle cx="30" cy="35" r="6" fill="#A0522D" />
            <path d="M 25 30 L 20 25 M 35 30 L 40 25" stroke="#8B4513" strokeWidth="2" />
            <circle cx="30" cy="32" r="1" fill="red" />
            <path d="M 30 45 L 30 55 M 25 55 L 35 55" stroke="#8B4513" strokeWidth="2" />
          </g>

          {/* Trenó */}
          <g transform="translate(50, 50)">
            <path
              d="M 10 30 Q 0 40 10 45 L 90 45 Q 100 40 90 30 Z"
              fill="#DC143C"
              stroke="#8B0000"
              strokeWidth="2"
            />
            <rect x="15" y="15" width="70" height="15" rx="5" fill="#8B0000" />
            <circle cx="25" cy="47" r="3" fill="gold" />
            <circle cx="75" cy="47" r="3" fill="gold" />
          </g>

          {/* Papai Noel */}
          <g transform="translate(100, 35)">
            {/* Corpo */}
            <ellipse cx="0" cy="35" rx="12" ry="15" fill="#DC143C" />
            {/* Cabeça */}
            <circle cx="0" cy="20" r="8" fill="#FFE4C4" />
            {/* Gorro */}
            <path d="M -6 18 Q 0 8 6 18" fill="#DC143C" />
            <circle cx="0" cy="8" r="3" fill="white" />
            {/* Barba */}
            <ellipse cx="0" cy="24" rx="6" ry="4" fill="white" />
            {/* Braço */}
            <path d="M 10 30 L 20 25" stroke="#DC143C" strokeWidth="3" />
          </g>

          {/* Saco de presentes */}
          <g transform="translate(85, 40)">
            <ellipse cx="0" cy="15" rx="8" ry="10" fill="#8B4513" />
            <path d="M -3 10 Q 0 5 3 10" stroke="#D2691E" strokeWidth="2" fill="none" />
          </g>
        </svg>

        {/* Rastro de estrelas */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className="absolute text-yellow-300 animate-ping"
              style={{
                left: `${i * 20}%`,
                animationDelay: `${i * 0.1}s`,
                fontSize: `${Math.random() * 10 + 10}px`,
              }}
            >
              ✨
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
