import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PhoneInput } from "@/components/PhoneInput";
import { LanguageSwitcher, LanguageSwitcherRef } from "@/components/LanguageSwitcher";
import { LanguagePrompt } from "@/components/LanguagePrompt";
import { useLanguage } from "@/contexts/LanguageContext";
import { Brain, GraduationCap, Sparkles, Zap, BookOpen, Shield, AlertCircle, ChevronDown } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const languageSwitcherRef = useRef<LanguageSwitcherRef>(null);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: ""
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleOpenLanguageSwitcher = () => {
    languageSwitcherRef.current?.openSwitcher();
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  console.log("📝 Form submitted:", formData);
  
  try {
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log('✅ Server response:', data);
    
    if (data.success) {
      navigate('/thank-you');
    } else {
      alert('Gabim: ' + data.message);
    }
  } catch (error) {
    console.error('❌ Fetch error:', error);
    alert('Gabim në lidhje me serverin. Ju lutemi provoni përsëri.');
  }
};

  const isFormValid = formData.name.trim() !== '' && 
                      formData.surname.trim() !== '' && 
                      formData.email.trim() !== '' && 
                      formData.phone.trim() !== '';

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
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
              <span className="text-2xl font-bold text-white">{t('nav.logo')}</span>
            </div>
            <LanguageSwitcher ref={languageSwitcherRef} />
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* 👉 PJESA QENDRORE - TITULLI DHE TEKSTI I GJATË */}
<div className="text-center max-w-4xl mx-auto mb-16">
  {/* Titulli kryesor - TANI I PËRKTHYER */}
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
    {t('hero.title')} {t('hero.titleHighlight')}
  </h1>
            
                          {/* 👉 TEKSTI I GJATË - NË QENDËR POSHTË TITULLIT */}
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  {t('hero.description1')}
                </p>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  {t('hero.description2')}
                </p>
              </div>
          </div>
          
          {/* Grid me 2 kolona - majtas VIDEO, djathtas formular */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mt-8">
            
            {/* LEFT SIDE - VIDEO 2.mp4 */}
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-950/50 border border-blue-800 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-cyan-400">{t('hero.badge')}</span>
              </div>
              
              {/* VIDEO - PA DOWNLOAD, PA PICTURE IN PICTURE */}
              <div className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-6 sm:p-8 shadow-2xl">
                <video 
                  className="w-full h-[400px] object-cover rounded-lg"
                  controls
                  controlsList="nodownload"
                  disablePictureInPicture
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/2.mp4" type="video/mp4" />
                  <p className="text-slate-400 p-4 text-center">
                    Browser-i yt nuk e mbështet videon.
                  </p>
                </video>
              </div>
            </div>
            
            {/* RIGHT SIDE - FORMULARI */}
            <div id="signup-form">
              <Card className="bg-slate-800/50 border-slate-700 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">{t('form.title')}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-white mb-2 block">{t('form.name')}</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t('form.namePlaceholder')}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="surname" className="text-white mb-2 block">{t('form.surname')}</Label>
                    <Input
                      id="surname"
                      type="text"
                      placeholder={t('form.surnamePlaceholder')}
                      value={formData.surname}
                      onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white mb-2 block">{t('form.email')}</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t('form.emailPlaceholder')}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-500"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-white mb-2 block">{t('form.phone')}</Label>
                    <PhoneInput
                      value={formData.phone}
                      onChange={(value) => setFormData({ ...formData, phone: value })}
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={!isFormValid}
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-cyan-500"
                  >
                    {t('form.submit')}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SECUREPRO - TANI NË TË MAJTË */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT SIDE - TEKSTI I WHAT IS SECUREPRO */}
<div className="text-left">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
    {t('what.title')}
  </h2>
  
  <div className="space-y-6 text-slate-300 leading-relaxed text-base sm:text-lg">
    <p>
      {t('what.p1')}
    </p>
    <p>
      {t('what.p2')}
    </p>
    <p>
      {t('what.p3')}
    </p>
  </div>

  <div className="mt-10">
    <Button 
      size="lg"
      onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium text-lg px-8"
    >
      {t('cta.startJourney')}
    </Button>
  </div>
</div>
            
            {/* RIGHT SIDE - FOTO 1.JPG */}
<div className="hidden lg:block">
  <div className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-6 sm:p-8 shadow-2xl">
    <img 
      src="/images/1.jpg" 
      alt="SecurePro Financial Security"
      className="w-full h-[600px] object-cover rounded-lg"
    />
  </div>
</div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('why.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700 p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <Brain className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('why.feature1.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('why.feature1.desc')}
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('why.feature2.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('why.feature2.desc')}
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <Sparkles className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('why.feature3.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('why.feature3.desc')}
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium text-lg px-8"
            >
              {t('cta.getStarted')}
            </Button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('education.title')}
            </h2>
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
              {t('education.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="bg-slate-800/50 border-slate-700 p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-cyan-400" />
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('education.p1')}
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-cyan-400" />
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('education.p2')}
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
                <AlertCircle className="w-7 h-7 text-cyan-400" />
              </div>
              <p className="text-slate-400 leading-relaxed">
                {t('education.p3')}
              </p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium text-lg px-8"
            >
              {t('cta.registerFree')}
            </Button>
          </div>
        </div>
      </section>

      {/* Six Core Financial Principles Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('principles.title')}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-black border border-slate-700 rounded-lg p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('principles.1.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('principles.1.desc')}
              </p>
            </div>

            <div className="bg-black border border-slate-700 rounded-lg p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('principles.2.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('principles.2.desc')}
              </p>
            </div>

            <div className="bg-black border border-slate-700 rounded-lg p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('principles.3.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('principles.3.desc')}
              </p>
            </div>

            <div className="bg-black border border-slate-700 rounded-lg p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('principles.4.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('principles.4.desc')}
              </p>
            </div>

            <div className="bg-black border border-slate-700 rounded-lg p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('principles.5.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('principles.5.desc')}
              </p>
            </div>

            <div className="bg-black border border-slate-700 rounded-lg p-6 sm:p-8 hover:border-cyan-500/50 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">{t('principles.6.title')}</h3>
              <p className="text-slate-400 leading-relaxed">
                {t('principles.6.desc')}
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button 
              onClick={() => {
                const form = document.getElementById('signup-form');
                form?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-medium text-lg px-8 py-6"
            >
              {t('principles.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('faq.title')}
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(0)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/70 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white pr-8">
                  {t('faq.1.q')}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform flex-shrink-0 ${
                    openFaq === 0 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === 0 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">
                    {t('faq.1.a')}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(1)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/70 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white pr-8">
                  {t('faq.2.q')}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform flex-shrink-0 ${
                    openFaq === 1 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === 1 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">
                    {t('faq.2.a')}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(2)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/70 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white pr-8">
                  {t('faq.3.q')}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform flex-shrink-0 ${
                    openFaq === 2 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === 2 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">
                    {t('faq.3.a')}
                  </p>
                </div>
              )}
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFaq(3)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-800/70 transition-all"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white pr-8">
                  {t('faq.4.q')}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-cyan-400 transition-transform flex-shrink-0 ${
                    openFaq === 3 ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === 3 && (
                <div className="px-6 pb-6">
                  <p className="text-slate-400 leading-relaxed">
                    {t('faq.4.a')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 4L6 10V18C6 26.4 11.6 34.1 20 36C28.4 34.1 34 26.4 34 18V10L20 4Z" fill="url(#gradient2)" stroke="#06b6d4" strokeWidth="2"/>
                <circle cx="20" cy="20" r="6" fill="#0f172a"/>
                <rect x="18" y="16" width="4" height="6" rx="1" fill="#06b6d4"/>
                <circle cx="20" cy="18" r="1.5" fill="#0f172a"/>
                <defs>
                  <linearGradient id="gradient2" x1="6" y1="4" x2="34" y2="36" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#1e40af"/>
                    <stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-white">{t('nav.logo')}</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex gap-6">
                <a href="/privacy-policy" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {t('footer.privacy')}
                </a>
                <a href="/terms-and-conditions" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                  {t('footer.terms')}
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-slate-400 mb-2">
                {t('footer.rights')}
              </div>
              <p className="text-slate-600 text-xs">
                {t('footer.disclaimer')}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Language Prompt */}
      <LanguagePrompt onOpenLanguageSwitcher={handleOpenLanguageSwitcher} />
    </div>
  );
};

export default Index;