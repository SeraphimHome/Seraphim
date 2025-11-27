import { useState, useEffect } from "react";
import { X, Snowflake } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChristmasBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Mostra o banner após 1 segundo
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    // Esconde o banner após 11 segundos (1s + 10s)
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 11000);

    // Calcula tempo até o Natal
    const calculateTimeLeft = () => {
      const christmas = new Date(new Date().getFullYear(), 11, 25); // 25 de dezembro
      const now = new Date();
      
      // Se já passou o Natal deste ano, conta para o próximo
      if (now > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }
      
      const difference = christmas.getTime() - now.getTime();
      
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 animate-in slide-in-from-top duration-500">
      <div className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 p-[2px] rounded-lg shadow-2xl">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-4 flex items-center gap-3 max-w-2xl">
          <Snowflake className="text-blue-400 animate-pulse" size={24} />
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">
              🎄 Contagem Regressiva para o Natal! 🎅
            </h3>
            <div className="flex gap-3 text-sm font-semibold">
              <div className="text-center">
                <div className="text-2xl text-red-600 dark:text-red-400">{timeLeft.days}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">dias</div>
              </div>
              <div className="text-2xl text-gray-600 dark:text-gray-400">:</div>
              <div className="text-center">
                <div className="text-2xl text-green-600 dark:text-green-400">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">horas</div>
              </div>
              <div className="text-2xl text-gray-600 dark:text-gray-400">:</div>
              <div className="text-center">
                <div className="text-2xl text-red-600 dark:text-red-400">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">min</div>
              </div>
              <div className="text-2xl text-gray-600 dark:text-gray-400">:</div>
              <div className="text-center">
                <div className="text-2xl text-green-600 dark:text-green-400">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">seg</div>
              </div>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};
