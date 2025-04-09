
import { Cloud, Sun } from 'lucide-react';
import { Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-500 to-indigo-600 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Content Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0">
          {/* App Purpose Section */}
          <div className="flex items-center space-x-3">
            <Sun className="w-8 h-8 text-white" />
            <span className="text-lg font-semibold">Weather Explorer</span>
          </div>

          {/* Tech Stack Section */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-white" />
              <span>React</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-white" />
              <span>TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <Code className="w-5 h-5 text-white" />
              <span>Tailwind CSS</span>
            </div>
          </div>

          {/* Powered by OpenWeather API Section */}
          <div className="flex items-center space-x-2">
            <Cloud className="w-6 h-6 text-white" />
            <span className="text-sm">Powered by OpenWeather API</span>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-xs text-white/70 mt-6">
          &copy; {new Date().getFullYear()} Weather Explorer. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
