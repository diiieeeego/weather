
import { Cloud, Sun } from 'lucide-react';
import { Code } from 'lucide-react';
import Image from 'next/image';
export default function Footer(){
  return (
    <footer className="bg-neutral-100 text-neutral-800 py-8">
      <div className="container mx-auto px-6">
        {/* Content Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
          {/* App Purpose Section */}
          <div className="flex items-center space-x-3">
            <Sun className="w-8 h-8 text-yellow-500" />
            <span className="text-lg font-semibold">Weather Explorer</span>
          </div>

          {/* Tech Stack Section */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Image src={"/njs.svg"} width={24} height={24} alt="nextjs" />
              <span>NextJS</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={"/typescript.svg"} width={24} height={24} alt="typescript" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <Image src={"/tailwind.svg"} width={24} height={24} alt="tailwind" />
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Powered by OpenWeather API Section */}
          <div className="flex items-center space-x-2">
            <Cloud className="w-6 h-6 text-neutral-800" />
            <span className="text-sm">Powered by OpenWeather API</span>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-neutral-700 mt-6">
          &copy; {new Date().getFullYear()} Weather Explorer. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};


