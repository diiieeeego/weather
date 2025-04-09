
import {Droplet, Wind, WindArrowDown} from "lucide-react"

// components/WeatherDetails.tsx
type Props = {
    humidity: number;
    pressure: number;
    wind: number;
  };
  
  export default function WeatherDetails({ humidity, pressure, wind }: Props) {
    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 shadow-md rounded-2xl p-4 text-white w-full max-w-sm mx-auto mt-4">
        <h3 className="text-lg font-semibold mb-2 text-center sm:text-start">Details</h3>
        <div className="flex justify-between text-sm">
          <div className="flex flex-col items-center">
            <Droplet size={24} /> 
            <p className="font-bold">Humidity</p>
            <p>{humidity}%</p>
          </div>
          <div className="flex flex-col items-center">
            <Wind size={24} />
            <p className="font-bold">Wind</p>
            <p>{wind} m/s</p>
          </div>
          <div className="flex flex-col items-center">
            <WindArrowDown size={24} />
            <p className="font-bold">Pressure</p>
            <p>{pressure} hPa</p>
          </div>
        </div>
      </div>
    );
  }
  