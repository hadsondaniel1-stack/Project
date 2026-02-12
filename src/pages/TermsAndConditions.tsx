import { useLanguage } from '@/contexts/LanguageContext';

const TermsAndConditions = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="/" className="flex items-center gap-3">
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
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">{t('terms.title')}</h1>
          <p className="text-slate-400 mb-8">{t('terms.lastUpdated')}</p>

          <div className="space-y-8 text-slate-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.1.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.1.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.2.title')}</h2>
              <p className="leading-relaxed mb-4">
                {t('terms.2.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('terms.2.item1')}</li>
                <li>{t('terms.2.item2')}</li>
                <li>{t('terms.2.item3')}</li>
                <li>{t('terms.2.item4')}</li>
                <li>{t('terms.2.item5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.3.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.3.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.4.title')}</h2>
              <p className="leading-relaxed mb-4">
                {t('terms.4.content')}
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>{t('terms.4.item1')}</li>
                <li>{t('terms.4.item2')}</li>
                <li>{t('terms.4.item3')}</li>
                <li>{t('terms.4.item4')}</li>
                <li>{t('terms.4.item5')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.5.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.5.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.6.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.6.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.7.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.7.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.8.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.8.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.9.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.9.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.10.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.10.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.11.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.11.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.12.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.12.content')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('terms.13.title')}</h2>
              <p className="leading-relaxed">
                {t('terms.13.content')}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
