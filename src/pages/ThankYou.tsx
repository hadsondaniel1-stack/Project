import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ThankYou = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 blur-3xl rounded-full"></div>
            <CheckCircle className="w-24 h-24 text-cyan-400 relative" strokeWidth={1.5} />
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4L6 10V18C6 26.4 11.6 34.1 20 36C28.4 34.1 34 26.4 34 18V10L20 4Z" fill="url(#gradient)" stroke="#06b6d4" strokeWidth="2"/>
            <circle cx="20" cy="20" r="6" fill="#0f172a"/>
            <rect x="18" y="16" width="4" height="6" rx="1" fill="#06b6d4"/>
            <circle cx="20" cy="18" r="1.5" fill="#0f172a"/>
            <defs>
              <linearGradient id="gradient" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#1e40af"/>
                <stop offset="1" stopColor="#06b6d4"/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-2xl font-bold text-white">SecurePro</span>
        </div>

        {/* Main Message */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          {t('thankYou.title')}{" "}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            SecurePro!
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed">
          {t('thankYou.message')}
        </p>

        {/* Additional Info */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">{t('thankYou.nextSteps')}</h2>
          <div className="space-y-4 text-slate-300 text-left text-sm sm:text-base">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                <span className="text-cyan-400 text-sm font-bold">1</span>
              </div>
              <p>{t('thankYou.step1')}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                <span className="text-cyan-400 text-sm font-bold">2</span>
              </div>
              <p>{t('thankYou.step2')}</p>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-cyan-500/20 flex items-center justify-center mt-1">
                <span className="text-cyan-400 text-sm font-bold">3</span>
              </div>
              <p>{t('thankYou.step3')}</p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Button 
          onClick={() => navigate('/')}
          className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium text-lg px-8 py-6"
        >
          {t('thankYou.returnHome')}
        </Button>
      </div>
    </div>
  );
};

export default ThankYou;
