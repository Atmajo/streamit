import { Globe, Twitch, Users, Video, Youtube, Zap } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-[900] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-8">
            Stream Like a Pro
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl mx-auto mb-12">
            Your all-in-one platform for professional streaming to YouTube,
            Twitch, and beyond. Start broadcasting in minutes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-lg font-normal transition-all transform hover:scale-105 flex items-center justify-center space-x-2">
              <Video className="w-5 h-5" />
              <span>Start Streaming Now</span>
            </button>
            <button className="px-8 py-4 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-lg font-normal transition-all transform hover:scale-105">
              Watch Demo
            </button>
          </div>

          <div className="flex justify-center items-center space-x-8 mb-16">
            <Youtube className="w-10 h-10 text-gray-400 hover:text-red-500 transition-colors" />
            <Twitch className="w-8 h-8 text-gray-400 hover:text-purple-500 transition-colors" />
            <Globe className="w-8 h-8 text-gray-400 hover:text-blue-500 transition-colors" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <Video className="w-6 h-6 text-purple-400" />,
                title: "4K Streaming",
                description:
                  "Broadcast in crystal clear quality with our optimized streaming engine",
              },
              {
                icon: <Users className="w-6 h-6 text-pink-400" />,
                title: "Multi-Platform",
                description:
                  "Stream to multiple platforms simultaneously without quality loss",
              },
              {
                icon: <Zap className="w-6 h-6 text-red-400" />,
                title: "Low Latency",
                description:
                  "Experience real-time interaction with your audience",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 bg-opacity-50 rounded-2xl hover:bg-opacity-70 transition-all transform hover:scale-105"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
