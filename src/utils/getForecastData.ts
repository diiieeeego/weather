// utils/getForecast.ts
export const getForecastData = async (city: string) => {
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    );
  
    if (!res.ok) throw new Error("Failed to fetch forecast");
  
    return res.json();
  };
  