import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ChevronDown, Globe } from 'lucide-react';
import { useState, forwardRef, useImperativeHandle } from 'react';

type Language = 'en' | 'it' | 'fr' | 'es' | 'de';

const languages: { code: Language; name: string; flagCode: string }[] = [
  { code: 'en', name: 'English', flagCode: 'gb' },
  { code: 'it', name: 'Italiano', flagCode: 'it' },
  { code: 'fr', name: 'Français', flagCode: 'fr' },
  { code: 'es', name: 'Español', flagCode: 'es' },
  { code: 'de', name: 'Deutsch', flagCode: 'de' },
];

export interface LanguageSwitcherRef {
  openSwitcher: () => void;
}

export const LanguageSwitcher = forwardRef<LanguageSwitcherRef>((props, ref) => {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    openSwitcher: () => setOpen(true),
  }));

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="bg-slate-800 border-slate-700 text-white hover:bg-slate-700 gap-2"
        >
          <Globe className="w-4 h-4" />
          <img 
            src={`https://images.pexels.com/photos/8828324/pexels-photo-8828324.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`}
            srcSet={`https://flagcdn.com/w40/${currentLanguage.flagCode}.png 2x`}
            width="20"
            alt={currentLanguage.name}
            className="rounded-sm"
          />
          <span className="hidden sm:inline">{currentLanguage.name}</span>
          <ChevronDown className="w-4 h-4 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-2 bg-slate-800 border-slate-700" align="end">
        <div className="space-y-1">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-left transition-colors ${
                language === lang.code
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-white hover:bg-slate-700'
              }`}
            >
              <img 
                src={`https://images.pexels.com/photos/27829498/pexels-photo-27829498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`}
                srcSet={`https://flagcdn.com/w40/${lang.flagCode}.png 2x`}
                width="20"
                alt={lang.name}
                className="rounded-sm"
              />
              <span className="flex-1">{lang.name}</span>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
});
