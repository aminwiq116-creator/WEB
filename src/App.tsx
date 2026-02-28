import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, Gift, ClipboardList, Star, ShieldCheck, Clock } from 'lucide-react';

export default function App() {
  const trackingLink = "https://gloffers.org/aff_c?offer_id=1377&aff_id=170546";

  // Social proof notifications
  const [notification, setNotification] = useState<{name: string, amount: number, time: string} | null>(null);
  
  // 6-day countdown timer state
  const [timeLeft, setTimeLeft] = useState(6 * 24 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${d}d ${h.toString().padStart(2, '0')}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
  };

  useEffect(() => {
    const names = ["James T.", "Sarah M.", "Michael B.", "Jessica R.", "David L.", "Emily C."];
    const times = ["just now", "2 mins ago", "5 mins ago", "1 min ago", "just now"];
    
    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomTime = times[Math.floor(Math.random() * times.length)];
      setNotification({ name: randomName, amount: 500, time: randomTime });
      
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };

    const interval = setInterval(showNotification, 15000);
    setTimeout(showNotification, 2000); // Show first one quickly

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-blue-200">
      {/* Header */}
      <div className="sticky top-0 z-50 drop-shadow-md">
        <header className="bg-[#041E42] text-white py-4 px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-tight">Walmart</span>
            <span className="text-blue-200 font-medium text-sm mt-1 hidden sm:inline">| Winter Rewards</span>
          </div>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium bg-blue-800/50 px-3 py-1.5 rounded-full border border-blue-400/30">
            <Clock className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="tabular-nums">Ends in: {formatTime(timeLeft)}</span>
          </div>
        </header>
        {/* Curved bottom edge */}
        <div className="w-full overflow-hidden leading-none">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-[30px] sm:h-[50px] block" preserveAspectRatio="none">
            <path fill="#041E42" d="M0,100 C300,0 800,0 1440,30 L1440,0 L0,0 Z"></path>
          </svg>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-12 flex flex-col items-center">
        
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Gift Card Graphic */}
          <div className="relative w-80 h-48 sm:w-96 sm:h-56 mx-auto mb-8 transform hover:scale-105 transition-transform duration-500 flex items-center justify-center">
            {/* 
              👇 ضع رابط الصورة الخاصة بك هنا بدلاً من الرابط الحالي 👇
              REPLACE THE src URL BELOW WITH YOUR OWN IMAGE URL 
            */}
            <img 
              src="https://i.ibb.co/Jwzg5bZb/Adobe-Express-file.png" 
              alt="$500 Walmart Gift Card" 
              className="max-w-full max-h-full object-contain drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-semibold text-sm mb-6 border border-blue-200 shadow-sm">
            <ShieldCheck className="w-4 h-4" />
            Verified US Program (Ages 25+)
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            Get a <span className="text-[#041E42]">$500 Walmart Gift Card</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Take our quick survey about your shopping experience and complete a few sponsor deals to receive your $500 Winter Reward.
          </p>

          <a 
            href={trackingLink}
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#041E42] text-white font-bold text-xl rounded-full overflow-hidden shadow-[0_8px_30px_rgb(4,30,66,0.3)] hover:shadow-[0_8px_30px_rgb(4,30,66,0.5)] transition-all hover:-translate-y-1"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
            <span className="relative">Start Survey Now</span>
            <ArrowRight className="w-6 h-6 relative group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="text-sm text-slate-500 mt-4 font-medium">Takes less than 5 minutes. No purchase necessary for survey.</p>
        </div>

        {/* Steps Section */}
        <div className="w-full max-w-5xl mx-auto mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-slate-900">Simple 3-Step Process</h2>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-blue-200 -z-10"></div>

            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all relative group">
              <div className="w-16 h-16 bg-blue-50 text-[#041E42] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#041E42] group-hover:text-white transition-colors shadow-sm mx-auto md:mx-0">
                <ClipboardList className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left text-slate-900">1. Take the Survey</h3>
              <p className="text-slate-600 text-center md:text-left leading-relaxed">
                Answer a few quick questions about your recent shopping experiences and preferences.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all relative group">
              <div className="w-16 h-16 bg-blue-50 text-[#041E42] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#041E42] group-hover:text-white transition-colors shadow-sm mx-auto md:mx-0">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left text-slate-900">2. Complete Deals</h3>
              <p className="text-slate-600 text-center md:text-left leading-relaxed">
                <span className="font-semibold text-blue-700">Important:</span> To qualify for the full $500 payout, you must complete 3-5 optional sponsor deals after the survey.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg hover:border-blue-300 transition-all relative group">
              <div className="w-16 h-16 bg-blue-50 text-[#041E42] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#041E42] group-hover:text-white transition-colors shadow-sm mx-auto md:mx-0">
                <Gift className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-center md:text-left text-slate-900">3. Get Rewarded</h3>
              <p className="text-slate-600 text-center md:text-left leading-relaxed">
                Once your deals are verified, receive your $500 Walmart gift card directly to your email.
              </p>
            </div>
          </div>
        </div>

        {/* Why Participate */}
        <div className="w-full max-w-3xl mx-auto text-center bg-gradient-to-b from-blue-50 to-white rounded-3xl p-8 sm:p-12 mb-12 border border-blue-100 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900">Why Participate?</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            Brands want your opinion! By sharing your feedback and trying out new products or services through our sponsor deals, you help shape the future of retail while earning substantial rewards.
          </p>
          <a 
            href={trackingLink}
            className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-[#041E42] font-bold text-lg rounded-full shadow-sm hover:shadow-md transition-all border border-blue-200 hover:bg-blue-50"
          >
            Claim Your Reward Now
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 text-center text-sm">
        <div className="max-w-4xl mx-auto">

          <p className="mb-4 leading-relaxed">
            * Reward requires completion of survey and 3-5 sponsored deals. Must be a US resident, 25 years of age or older. See full Terms & Conditions on the offer page for details.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>

      {/* Social Proof Toast */}
      <div className={`fixed bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-80 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 transform transition-all duration-500 flex items-start gap-4 z-50 ${notification ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'}`}>
        <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-slate-800 font-medium">
            <span className="font-bold">{notification?.name}</span> just completed their deals!
          </p>
          <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <span className="text-green-600 font-semibold">Earned ${notification?.amount}</span> • {notification?.time}
          </p>
        </div>
      </div>

    </div>
  );
}
