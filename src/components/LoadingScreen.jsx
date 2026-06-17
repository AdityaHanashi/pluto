import React from 'react'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] bg-[#161311] flex flex-col items-center justify-center overflow-hidden">
      <style>{`
        .loader-container { position: relative; margin-bottom: 64px; }
        .logo-box {
          width: 80px; height: 80px; border-radius: 50%;
          background: #C9A84C;
          display: flex; align-items: center; justify-content: center;
          font-size: 30px; font-weight: bold; font-family: 'Orbitron', sans-serif;
          animation: pulse 2s infinite ease-in-out;
        }
        .ring-1 {
          position: absolute; inset: 0; border-radius: 50%; border: 1px solid rgba(201,168,76,0.3);
          transform: scale(1.5);
          animation: spin 8s linear infinite;
        }
        .ring-2 {
          position: absolute; inset: 0; border-radius: 50%; border: 1px solid rgba(201,168,76,0.2);
          transform: scale(2.2);
          animation: spin-reverse 12s linear infinite;
        }
        .progress-container { width: 320px; height: 3px; background: rgba(255,255,255,0.1); border-radius: 999px; position: relative; overflow: hidden; margin-bottom: 16px; margin-top: 32px; }
        .progress-bar {
          height: 100%; border-radius: 999px; background: #C9A84C;
          animation: load 2.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        .text-cycler {
          color: rgba(201,168,76,0.8); font-size: 14px; letter-spacing: 0.05em; font-family: monospace;
          position: relative; height: 20px; overflow: hidden; display: flex; align-items: center; justify-content: center; width: 320px;
        }
        .text-cycler span {
          position: absolute; opacity: 0;
          animation: cycle-text 2.4s linear forwards;
          text-align: center; width: 100%;
        }
        .text-cycler span:nth-child(1) { animation-delay: 0s; }
        .text-cycler span:nth-child(2) { animation-delay: 0.6s; }
        .text-cycler span:nth-child(3) { animation-delay: 1.2s; }
        .text-cycler span:nth-child(4) { animation-delay: 1.8s; }
        
        .scan-line {
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, #C9A84C, transparent); opacity: 0.6;
          animation: scan 2.5s linear infinite;
        }
        
        @keyframes pulse { 0%, 100% { box-shadow: 0 0 20px rgba(201,168,76,0.4); } 50% { box-shadow: 0 0 40px rgba(201,168,76,0.8); } }
        @keyframes spin { 100% { transform: scale(1.5) rotate(360deg); } }
        @keyframes spin-reverse { 100% { transform: scale(2.2) rotate(-360deg); } }
        @keyframes load { 0% { width: 0%; } 20% { width: 15%; } 50% { width: 45%; } 80% { width: 70%; } 100% { width: 100%; } }
        @keyframes cycle-text { 0% { opacity: 0; transform: translateY(10px); } 5%, 20% { opacity: 1; transform: translateY(0); } 25% { opacity: 0; transform: translateY(-10px); } 100% { opacity: 0; } }
        @keyframes cycle-text-last { 0% { opacity: 0; transform: translateY(10px); } 5%, 100% { opacity: 1; transform: translateY(0); } }
        @keyframes scan { 0% { transform: translateY(0vh); } 100% { transform: translateY(100vh); } }
      `}</style>

      {/* Abstract animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-[100px]" />

      <div className="flex flex-col items-center z-10">
        <div className="loader-container mt-6">
          <div className="logo-box text-[#141110]">P</div>
          <div className="ring-1" />
          <div className="ring-2" />
        </div>

        <div className="text-4xl font-bold font-orbitron text-[#C9A84C] mb-2 mt-4">PLUTO.AI</div>
        <p className="text-gray-500 text-sm tracking-widest uppercase mb-6">Building The Future</p>

        <div className="progress-container">
          <div className="progress-bar" />
        </div>

        <div className="text-cycler font-mono-jb">
          <span>Initializing AI Systems...</span>
          <span>Connecting Automation Modules...</span>
          <span>Calibrating Voice Agents...</span>
          <span style={{animationFillMode: 'forwards', animationName: 'cycle-text-last', animationDelay: '1.8s'}}>Almost Ready...</span>
        </div>
      </div>

      <div className="scan-line" />
    </div>
  )
}

export default LoadingScreen
