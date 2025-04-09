// components/WeatherCard.tsx
import { WiDaySunny, WiCloud, WiRain } from "react-icons/wi";

type Props = {
  city: string;
  temp: number;
  weather: string;
};

const getIcon = (main: string) => {
  switch (main) {
    case "Clear": return <WiDaySunny size={64} />;
    case "Clouds": return <WiCloud size={64} />;
    case "Rain": return <WiRain size={64} />;
    default: return <WiDaySunny size={64} />;
  }
};

export default function WeatherCard({ city, temp, weather }: Props) {
  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-6 text-white w-full max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-2">{city}</h2>
      <div className="flex items-center justify-between">
        <div className="text-5xl font-bold">{Math.round(temp)}°C</div>
        <div className={`${weather==="Clear" ? 'text-yellow-500':'text-neutral-50'}`}>{getIcon(weather)}</div>
      </div>
      <p className="text-sm mt-2">{weather}</p>
    </div>
  );
}
