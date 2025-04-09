// components/ForecastList.tsx
import { WiDaySunny, WiRain, WiCloud } from "react-icons/wi";

type ForecastItem = {
  dt: number;
  main: { temp: number };
  weather: { main: string }[];
};

type Props = {
  list: ForecastItem[];
};

const getIcon = (main: string) => {
  switch (main) {
    case "Clear": return <WiDaySunny size={32} />;
    case "Clouds": return <WiCloud size={32} />;
    case "Rain": return <WiRain size={32} />;
    default: return <WiDaySunny size={32} />;
  }
};

export default function ForecastList({ list }: Props) {
  // Get one forecast per day (every 8 steps in the 3-hour interval)
  const daily = list.filter((_, i) => i % 8 === 0).slice(0, 5);

  return (
    <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-4 text-white w-full max-w-4xl mx-auto mt-6">
      <h3 className="text-lg font-semibold mb-4">5-Day Forecast</h3>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
        {daily.map((item) => {
          const date = new Date(item.dt * 1000);
          const day = date.toLocaleDateString(undefined, { weekday: "short" });
          return (
            <div key={item.dt} className="flex flex-col items-center gap-1">
              <p className="text-sm">{day}</p>
              {getIcon(item.weather[0].main)}
              <p className="text-sm">{Math.round(item.main.temp)}°C</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
