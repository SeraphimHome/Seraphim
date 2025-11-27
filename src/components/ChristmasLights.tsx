export const ChristmasLights = () => {
  const colors = [
    "bg-red-500",
    "bg-yellow-400",
    "bg-green-500",
    "bg-blue-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  const lights = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    color: colors[i % colors.length],
    delay: i * 0.1,
  }));

  return (
    <div className="absolute top-0 left-0 right-0 z-40 h-12 pointer-events-none bg-gradient-to-b from-gray-900/10 to-transparent">
      {/* Fio das luzes */}
      <svg className="absolute top-2 w-full h-8" preserveAspectRatio="none">
        <path
          d="M 0,10 Q 50,20 100,10 T 200,10 T 300,10 T 400,10 T 500,10 T 600,10 T 700,10 T 800,10 T 900,10 T 1000,10 T 1100,10 T 1200,10 T 1300,10 T 1400,10 T 1500,10 T 1600,10 T 1700,10 T 1800,10 T 1900,10 T 2000,10"
          stroke="rgba(0,0,0,0.3)"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Luzes */}
      <div className="absolute top-0 w-full h-full flex justify-around items-start pt-3">
        {lights.map((light) => (
          <div key={light.id} className="relative">
            {/* Socket */}
            <div className="w-3 h-2 bg-gray-700 rounded-t-sm mx-auto" />
            {/* Bulbo */}
            <div
              className={`w-6 h-8 ${light.color} rounded-b-full animate-christmas-blink shadow-lg`}
              style={{
                animationDelay: `${light.delay}s`,
                boxShadow: `0 0 10px currentColor`,
              }}
            />
            {/* Brilho */}
            <div
              className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white/50 rounded-full blur-sm animate-christmas-blink"
              style={{ animationDelay: `${light.delay}s` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
