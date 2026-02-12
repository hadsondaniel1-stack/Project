import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Globe, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguagePromptProps {
  onOpenLanguageSwitcher: () => void;
}

export function LanguagePrompt({ onOpenLanguageSwitcher }: LanguagePromptProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Show prompt after a short delay on every visit
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleSelectLanguage = () => {
    handleClose();
    onOpenLanguageSwitcher();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50 animate-in fade-in duration-300" onClick={handleClose} />
      
      {/* Centered Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="pointer-events-auto animate-in zoom-in-95 duration-300">
          <Card className="bg-slate-800 border-slate-700 p-6 shadow-2xl max-w-[320px] w-full mx-4">
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
        
        <div className="flex flex-col items-center gap-3 pt-2">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
            <Globe className="w-6 h-6 text-cyan-400" />
          </div>
          
          <p className="text-white text-center text-sm font-medium">
            {t('languagePrompt.message') || 'Choose your preferred language'}
          </p>
          
          <Button
            onClick={handleSelectLanguage}
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold"
          >
            {t('languagePrompt.button') || 'Select Language'}
          </Button>
          </div>
        </Card>
      </div>
    </div>
    </>
  );
}
