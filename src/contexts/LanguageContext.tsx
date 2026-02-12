import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'it' | 'fr' | 'es' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.logo': 'SecurePro',
    
    // Hero Section
    'hero.badge': 'Enterprise-Grade Security',
    'hero.title': 'Are You Ready to Secure Your',
    'hero.titleHighlight': 'Financial Future?',
    'hero.description1': "In today's world, planning for the future is essential. SecurePro uses advanced AI technology to help you make informed decisions and secure your financial future.",
    'hero.description2': 'Our intelligent tools guide you through smart investment choices, allowing you to protect and grow your savings with ease.',
    'form.title': 'Sign Up Today',
    'form.name': 'Name',
    'form.namePlaceholder': 'Enter your name',
    'form.surname': 'Surname',
    'form.surnamePlaceholder': 'Enter your surname',
    'form.email': 'Email',
    'form.emailPlaceholder': 'Enter your email',
    'form.phone': 'Phone Number',
    'form.phonePlaceholder': 'Phone number',
    'form.submit': 'Submit',
    
    // What is SecurePro
    'what.title': 'What is SecurePro?',
    'what.subtitle': 'Partnering with leading investment education firms, SecurePro provides free, accessible financial knowledge to help you make informed decisions about your financial future.',
    'what.p1': "The necessity for financial education is universal. It's a fundamental aspect of modern life. We require money to navigate the demands of our world. Regrettably, a significant portion of the global population lacks financial literacy.",
    'what.p2': 'This deficiency can lead to poor financial decisions, resulting in debt, inadequate savings, and an uncertain future. Financial education is the key to breaking this cycle.',
    'what.p3': 'It empowers individuals with the knowledge and skills needed to make informed financial decisions, manage money effectively, and plan for a secure future.',
    
    // Why SecurePro
    'why.title': 'Why Do People Prefer SecurePro?',
    'why.feature1.title': 'AI-Powered Insights',
    'why.feature1.desc': 'Our advanced AI analyzes market trends and provides personalized investment recommendations tailored to your goals.',
    'why.feature2.title': 'Expert Guidance',
    'why.feature2.desc': 'Connect with certified financial advisors who understand your unique situation and help you make informed decisions.',
    'why.feature3.title': 'Secure & Reliable',
    'why.feature3.desc': 'Bank-level encryption and security protocols ensure your financial data is always protected.',
    
    // Education
    'education.title': 'EDUCATION',
    'education.subtitle': 'Unlock Your Financial Potential with SecurePro Education',
    'education.p1': 'Financial education firms, as their name suggests, are dedicated to teaching the principles of finance and investment. These organizations present a clear solution to the widespread issues of financial illiteracy and knowledge gaps we see today. We at SecurePro bring these firms within reach of the everyday person, and we do it free of charge. With SecurePro, you can save both time and money in your pursuit of financial knowledge.',
    'education.p2': 'The timeless saying "no risk, no reward" perfectly sums up risk management. Every investor must practice risk management; without it, you are simply navigating blindly, subject to the whims of the market. Risk management aims to minimize losses as much as possible. This typically involves analyzing each asset individually and understanding how various market forces might influence its performance. With SecurePro, anyone can learn about investment risks and the strategies for managing them.',
    'education.p3': 'Misinformation is everywhere, and it\'s a major issue today. It can be challenging to spot fake news, especially for someone without experience. However, with the right education, like that accessible through SecurePro, people can develop the skills to identify it. Fake news can seriously impair our decision-making, making it vital to know how to spot it. Look for poor grammar and typos in the article. Be suspicious of content labeled as "sponsored" and headlines that make outlandish claims. Always verify the source and ensure it\'s not from a questionable website. These are a few simple tips anyone can use to check for fake news.',
    
    // Six Principles
    'principles.title': 'SIX CORE FINANCIAL PRINCIPLES',
    'principles.1.title': 'Plan before you act',
    'principles.1.desc': 'Understanding and assessing your current situation can help clarify the best path forward. A solid financial plan and clear goals are crucial for anyone looking to invest their hard-earned money.',
    'principles.2.title': 'Think and focus on the long run',
    'principles.2.desc': 'Some investors adopt a buy-and-hold strategy, retaining an asset for an extended period rather than attempting to predict market fluctuations.',
    'principles.3.title': 'Use time wisely',
    'principles.3.desc': 'Time, as the saying goes, is money. Educated investors understand the critical role time plays in their efforts. If returns are generated, one might choose to compound them over many years.',
    'principles.4.title': 'Diversify your portfolio',
    'principles.4.desc': 'Diversifying a portfolio can help manage risk, as underperforming assets might be balanced out by others that are performing well, potentially lessening overall losses.',
    'principles.5.title': 'Investigate thoroughly',
    'principles.5.desc': 'Researching, reading, and making inquiries about an asset before investing is vital. This process can help reduce the inherent risks of investing.',
    'principles.6.title': 'Establish a budget and cut expenses',
    'principles.6.desc': 'Investment education can be beneficial for those who want to take control of their debts and finances by learning effective money management. Budgeting can help you trim unnecessary spending.',
    'principles.cta': 'Take The First Step',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.1.q': 'What is SecurePro?',
    'faq.1.a': 'SecurePro is a platform that connects individuals with leading investment education firms. We provide free access to financial knowledge and AI-powered tools to help you make informed decisions about your financial future.',
    'faq.2.q': 'Is SecurePro really free?',
    'faq.2.a': 'Yes, absolutely! SecurePro does not charge for our services. Signing up and accessing our network of investment education firms is completely free. We believe financial education should be accessible to everyone.',
    'faq.3.q': 'Do I need prior investment experience to use SecurePro?',
    'faq.3.a': 'Not at all! SecurePro is designed for everyone, regardless of experience level. Whether you\'re a complete beginner or have some investment knowledge, our platform and partner education firms can help you learn and grow at your own pace.',
    'faq.4.q': 'How does SecurePro protect my personal information?',
    'faq.4.a': 'We take your privacy and security seriously. SecurePro uses enterprise-grade security measures to protect your personal information. Your data is encrypted and stored securely, and we never share your information without your consent.',
    
    // CTA Buttons
    'cta.startJourney': 'Start Your Journey Today!',
    'cta.getStarted': 'Get Started Now!',
    'cta.registerFree': 'Register For Free!',
    'footer.disclaimer': 'Investment involves risk. Past performance is not indicative of future results.',
    
    // Footer
    'footer.tagline': 'Secure your financial future with AI-powered insights',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    'footer.rights': '© 2026 SecurePro. All rights reserved.',
    
    // Language Prompt
    'languagePrompt.message': 'Choose your preferred language',
    'languagePrompt.button': 'Select Language',
    
    // Thank You Page
    'thankYou.title': 'Thank You for Connecting with',
    'thankYou.message': "We've received your details, and one of our expert advisors will be reaching out to you shortly to help you take the next steps.",
    'thankYou.nextSteps': 'What Happens Next?',
    'thankYou.step1': 'Our team will review your information',
    'thankYou.step2': 'An expert advisor will contact you within 24-48 hours',
    'thankYou.step3': "Together, you'll create a personalized financial plan",
    'thankYou.returnHome': 'Return to Home',
    
    // Privacy Policy
    'privacy.title': 'Privacy Policy',
    'privacy.lastUpdated': 'Last Updated: February 11, 2026',
    'privacy.1.title': '1. Introduction',
    'privacy.1.content': 'Welcome to SecurePro. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.',
    'privacy.2.title': '2. Information We Collect',
    'privacy.2.content': 'We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:',
    'privacy.2.item1': 'Identity Data: includes first name, last name',
    'privacy.2.item2': 'Contact Data: includes email address and telephone numbers',
    'privacy.2.item3': 'Technical Data: includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform',
    'privacy.2.item4': 'Usage Data: includes information about how you use our website and services',
    'privacy.3.title': '3. How We Use Your Information',
    'privacy.3.content': 'We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:',
    'privacy.3.item1': 'To register you as a new user and connect you with our partner education firms',
    'privacy.3.item2': 'To provide you with information, products or services that you request from us',
    'privacy.3.item3': 'To notify you about changes to our service',
    'privacy.3.item4': 'To improve our website and services',
    'privacy.3.item5': 'To comply with legal obligations',
    'privacy.4.title': '4. Data Security',
    'privacy.4.content': 'We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. We use enterprise-grade encryption and security protocols to protect your information.',
    'privacy.5.title': '5. Data Sharing',
    'privacy.5.content': 'We may share your personal data with our partner investment education firms to provide you with the services you have requested. We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes.',
    'privacy.6.title': '6. Your Legal Rights',
    'privacy.6.content': 'Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:',
    'privacy.6.item1': 'Request access to your personal data',
    'privacy.6.item2': 'Request correction of your personal data',
    'privacy.6.item3': 'Request erasure of your personal data',
    'privacy.6.item4': 'Object to processing of your personal data',
    'privacy.6.item5': 'Request restriction of processing your personal data',
    'privacy.6.item6': 'Request transfer of your personal data',
    'privacy.6.item7': 'Withdraw consent at any time',
    'privacy.7.title': '7. Cookies',
    'privacy.7.content': 'Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.',
    'privacy.8.title': '8. Changes to This Privacy Policy',
    'privacy.8.content': 'We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date.',
    'privacy.9.title': '9. Contact Us',
    'privacy.9.content': 'If you have any questions about this privacy policy or our privacy practices, please contact us through our website contact form.',
    
    // Terms and Conditions
    'terms.title': 'Terms and Conditions',
    'terms.lastUpdated': 'Last Updated: February 11, 2026',
    'terms.1.title': '1. Agreement to Terms',
    'terms.1.content': 'By accessing and using SecurePro\'s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.',
    'terms.2.title': '2. Use License',
    'terms.2.content': 'Permission is granted to temporarily access the materials (information or software) on SecurePro\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:',
    'terms.2.item1': 'Modify or copy the materials',
    'terms.2.item2': 'Use the materials for any commercial purpose or for any public display',
    'terms.2.item3': 'Attempt to reverse engineer any software contained on SecurePro\'s website',
    'terms.2.item4': 'Remove any copyright or other proprietary notations from the materials',
    'terms.2.item5': 'Transfer the materials to another person or "mirror" the materials on any other server',
    'terms.3.title': '3. Service Description',
    'terms.3.content': 'SecurePro is a platform that connects users with investment education firms. We do not provide investment advice, financial planning services, or manage investments. Our role is solely to facilitate connections between users and educational resources.',
    'terms.4.title': '4. User Responsibilities',
    'terms.4.content': 'As a user of SecurePro, you agree to:',
    'terms.4.item1': 'Provide accurate, current, and complete information during registration',
    'terms.4.item2': 'Maintain the security of your account credentials',
    'terms.4.item3': 'Notify us immediately of any unauthorized use of your account',
    'terms.4.item4': 'Use the service in compliance with all applicable laws and regulations',
    'terms.4.item5': 'Not use the service for any unlawful or fraudulent purpose',
    'terms.5.title': '5. Investment Risks',
    'terms.5.content': 'Investment involves risk. Past performance is not indicative of future results. The value of investments can go down as well as up, and you may not get back the amount you invested. SecurePro does not guarantee any investment returns or outcomes.',
    'terms.6.title': '6. Disclaimer of Warranties',
    'terms.6.content': 'The materials on SecurePro\'s website are provided on an \'as is\' basis. SecurePro makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.',
    'terms.7.title': '7. Limitations of Liability',
    'terms.7.content': 'In no event shall SecurePro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SecurePro\'s website, even if SecurePro or a SecurePro authorized representative has been notified orally or in writing of the possibility of such damage.',
    'terms.8.title': '8. Third-Party Links',
    'terms.8.content': 'SecurePro\'s website may contain links to third-party websites or services that are not owned or controlled by SecurePro. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.',
    'terms.9.title': '9. Intellectual Property',
    'terms.9.content': 'The service and its original content, features, and functionality are and will remain the exclusive property of SecurePro and its licensors. The service is protected by copyright, trademark, and other laws.',
    'terms.10.title': '10. Termination',
    'terms.10.content': 'We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.',
    'terms.11.title': '11. Governing Law',
    'terms.11.content': 'These Terms shall be governed and construed in accordance with applicable laws, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.',
    'terms.12.title': '12. Changes to Terms',
    'terms.12.content': 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days\' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.',
    'terms.13.title': '13. Contact Information',
    'terms.13.content': 'If you have any questions about these Terms, please contact us through our website contact form.',
  },
  it: {
    // Navigation
    'nav.logo': 'SecurePro',
    
    // Hero Section
    'hero.badge': 'Sicurezza di Livello Aziendale',
    'hero.title': 'Sei Pronto a Proteggere il Tuo',
    'hero.titleHighlight': 'Futuro Finanziario?',
    'hero.description1': "Nel mondo di oggi, pianificare il futuro è essenziale. SecurePro utilizza tecnologia AI avanzata per aiutarti a prendere decisioni informate e proteggere il tuo futuro finanziario.",
    'hero.description2': 'I nostri strumenti intelligenti ti guidano attraverso scelte di investimento intelligenti, permettendoti di proteggere e far crescere i tuoi risparmi con facilità.',
    'form.title': 'Iscriviti Oggi',
    'form.name': 'Nome',
    'form.namePlaceholder': 'Inserisci il tuo nome',
    'form.surname': 'Cognome',
    'form.surnamePlaceholder': 'Inserisci il tuo cognome',
    'form.email': 'Email',
    'form.emailPlaceholder': 'Inserisci la tua email',
    'form.phone': 'Numero di Telefono',
    'form.phonePlaceholder': 'Numero di telefono',
    'form.submit': 'Invia',
    
    // What is SecurePro
    'what.title': 'Cos\'è SecurePro?',
    'what.subtitle': 'In collaborazione con le principali aziende di formazione sugli investimenti, SecurePro fornisce conoscenze finanziarie gratuite e accessibili per aiutarti a prendere decisioni informate sul tuo futuro finanziario.',
    'what.p1': "La necessità di educazione finanziaria è universale. È un aspetto fondamentale della vita moderna. Abbiamo bisogno di denaro per affrontare le esigenze del nostro mondo. Purtroppo, una parte significativa della popolazione mondiale manca di alfabetizzazione finanziaria.",
    'what.p2': 'Questa carenza può portare a decisioni finanziarie sbagliate, risultando in debiti, risparmi inadeguati e un futuro incerto. L\'educazione finanziaria è la chiave per rompere questo ciclo.',
    'what.p3': 'Essa dà potere agli individui con le conoscenze e le competenze necessarie per prendere decisioni finanziarie informate, gestire il denaro in modo efficace e pianificare un futuro sicuro.',
    
    // Why SecurePro
    'why.title': 'Perché le Persone Preferiscono SecurePro?',
    'why.feature1.title': 'Approfondimenti Basati su AI',
    'why.feature1.desc': 'La nostra AI avanzata analizza le tendenze di mercato e fornisce raccomandazioni di investimento personalizzate su misura per i tuoi obiettivi.',
    'why.feature2.title': 'Guida Esperta',
    'why.feature2.desc': 'Connettiti con consulenti finanziari certificati che comprendono la tua situazione unica e ti aiutano a prendere decisioni informate.',
    'why.feature3.title': 'Sicuro e Affidabile',
    'why.feature3.desc': 'Crittografia di livello bancario e protocolli di sicurezza garantiscono che i tuoi dati finanziari siano sempre protetti.',
    
    // Education
    'education.title': 'EDUCAZIONE',
    'education.subtitle': 'Sblocca il Tuo Potenziale Finanziario con l\'Educazione SecurePro',
    'education.p1': 'Le aziende di educazione finanziaria, come suggerisce il loro nome, sono dedicate all\'insegnamento dei principi di finanza e investimento. Queste organizzazioni presentano una soluzione chiara ai problemi diffusi di analfabetismo finanziario e lacune di conoscenza che vediamo oggi. Noi di SecurePro portiamo queste aziende alla portata della persona comune, e lo facciamo gratuitamente. Con SecurePro, puoi risparmiare tempo e denaro nella tua ricerca di conoscenza finanziaria.',
    'education.p2': 'Il detto senza tempo "nessun rischio, nessuna ricompensa" riassume perfettamente la gestione del rischio. Ogni investitore deve praticare la gestione del rischio; senza di essa, stai semplicemente navigando alla cieca, soggetto ai capricci del mercato. La gestione del rischio mira a ridurre al minimo le perdite il più possibile. Questo tipicamente comporta l\'analisi di ogni asset individualmente e la comprensione di come varie forze di mercato potrebbero influenzare le sue prestazioni. Con SecurePro, chiunque può imparare sui rischi di investimento e le strategie per gestirli.',
    'education.p3': 'La disinformazione è ovunque, ed è un problema importante oggi. Può essere difficile individuare le notizie false, specialmente per qualcuno senza esperienza. Tuttavia, con la giusta educazione, come quella accessibile attraverso SecurePro, le persone possono sviluppare le competenze per identificarla. Le notizie false possono compromettere seriamente il nostro processo decisionale, rendendo vitale sapere come individuarle. Cerca errori grammaticali e refusi nell\'articolo. Sii sospettoso dei contenuti etichettati come "sponsorizzati" e dei titoli che fanno affermazioni stravaganti. Verifica sempre la fonte e assicurati che non provenga da un sito web discutibile. Questi sono alcuni semplici consigli che chiunque può usare per verificare le notizie false.',
    
    // Six Principles
    'principles.title': 'SEI PRINCIPI FINANZIARI FONDAMENTALI',
    'principles.1.title': 'Pianifica prima di agire',
    'principles.1.desc': 'Comprendere e valutare la tua situazione attuale può aiutare a chiarire il percorso migliore da seguire. Un solido piano finanziario e obiettivi chiari sono cruciali per chiunque voglia investire i propri soldi guadagnati con fatica.',
    'principles.2.title': 'Pensa e concentrati sul lungo termine',
    'principles.2.desc': 'Alcuni investitori adottano una strategia di acquisto e mantenimento, conservando un asset per un periodo prolungato piuttosto che tentare di prevedere le fluttuazioni del mercato.',
    'principles.3.title': 'Usa il tempo saggiamente',
    'principles.3.desc': 'Il tempo, come si dice, è denaro. Gli investitori istruiti comprendono il ruolo critico che il tempo gioca nei loro sforzi. Se vengono generati rendimenti, si potrebbe scegliere di comporli per molti anni.',
    'principles.4.title': 'Diversifica il tuo portafoglio',
    'principles.4.desc': 'Diversificare un portafoglio può aiutare a gestire il rischio, poiché gli asset con prestazioni inferiori potrebbero essere bilanciati da altri che stanno andando bene, riducendo potenzialmente le perdite complessive.',
    'principles.5.title': 'Indaga a fondo',
    'principles.5.desc': 'Ricercare, leggere e fare domande su un asset prima di investire è vitale. Questo processo può aiutare a ridurre i rischi intrinseci dell\'investimento.',
    'principles.6.title': 'Stabilisci un budget e riduci le spese',
    'principles.6.desc': 'L\'educazione agli investimenti può essere utile per coloro che vogliono prendere il controllo dei propri debiti e finanze imparando una gestione efficace del denaro. Il budgeting può aiutarti a ridurre le spese non necessarie.',
    'principles.cta': 'Fai il Primo Passo',
    
    // FAQ
    'faq.title': 'Domande Frequenti',
    'faq.1.q': 'Cos\'è SecurePro?',
    'faq.1.a': 'SecurePro è una piattaforma che collega gli individui con le principali aziende di formazione sugli investimenti. Forniamo accesso gratuito alla conoscenza finanziaria e strumenti basati su AI per aiutarti a prendere decisioni informate sul tuo futuro finanziario.',
    'faq.2.q': 'SecurePro è davvero gratuito?',
    'faq.2.a': 'Sì, assolutamente! SecurePro non addebita per i nostri servizi. Iscriversi e accedere alla nostra rete di aziende di educazione agli investimenti è completamente gratuito. Crediamo che l\'educazione finanziaria dovrebbe essere accessibile a tutti.',
    'faq.3.q': 'Ho bisogno di esperienza di investimento precedente per usare SecurePro?',
    'faq.3.a': 'Assolutamente no! SecurePro è progettato per tutti, indipendentemente dal livello di esperienza. Che tu sia un principiante completo o abbia qualche conoscenza di investimento, la nostra piattaforma e le aziende partner di educazione possono aiutarti a imparare e crescere al tuo ritmo.',
    'faq.4.q': 'Come protegge SecurePro le mie informazioni personali?',
    'faq.4.a': 'Prendiamo sul serio la tua privacy e sicurezza. SecurePro utilizza misure di sicurezza di livello aziendale per proteggere le tue informazioni personali. I tuoi dati sono crittografati e archiviati in modo sicuro, e non condividiamo mai le tue informazioni senza il tuo consenso.',
    
    // CTA Buttons
    'cta.startJourney': 'Inizia il Tuo Viaggio Oggi!',
    'cta.getStarted': 'Inizia Ora!',
    'cta.registerFree': 'Registrati Gratuitamente!',
    'footer.disclaimer': 'L\'investimento comporta rischi. Le performance passate non sono indicative dei risultati futuri.',
    
    // Footer
    'footer.tagline': 'Proteggi il tuo futuro finanziario con approfondimenti basati su AI',
    'footer.privacy': 'Informativa sulla Privacy',
    'footer.terms': 'Termini e Condizioni',
    'footer.rights': '© 2026 SecurePro. Tutti i diritti riservati.',
    
    // Language Prompt
    'languagePrompt.message': 'Scegli la tua lingua preferita',
    'languagePrompt.button': 'Seleziona Lingua',
    
    // Thank You Page
    'thankYou.title': 'Grazie per esserti Connesso con',
    'thankYou.message': 'Abbiamo ricevuto i tuoi dettagli e uno dei nostri consulenti esperti ti contatterà a breve per aiutarti a compiere i prossimi passi.',
    'thankYou.nextSteps': 'Cosa Succede Dopo?',
    'thankYou.step1': 'Il nostro team esaminerà le tue informazioni',
    'thankYou.step2': 'Un consulente esperto ti contatterà entro 24-48 ore',
    'thankYou.step3': 'Insieme, creerete un piano finanziario personalizzato',
    'thankYou.returnHome': 'Torna alla Home',
    
    // Privacy Policy
    'privacy.title': 'Informativa sulla Privacy',
    'privacy.lastUpdated': 'Ultimo Aggiornamento: 11 Febbraio 2026',
    'privacy.1.title': '1. Introduzione',
    'privacy.1.content': 'Benvenuto su SecurePro. Rispettiamo la tua privacy e ci impegniamo a proteggere i tuoi dati personali. Questa informativa sulla privacy ti informerà su come ci prendiamo cura dei tuoi dati personali quando visiti il nostro sito web e ti dirà quali sono i tuoi diritti sulla privacy e come la legge ti protegge.',
    'privacy.2.title': '2. Informazioni che Raccogliamo',
    'privacy.2.content': 'Potremmo raccogliere, utilizzare, archiviare e trasferire diversi tipi di dati personali su di te che abbiamo raggruppato come segue:',
    'privacy.2.item1': 'Dati di Identità: include nome, cognome',
    'privacy.2.item2': 'Dati di Contatto: include indirizzo email e numeri di telefono',
    'privacy.2.item3': 'Dati Tecnici: include indirizzo IP (Internet Protocol), tipo e versione del browser, impostazione del fuso orario e posizione, tipi e versioni dei plug-in del browser, sistema operativo e piattaforma',
    'privacy.2.item4': 'Dati di Utilizzo: include informazioni su come utilizzi il nostro sito web e i nostri servizi',
    'privacy.3.title': '3. Come Utilizziamo le Tue Informazioni',
    'privacy.3.content': 'Utilizzeremo i tuoi dati personali solo quando la legge ce lo consente. Più comunemente, utilizzeremo i tuoi dati personali nelle seguenti circostanze:',
    'privacy.3.item1': 'Per registrarti come nuovo utente e connetterti con le nostre aziende partner di formazione',
    'privacy.3.item2': 'Per fornirti informazioni, prodotti o servizi che ci richiedi',
    'privacy.3.item3': 'Per notificarti modifiche al nostro servizio',
    'privacy.3.item4': 'Per migliorare il nostro sito web e i nostri servizi',
    'privacy.3.item5': 'Per rispettare gli obblighi legali',
    'privacy.4.title': '4. Sicurezza dei Dati',
    'privacy.4.content': 'Abbiamo messo in atto misure di sicurezza appropriate per impedire che i tuoi dati personali vengano accidentalmente persi, utilizzati o accessibili in modo non autorizzato, alterati o divulgati. Utilizziamo crittografia di livello aziendale e protocolli di sicurezza per proteggere le tue informazioni.',
    'privacy.5.title': '5. Condivisione dei Dati',
    'privacy.5.content': 'Potremmo condividere i tuoi dati personali con le nostre aziende partner di formazione sugli investimenti per fornirti i servizi che hai richiesto. Richiediamo a tutte le terze parti di rispettare la sicurezza dei tuoi dati personali e di trattarli in conformità con la legge. Non consentiamo ai nostri fornitori di servizi di terze parti di utilizzare i tuoi dati personali per i propri scopi.',
    'privacy.6.title': '6. I Tuoi Diritti Legali',
    'privacy.6.content': 'In determinate circostanze, hai diritti ai sensi delle leggi sulla protezione dei dati in relazione ai tuoi dati personali, incluso il diritto di:',
    'privacy.6.item1': 'Richiedere l\'accesso ai tuoi dati personali',
    'privacy.6.item2': 'Richiedere la correzione dei tuoi dati personali',
    'privacy.6.item3': 'Richiedere la cancellazione dei tuoi dati personali',
    'privacy.6.item4': 'Opporsi al trattamento dei tuoi dati personali',
    'privacy.6.item5': 'Richiedere la limitazione del trattamento dei tuoi dati personali',
    'privacy.6.item6': 'Richiedere il trasferimento dei tuoi dati personali',
    'privacy.6.item7': 'Revocare il consenso in qualsiasi momento',
    'privacy.7.title': '7. Cookie',
    'privacy.7.content': 'Il nostro sito web utilizza i cookie per distinguerti dagli altri utenti del nostro sito web. Questo ci aiuta a fornirti una buona esperienza quando navighi sul nostro sito web e ci consente anche di migliorare il nostro sito.',
    'privacy.8.title': '8. Modifiche a Questa Informativa sulla Privacy',
    'privacy.8.content': 'Potremmo aggiornare la nostra informativa sulla privacy di tanto in tanto. Ti informeremo di eventuali modifiche pubblicando la nuova informativa sulla privacy su questa pagina e aggiornando la data "Ultimo Aggiornamento".',
    'privacy.9.title': '9. Contattaci',
    'privacy.9.content': 'Se hai domande su questa informativa sulla privacy o sulle nostre pratiche sulla privacy, ti preghiamo di contattarci tramite il modulo di contatto del nostro sito web.',
    
    // Terms and Conditions
    'terms.title': 'Termini e Condizioni',
    'terms.lastUpdated': 'Ultimo Aggiornamento: 11 Febbraio 2026',
    'terms.1.title': '1. Accettazione dei Termini',
    'terms.1.content': 'Accedendo e utilizzando il sito web e i servizi di SecurePro, accetti e accetti di essere vincolato dai termini e dalle disposizioni di questo accordo. Se non accetti di rispettare quanto sopra, ti preghiamo di non utilizzare questo servizio.',
    'terms.2.title': '2. Licenza d\'Uso',
    'terms.2.content': 'È concesso il permesso di accedere temporaneamente ai materiali (informazioni o software) sul sito web di SecurePro solo per visualizzazione personale e non commerciale. Questa è la concessione di una licenza, non un trasferimento di titolo, e in base a questa licenza non puoi:',
    'terms.2.item1': 'Modificare o copiare i materiali',
    'terms.2.item2': 'Utilizzare i materiali per scopi commerciali o per qualsiasi esposizione pubblica',
    'terms.2.item3': 'Tentare di decodificare qualsiasi software contenuto nel sito web di SecurePro',
    'terms.2.item4': 'Rimuovere qualsiasi copyright o altre notazioni proprietarie dai materiali',
    'terms.2.item5': 'Trasferire i materiali a un\'altra persona o "duplicare" i materiali su qualsiasi altro server',
    'terms.3.title': '3. Descrizione del Servizio',
    'terms.3.content': 'SecurePro è una piattaforma che collega gli utenti con aziende di formazione sugli investimenti. Non forniamo consulenza sugli investimenti, servizi di pianificazione finanziaria o gestione degli investimenti. Il nostro ruolo è esclusivamente quello di facilitare le connessioni tra utenti e risorse educative.',
    'terms.4.title': '4. Responsabilità dell\'Utente',
    'terms.4.content': 'Come utente di SecurePro, accetti di:',
    'terms.4.item1': 'Fornire informazioni accurate, aggiornate e complete durante la registrazione',
    'terms.4.item2': 'Mantenere la sicurezza delle credenziali del tuo account',
    'terms.4.item3': 'Notificarci immediatamente qualsiasi uso non autorizzato del tuo account',
    'terms.4.item4': 'Utilizzare il servizio in conformità con tutte le leggi e i regolamenti applicabili',
    'terms.4.item5': 'Non utilizzare il servizio per scopi illeciti o fraudolenti',
    'terms.5.title': '5. Rischi degli Investimenti',
    'terms.5.content': 'L\'investimento comporta rischi. Le performance passate non sono indicative dei risultati futuri. Il valore degli investimenti può diminuire così come aumentare e potresti non recuperare l\'importo investito. SecurePro non garantisce alcun rendimento o risultato degli investimenti.',
    'terms.6.title': '6. Esclusione di Garanzie',
    'terms.6.content': 'I materiali sul sito web di SecurePro sono forniti "così come sono". SecurePro non fornisce garanzie, espresse o implicite, e con la presente declina e nega tutte le altre garanzie incluse, senza limitazione, garanzie implicite o condizioni di commerciabilità, idoneità per uno scopo particolare o non violazione della proprietà intellettuale o altra violazione dei diritti.',
    'terms.7.title': '7. Limitazioni di Responsabilità',
    'terms.7.content': 'In nessun caso SecurePro o i suoi fornitori saranno responsabili per eventuali danni (inclusi, senza limitazione, danni per perdita di dati o profitto, o dovuti a interruzione dell\'attività) derivanti dall\'uso o dall\'impossibilità di utilizzare i materiali sul sito web di SecurePro, anche se SecurePro o un rappresentante autorizzato di SecurePro è stato informato oralmente o per iscritto della possibilità di tale danno.',
    'terms.8.title': '8. Link di Terze Parti',
    'terms.8.content': 'Il sito web di SecurePro può contenere link a siti web o servizi di terze parti che non sono di proprietà o controllati da SecurePro. Non abbiamo alcun controllo e non ci assumiamo alcuna responsabilità per il contenuto, le politiche sulla privacy o le pratiche di siti web o servizi di terze parti.',
    'terms.9.title': '9. Proprietà Intellettuale',
    'terms.9.content': 'Il servizio e il suo contenuto originale, le funzionalità e le funzionalità sono e rimarranno di proprietà esclusiva di SecurePro e dei suoi licenziatari. Il servizio è protetto da copyright, marchio e altre leggi.',
    'terms.10.title': '10. Risoluzione',
    'terms.10.content': 'Potremmo terminare o sospendere il tuo account e impedire l\'accesso al servizio immediatamente, senza preavviso o responsabilità, a nostra esclusiva discrezione, per qualsiasi motivo e senza limitazione, inclusa ma non limitata a una violazione dei Termini.',
    'terms.11.title': '11. Legge Applicabile',
    'terms.11.content': 'Questi Termini saranno regolati e interpretati in conformità con le leggi applicabili, senza riguardo alle sue disposizioni sui conflitti di legge. Il nostro mancato rispetto di qualsiasi diritto o disposizione di questi Termini non sarà considerato una rinuncia a tali diritti.',
    'terms.12.title': '12. Modifiche ai Termini',
    'terms.12.content': 'Ci riserviamo il diritto, a nostra esclusiva discrezione, di modificare o sostituire questi Termini in qualsiasi momento. Se una revisione è sostanziale, forniremo almeno 30 giorni di preavviso prima che i nuovi termini entrino in vigore. Ciò che costituisce una modifica sostanziale sarà determinato a nostra esclusiva discrezione.',
    'terms.13.title': '13. Informazioni di Contatto',
    'terms.13.content': 'Se hai domande su questi Termini, ti preghiamo di contattarci tramite il modulo di contatto del nostro sito web.',
  },
  fr: {
    // Navigation
    'nav.logo': 'SecurePro',
    
    // Hero Section
    'hero.badge': 'Sécurité de Niveau Entreprise',
    'hero.title': 'Êtes-vous Prêt à Sécuriser Votre',
    'hero.titleHighlight': 'Avenir Financier?',
    'hero.description1': "Dans le monde d'aujourd'hui, planifier l'avenir est essentiel. SecurePro utilise une technologie IA avancée pour vous aider à prendre des décisions éclairées et sécuriser votre avenir financier.",
    'hero.description2': 'Nos outils intelligents vous guident à travers des choix d\'investissement judicieux, vous permettant de protéger et de faire croître vos économies en toute simplicité.',
    'form.title': 'Inscrivez-vous Aujourd\'hui',
    'form.name': 'Prénom',
    'form.namePlaceholder': 'Entrez votre prénom',
    'form.surname': 'Nom',
    'form.surnamePlaceholder': 'Entrez votre nom',
    'form.email': 'Email',
    'form.emailPlaceholder': 'Entrez votre email',
    'form.phone': 'Numéro de Téléphone',
    'form.phonePlaceholder': 'Numéro de téléphone',
    'form.submit': 'Soumettre',
    
    // What is SecurePro
    'what.title': 'Qu\'est-ce que SecurePro?',
    'what.subtitle': 'En partenariat avec les principales entreprises de formation en investissement, SecurePro fournit des connaissances financières gratuites et accessibles pour vous aider à prendre des décisions éclairées concernant votre avenir financier.',
    'what.p1': "La nécessité d'une éducation financière est universelle. C'est un aspect fondamental de la vie moderne. Nous avons besoin d'argent pour naviguer dans les exigences de notre monde. Malheureusement, une partie importante de la population mondiale manque de littératie financière.",
    'what.p2': 'Cette déficience peut conduire à de mauvaises décisions financières, entraînant des dettes, des économies inadéquates et un avenir incertain. L\'éducation financière est la clé pour briser ce cycle.',
    'what.p3': 'Elle donne aux individus les connaissances et les compétences nécessaires pour prendre des décisions financières éclairées, gérer l\'argent efficacement et planifier un avenir sûr.',
    
    // Why SecurePro
    'why.title': 'Pourquoi les Gens Préfèrent SecurePro?',
    'why.feature1.title': 'Analyses Alimentées par l\'IA',
    'why.feature1.desc': 'Notre IA avancée analyse les tendances du marché et fournit des recommandations d\'investissement personnalisées adaptées à vos objectifs.',
    'why.feature2.title': 'Conseils d\'Experts',
    'why.feature2.desc': 'Connectez-vous avec des conseillers financiers certifiés qui comprennent votre situation unique et vous aident à prendre des décisions éclairées.',
    'why.feature3.title': 'Sécurisé et Fiable',
    'why.feature3.desc': 'Le cryptage de niveau bancaire et les protocoles de sécurité garantissent que vos données financières sont toujours protégées.',
    
    // Education
    'education.title': 'ÉDUCATION',
    'education.subtitle': 'Libérez Votre Potentiel Financier avec l\'Éducation SecurePro',
    'education.p1': 'Les entreprises d\'éducation financière, comme leur nom l\'indique, sont dédiées à l\'enseignement des principes de la finance et de l\'investissement. Ces organisations présentent une solution claire aux problèmes répandus d\'analphabétisme financier et de lacunes de connaissances que nous voyons aujourd\'hui. Chez SecurePro, nous mettons ces entreprises à la portée de la personne ordinaire, et nous le faisons gratuitement. Avec SecurePro, vous pouvez économiser du temps et de l\'argent dans votre quête de connaissances financières.',
    'education.p2': 'Le dicton intemporel "pas de risque, pas de récompense" résume parfaitement la gestion des risques. Chaque investisseur doit pratiquer la gestion des risques; sans elle, vous naviguez simplement à l\'aveugle, soumis aux caprices du marché. La gestion des risques vise à minimiser les pertes autant que possible. Cela implique généralement d\'analyser chaque actif individuellement et de comprendre comment diverses forces du marché pourraient influencer sa performance. Avec SecurePro, tout le monde peut apprendre sur les risques d\'investissement et les stratégies pour les gérer.',
    'education.p3': 'La désinformation est partout, et c\'est un problème majeur aujourd\'hui. Il peut être difficile de repérer les fausses nouvelles, surtout pour quelqu\'un sans expérience. Cependant, avec la bonne éducation, comme celle accessible via SecurePro, les gens peuvent développer les compétences pour l\'identifier. Les fausses nouvelles peuvent gravement nuire à notre prise de décision, ce qui rend vital de savoir comment les repérer. Recherchez une mauvaise grammaire et des fautes de frappe dans l\'article. Méfiez-vous du contenu étiqueté comme "sponsorisé" et des titres qui font des affirmations extravagantes. Vérifiez toujours la source et assurez-vous qu\'elle ne provient pas d\'un site Web douteux. Ce sont quelques conseils simples que tout le monde peut utiliser pour vérifier les fausses nouvelles.',
    
    // Six Principles
    'principles.title': 'SIX PRINCIPES FINANCIERS FONDAMENTAUX',
    'principles.1.title': 'Planifiez avant d\'agir',
    'principles.1.desc': 'Comprendre et évaluer votre situation actuelle peut aider à clarifier le meilleur chemin à suivre. Un plan financier solide et des objectifs clairs sont cruciaux pour quiconque cherche à investir son argent durement gagné.',
    'principles.2.title': 'Pensez et concentrez-vous sur le long terme',
    'principles.2.desc': 'Certains investisseurs adoptent une stratégie d\'achat et de conservation, conservant un actif pendant une période prolongée plutôt que d\'essayer de prédire les fluctuations du marché.',
    'principles.3.title': 'Utilisez le temps judicieusement',
    'principles.3.desc': 'Le temps, comme on dit, c\'est de l\'argent. Les investisseurs éduqués comprennent le rôle critique que le temps joue dans leurs efforts. Si des rendements sont générés, on pourrait choisir de les composer sur de nombreuses années.',
    'principles.4.title': 'Diversifiez votre portefeuille',
    'principles.4.desc': 'Diversifier un portefeuille peut aider à gérer le risque, car les actifs sous-performants pourraient être équilibrés par d\'autres qui performent bien, réduisant potentiellement les pertes globales.',
    'principles.5.title': 'Enquêtez minutieusement',
    'principles.5.desc': 'Rechercher, lire et poser des questions sur un actif avant d\'investir est vital. Ce processus peut aider à réduire les risques inhérents à l\'investissement.',
    'principles.6.title': 'Établissez un budget et réduisez les dépenses',
    'principles.6.desc': 'L\'éducation à l\'investissement peut être bénéfique pour ceux qui veulent prendre le contrôle de leurs dettes et finances en apprenant une gestion efficace de l\'argent. La budgétisation peut vous aider à réduire les dépenses inutiles.',
    'principles.cta': 'Faites le Premier Pas',
    
    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.1.q': 'Qu\'est-ce que SecurePro?',
    'faq.1.a': 'SecurePro est une plateforme qui connecte les individus avec les principales entreprises de formation en investissement. Nous fournissons un accès gratuit aux connaissances financières et aux outils alimentés par l\'IA pour vous aider à prendre des décisions éclairées concernant votre avenir financier.',
    'faq.2.q': 'SecurePro est-il vraiment gratuit?',
    'faq.2.a': 'Oui, absolument! SecurePro ne facture pas pour nos services. L\'inscription et l\'accès à notre réseau d\'entreprises d\'éducation en investissement sont entièrement gratuits. Nous croyons que l\'éducation financière devrait être accessible à tous.',
    'faq.3.q': 'Ai-je besoin d\'une expérience d\'investissement préalable pour utiliser SecurePro?',
    'faq.3.a': 'Pas du tout! SecurePro est conçu pour tout le monde, quel que soit le niveau d\'expérience. Que vous soyez un débutant complet ou que vous ayez des connaissances en investissement, notre plateforme et nos entreprises partenaires d\'éducation peuvent vous aider à apprendre et à grandir à votre rythme.',
    'faq.4.q': 'Comment SecurePro protège-t-il mes informations personnelles?',
    'faq.4.a': 'Nous prenons votre vie privée et votre sécurité au sérieux. SecurePro utilise des mesures de sécurité de niveau entreprise pour protéger vos informations personnelles. Vos données sont cryptées et stockées en toute sécurité, et nous ne partageons jamais vos informations sans votre consentement.',
    
    // CTA Buttons
    'cta.startJourney': 'Commencez Votre Voyage Aujourd\'hui!',
    'cta.getStarted': 'Commencez Maintenant!',
    'cta.registerFree': 'Inscrivez-vous Gratuitement!',
    'footer.disclaimer': 'L\'investissement comporte des risques. Les performances passées ne préjugent pas des résultats futurs.',
    
    // Footer
    'footer.tagline': 'Sécurisez votre avenir financier avec des analyses alimentées par l\'IA',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Termes et Conditions',
    'footer.rights': '© 2026 SecurePro. Tous droits réservés.',
    
    // Language Prompt
    'languagePrompt.message': 'Choisissez votre langue préférée',
    'languagePrompt.button': 'Sélectionner la Langue',
    
    // Thank You Page
    'thankYou.title': 'Merci de vous être Connecté avec',
    'thankYou.message': 'Nous avons reçu vos informations et l\'un de nos conseillers experts vous contactera sous peu pour vous aider à franchir les prochaines étapes.',
    'thankYou.nextSteps': 'Que se Passe-t-il Ensuite?',
    'thankYou.step1': 'Notre équipe examinera vos informations',
    'thankYou.step2': 'Un conseiller expert vous contactera dans les 24 à 48 heures',
    'thankYou.step3': 'Ensemble, vous créerez un plan financier personnalisé',
    'thankYou.returnHome': 'Retour à l\'Accueil',
    
    // Privacy Policy
    'privacy.title': 'Politique de Confidentialité',
    'privacy.lastUpdated': 'Dernière Mise à Jour: 11 Février 2026',
    'privacy.1.title': '1. Introduction',
    'privacy.1.content': 'Bienvenue sur SecurePro. Nous respectons votre vie privée et nous nous engageons à protéger vos données personnelles. Cette politique de confidentialité vous informera sur la manière dont nous prenons soin de vos données personnelles lorsque vous visitez notre site Web et vous informera de vos droits en matière de confidentialité et de la manière dont la loi vous protège.',
    'privacy.2.title': '2. Informations que Nous Collectons',
    'privacy.2.content': 'Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant que nous avons regroupées comme suit:',
    'privacy.2.item1': 'Données d\'Identité: comprend le prénom, le nom',
    'privacy.2.item2': 'Données de Contact: comprend l\'adresse e-mail et les numéros de téléphone',
    'privacy.2.item3': 'Données Techniques: comprend l\'adresse IP (Internet Protocol), le type et la version du navigateur, le paramètre de fuseau horaire et l\'emplacement, les types et versions de plug-ins de navigateur, le système d\'exploitation et la plateforme',
    'privacy.2.item4': 'Données d\'Utilisation: comprend des informations sur la façon dont vous utilisez notre site Web et nos services',
    'privacy.3.title': '3. Comment Nous Utilisons Vos Informations',
    'privacy.3.content': 'Nous n\'utiliserons vos données personnelles que lorsque la loi nous le permet. Le plus souvent, nous utiliserons vos données personnelles dans les circonstances suivantes:',
    'privacy.3.item1': 'Pour vous inscrire en tant que nouvel utilisateur et vous connecter avec nos entreprises partenaires de formation',
    'privacy.3.item2': 'Pour vous fournir des informations, des produits ou des services que vous nous demandez',
    'privacy.3.item3': 'Pour vous informer des modifications apportées à notre service',
    'privacy.3.item4': 'Pour améliorer notre site Web et nos services',
    'privacy.3.item5': 'Pour respecter les obligations légales',
    'privacy.4.title': '4. Sécurité des Données',
    'privacy.4.content': 'Nous avons mis en place des mesures de sécurité appropriées pour empêcher que vos données personnelles ne soient accidentellement perdues, utilisées ou consultées de manière non autorisée, modifiées ou divulguées. Nous utilisons un cryptage de niveau entreprise et des protocoles de sécurité pour protéger vos informations.',
    'privacy.5.title': '5. Partage des Données',
    'privacy.5.content': 'Nous pouvons partager vos données personnelles avec nos entreprises partenaires de formation en investissement pour vous fournir les services que vous avez demandés. Nous exigeons de tous les tiers qu\'ils respectent la sécurité de vos données personnelles et qu\'ils les traitent conformément à la loi. Nous n\'autorisons pas nos fournisseurs de services tiers à utiliser vos données personnelles à leurs propres fins.',
    'privacy.6.title': '6. Vos Droits Légaux',
    'privacy.6.content': 'Dans certaines circonstances, vous disposez de droits en vertu des lois sur la protection des données concernant vos données personnelles, notamment le droit de:',
    'privacy.6.item1': 'Demander l\'accès à vos données personnelles',
    'privacy.6.item2': 'Demander la correction de vos données personnelles',
    'privacy.6.item3': 'Demander l\'effacement de vos données personnelles',
    'privacy.6.item4': 'Vous opposer au traitement de vos données personnelles',
    'privacy.6.item5': 'Demander la limitation du traitement de vos données personnelles',
    'privacy.6.item6': 'Demander le transfert de vos données personnelles',
    'privacy.6.item7': 'Retirer votre consentement à tout moment',
    'privacy.7.title': '7. Cookies',
    'privacy.7.content': 'Notre site Web utilise des cookies pour vous distinguer des autres utilisateurs de notre site Web. Cela nous aide à vous offrir une bonne expérience lorsque vous naviguez sur notre site Web et nous permet également d\'améliorer notre site.',
    'privacy.8.title': '8. Modifications de Cette Politique de Confidentialité',
    'privacy.8.content': 'Nous pouvons mettre à jour notre politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur cette page et en mettant à jour la date "Dernière Mise à Jour".',
    'privacy.9.title': '9. Nous Contacter',
    'privacy.9.content': 'Si vous avez des questions sur cette politique de confidentialité ou sur nos pratiques en matière de confidentialité, veuillez nous contacter via le formulaire de contact de notre site Web.',
    
    // Terms and Conditions
    'terms.title': 'Termes et Conditions',
    'terms.lastUpdated': 'Dernière Mise à Jour: 11 Février 2026',
    'terms.1.title': '1. Acceptation des Termes',
    'terms.1.content': 'En accédant et en utilisant le site Web et les services de SecurePro, vous acceptez et acceptez d\'être lié par les termes et dispositions de cet accord. Si vous n\'acceptez pas de respecter ce qui précède, veuillez ne pas utiliser ce service.',
    'terms.2.title': '2. Licence d\'Utilisation',
    'terms.2.content': 'L\'autorisation est accordée d\'accéder temporairement aux matériaux (informations ou logiciels) sur le site Web de SecurePro pour une visualisation personnelle et non commerciale uniquement. Il s\'agit de l\'octroi d\'une licence, et non d\'un transfert de titre, et en vertu de cette licence, vous ne pouvez pas:',
    'terms.2.item1': 'Modifier ou copier les matériaux',
    'terms.2.item2': 'Utiliser les matériaux à des fins commerciales ou pour toute exposition publique',
    'terms.2.item3': 'Tenter de décompiler tout logiciel contenu sur le site Web de SecurePro',
    'terms.2.item4': 'Supprimer tout droit d\'auteur ou autres notations propriétaires des matériaux',
    'terms.2.item5': 'Transférer les matériaux à une autre personne ou "dupliquer" les matériaux sur tout autre serveur',
    'terms.3.title': '3. Description du Service',
    'terms.3.content': 'SecurePro est une plateforme qui connecte les utilisateurs avec des entreprises de formation en investissement. Nous ne fournissons pas de conseils en investissement, de services de planification financière ou de gestion d\'investissements. Notre rôle est uniquement de faciliter les connexions entre les utilisateurs et les ressources éducatives.',
    'terms.4.title': '4. Responsabilités de l\'Utilisateur',
    'terms.4.content': 'En tant qu\'utilisateur de SecurePro, vous acceptez de:',
    'terms.4.item1': 'Fournir des informations exactes, à jour et complètes lors de l\'inscription',
    'terms.4.item2': 'Maintenir la sécurité de vos identifiants de compte',
    'terms.4.item3': 'Nous informer immédiatement de toute utilisation non autorisée de votre compte',
    'terms.4.item4': 'Utiliser le service conformément à toutes les lois et réglementations applicables',
    'terms.4.item5': 'Ne pas utiliser le service à des fins illégales ou frauduleuses',
    'terms.5.title': '5. Risques d\'Investissement',
    'terms.5.content': 'L\'investissement comporte des risques. Les performances passées ne préjugent pas des résultats futurs. La valeur des investissements peut baisser comme augmenter, et vous pourriez ne pas récupérer le montant investi. SecurePro ne garantit aucun rendement ou résultat d\'investissement.',
    'terms.6.title': '6. Exclusion de Garanties',
    'terms.6.content': 'Les matériaux sur le site Web de SecurePro sont fournis "tels quels". SecurePro ne donne aucune garantie, expresse ou implicite, et décline et nie par la présente toutes les autres garanties, y compris, sans limitation, les garanties implicites ou conditions de qualité marchande, d\'adéquation à un usage particulier ou de non-violation de la propriété intellectuelle ou autre violation des droits.',
    'terms.7.title': '7. Limitations de Responsabilité',
    'terms.7.content': 'En aucun cas SecurePro ou ses fournisseurs ne seront responsables de tout dommage (y compris, sans limitation, les dommages pour perte de données ou de profit, ou dus à une interruption d\'activité) résultant de l\'utilisation ou de l\'impossibilité d\'utiliser les matériaux sur le site Web de SecurePro, même si SecurePro ou un représentant autorisé de SecurePro a été informé oralement ou par écrit de la possibilité de tels dommages.',
    'terms.8.title': '8. Liens Tiers',
    'terms.8.content': 'Le site Web de SecurePro peut contenir des liens vers des sites Web ou des services tiers qui ne sont pas détenus ou contrôlés par SecurePro. Nous n\'avons aucun contrôle et n\'assumons aucune responsabilité pour le contenu, les politiques de confidentialité ou les pratiques de tout site Web ou service tiers.',
    'terms.9.title': '9. Propriété Intellectuelle',
    'terms.9.content': 'Le service et son contenu original, ses fonctionnalités et ses fonctionnalités sont et resteront la propriété exclusive de SecurePro et de ses concédants de licence. Le service est protégé par le droit d\'auteur, la marque et d\'autres lois.',
    'terms.10.title': '10. Résiliation',
    'terms.10.content': 'Nous pouvons résilier ou suspendre votre compte et interdire l\'accès au service immédiatement, sans préavis ni responsabilité, à notre seule discrétion, pour quelque raison que ce soit et sans limitation, y compris mais sans s\'y limiter à une violation des Termes.',
    'terms.11.title': '11. Loi Applicable',
    'terms.11.content': 'Ces Termes seront régis et interprétés conformément aux lois applicables, sans égard à ses dispositions relatives aux conflits de lois. Notre non-respect de tout droit ou disposition de ces Termes ne sera pas considéré comme une renonciation à ces droits.',
    'terms.12.title': '12. Modifications des Termes',
    'terms.12.content': 'Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Termes à tout moment. Si une révision est importante, nous fournirons un préavis d\'au moins 30 jours avant l\'entrée en vigueur de nouveaux termes. Ce qui constitue un changement important sera déterminé à notre seule discrétion.',
    'terms.13.title': '13. Informations de Contact',
    'terms.13.content': 'Si vous avez des questions sur ces Termes, veuillez nous contacter via le formulaire de contact de notre site Web.',
  },
  es: {
    // Navigation
    'nav.logo': 'SecurePro',
    
    // Hero Section
    'hero.badge': 'Seguridad de Nivel Empresarial',
    'hero.title': '¿Estás Listo para Asegurar tu',
    'hero.titleHighlight': 'Futuro Financiero?',
    'hero.description1': 'En el mundo de hoy, planificar el futuro es esencial. SecurePro utiliza tecnología de IA avanzada para ayudarte a tomar decisiones informadas y asegurar tu futuro financiero.',
    'hero.description2': 'Nuestras herramientas inteligentes te guían a través de opciones de inversión inteligentes, permitiéndote proteger y hacer crecer tus ahorros con facilidad.',
    'form.title': 'Regístrate Hoy',
    'form.name': 'Nombre',
    'form.namePlaceholder': 'Ingresa tu nombre',
    'form.surname': 'Apellido',
    'form.surnamePlaceholder': 'Ingresa tu apellido',
    'form.email': 'Correo Electrónico',
    'form.emailPlaceholder': 'Ingresa tu correo electrónico',
    'form.phone': 'Número de Teléfono',
    'form.phonePlaceholder': 'Número de teléfono',
    'form.submit': 'Enviar',
    
    // What is SecurePro
    'what.title': '¿Qué es SecurePro?',
    'what.subtitle': 'Asociándonos con las principales empresas de educación en inversiones, SecurePro proporciona conocimiento financiero gratuito y accesible para ayudarte a tomar decisiones informadas sobre tu futuro financiero.',
    'what.p1': 'La necesidad de educación financiera es universal. Es un aspecto fundamental de la vida moderna. Necesitamos dinero para navegar las demandas de nuestro mundo. Lamentablemente, una parte significativa de la población mundial carece de alfabetización financiera.',
    'what.p2': 'Esta deficiencia puede llevar a malas decisiones financieras, resultando en deudas, ahorros inadecuados y un futuro incierto. La educación financiera es la clave para romper este ciclo.',
    'what.p3': 'Empodera a los individuos con el conocimiento y las habilidades necesarias para tomar decisiones financieras informadas, gestionar el dinero de manera efectiva y planificar un futuro seguro.',
    
    // Why SecurePro
    'why.title': '¿Por Qué la Gente Prefiere SecurePro?',
    'why.feature1.title': 'Análisis Impulsados por IA',
    'why.feature1.desc': 'Nuestra IA avanzada analiza las tendencias del mercado y proporciona recomendaciones de inversión personalizadas adaptadas a tus objetivos.',
    'why.feature2.title': 'Orientación Experta',
    'why.feature2.desc': 'Conéctate con asesores financieros certificados que comprenden tu situación única y te ayudan a tomar decisiones informadas.',
    'why.feature3.title': 'Seguro y Confiable',
    'why.feature3.desc': 'El cifrado de nivel bancario y los protocolos de seguridad garantizan que tus datos financieros estén siempre protegidos.',
    
    // Education
    'education.title': 'EDUCACIÓN',
    'education.subtitle': 'Desbloquea Tu Potencial Financiero con la Educación SecurePro',
    'education.p1': 'Las empresas de educación financiera, como su nombre lo indica, están dedicadas a enseñar los principios de finanzas e inversión. Estas organizaciones presentan una solución clara a los problemas generalizados de analfabetismo financiero y brechas de conocimiento que vemos hoy. En SecurePro, ponemos estas empresas al alcance de la persona común, y lo hacemos de forma gratuita. Con SecurePro, puedes ahorrar tiempo y dinero en tu búsqueda de conocimiento financiero.',
    'education.p2': 'El dicho atemporal "sin riesgo, sin recompensa" resume perfectamente la gestión de riesgos. Cada inversor debe practicar la gestión de riesgos; sin ella, simplemente estás navegando a ciegas, sujeto a los caprichos del mercado. La gestión de riesgos tiene como objetivo minimizar las pérdidas tanto como sea posible. Esto generalmente implica analizar cada activo individualmente y comprender cómo varias fuerzas del mercado podrían influir en su rendimiento. Con SecurePro, cualquiera puede aprender sobre los riesgos de inversión y las estrategias para gestionarlos.',
    'education.p3': 'La desinformación está en todas partes, y es un problema importante hoy en día. Puede ser difícil detectar noticias falsas, especialmente para alguien sin experiencia. Sin embargo, con la educación adecuada, como la accesible a través de SecurePro, las personas pueden desarrollar las habilidades para identificarla. Las noticias falsas pueden perjudicar seriamente nuestra toma de decisiones, haciendo vital saber cómo detectarlas. Busca mala gramática y errores tipográficos en el artículo. Desconfía del contenido etiquetado como "patrocinado" y de los titulares que hacen afirmaciones extravagantes. Siempre verifica la fuente y asegúrate de que no provenga de un sitio web cuestionable. Estos son algunos consejos simples que cualquiera puede usar para verificar noticias falsas.',
    
    // Six Principles
    'principles.title': 'SEIS PRINCIPIOS FINANCIEROS FUNDAMENTALES',
    'principles.1.title': 'Planifica antes de actuar',
    'principles.1.desc': 'Comprender y evaluar tu situación actual puede ayudar a aclarar el mejor camino a seguir. Un plan financiero sólido y objetivos claros son cruciales para cualquiera que busque invertir su dinero ganado con esfuerzo.',
    'principles.2.title': 'Piensa y enfócate en el largo plazo',
    'principles.2.desc': 'Algunos inversores adoptan una estrategia de comprar y mantener, reteniendo un activo durante un período prolongado en lugar de intentar predecir las fluctuaciones del mercado.',
    'principles.3.title': 'Usa el tiempo sabiamente',
    'principles.3.desc': 'El tiempo, como dice el refrán, es dinero. Los inversores educados comprenden el papel crítico que el tiempo juega en sus esfuerzos. Si se generan rendimientos, uno podría elegir componerlos durante muchos años.',
    'principles.4.title': 'Diversifica tu cartera',
    'principles.4.desc': 'Diversificar una cartera puede ayudar a gestionar el riesgo, ya que los activos de bajo rendimiento podrían equilibrarse con otros que están funcionando bien, reduciendo potencialmente las pérdidas generales.',
    'principles.5.title': 'Investiga a fondo',
    'principles.5.desc': 'Investigar, leer y hacer preguntas sobre un activo antes de invertir es vital. Este proceso puede ayudar a reducir los riesgos inherentes de la inversión.',
    'principles.6.title': 'Establece un presupuesto y reduce gastos',
    'principles.6.desc': 'La educación en inversiones puede ser beneficiosa para aquellos que quieren tomar el control de sus deudas y finanzas aprendiendo una gestión efectiva del dinero. El presupuesto puede ayudarte a recortar gastos innecesarios.',
    'principles.cta': 'Da el Primer Paso',
    
    // FAQ
    'faq.title': 'Preguntas Frecuentes',
    'faq.1.q': '¿Qué es SecurePro?',
    'faq.1.a': 'SecurePro es una plataforma que conecta a individuos con las principales empresas de educación en inversiones. Proporcionamos acceso gratuito al conocimiento financiero y herramientas impulsadas por IA para ayudarte a tomar decisiones informadas sobre tu futuro financiero.',
    'faq.2.q': '¿SecurePro es realmente gratuito?',
    'faq.2.a': '¡Sí, absolutamente! SecurePro no cobra por nuestros servicios. Registrarse y acceder a nuestra red de empresas de educación en inversiones es completamente gratuito. Creemos que la educación financiera debe ser accesible para todos.',
    'faq.3.q': '¿Necesito experiencia previa en inversiones para usar SecurePro?',
    'faq.3.a': '¡En absoluto! SecurePro está diseñado para todos, independientemente del nivel de experiencia. Ya seas un principiante completo o tengas algún conocimiento de inversión, nuestra plataforma y las empresas asociadas de educación pueden ayudarte a aprender y crecer a tu propio ritmo.',
    'faq.4.q': '¿Cómo protege SecurePro mi información personal?',
    'faq.4.a': 'Tomamos tu privacidad y seguridad en serio. SecurePro utiliza medidas de seguridad de nivel empresarial para proteger tu información personal. Tus datos están encriptados y almacenados de forma segura, y nunca compartimos tu información sin tu consentimiento.',
    
    // CTA Buttons
    'cta.startJourney': '¡Comienza Tu Viaje Hoy!',
    'cta.getStarted': '¡Comienza Ahora!',
    'cta.registerFree': '¡Regístrate Gratis!',
    'footer.disclaimer': 'La inversión implica riesgos. El rendimiento pasado no es indicativo de resultados futuros.',
    
    // Footer
    'footer.tagline': 'Asegura tu futuro financiero con análisis impulsados por IA',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos y Condiciones',
    'footer.rights': '© 2026 SecurePro. Todos los derechos reservados.',
    
    // Language Prompt
    'languagePrompt.message': 'Elige tu idioma preferido',
    'languagePrompt.button': 'Seleccionar Idioma',
    
    // Thank You Page
    'thankYou.title': 'Gracias por Conectarte con',
    'thankYou.message': 'Hemos recibido tus detalles y uno de nuestros asesores expertos se pondrá en contacto contigo en breve para ayudarte a dar los siguientes pasos.',
    'thankYou.nextSteps': '¿Qué Sucede Después?',
    'thankYou.step1': 'Nuestro equipo revisará tu información',
    'thankYou.step2': 'Un asesor experto te contactará dentro de 24-48 horas',
    'thankYou.step3': 'Juntos, crearán un plan financiero personalizado',
    'thankYou.returnHome': 'Volver al Inicio',
    
    // Privacy Policy
    'privacy.title': 'Política de Privacidad',
    'privacy.lastUpdated': 'Última Actualización: 11 de Febrero de 2026',
    'privacy.1.title': '1. Introducción',
    'privacy.1.content': 'Bienvenido a SecurePro. Respetamos su privacidad y estamos comprometidos a proteger sus datos personales. Esta política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web y le informará sobre sus derechos de privacidad y cómo la ley lo protege.',
    'privacy.2.title': '2. Información que Recopilamos',
    'privacy.2.content': 'Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted que hemos agrupado de la siguiente manera:',
    'privacy.2.item1': 'Datos de Identidad: incluye nombre, apellido',
    'privacy.2.item2': 'Datos de Contacto: incluye dirección de correo electrónico y números de teléfono',
    'privacy.2.item3': 'Datos Técnicos: incluye dirección IP (Protocolo de Internet), tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de complementos del navegador, sistema operativo y plataforma',
    'privacy.2.item4': 'Datos de Uso: incluye información sobre cómo usa nuestro sitio web y servicios',
    'privacy.3.title': '3. Cómo Usamos Su Información',
    'privacy.3.content': 'Solo usaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, usaremos sus datos personales en las siguientes circunstancias:',
    'privacy.3.item1': 'Para registrarlo como nuevo usuario y conectarlo con nuestras empresas asociadas de educación',
    'privacy.3.item2': 'Para proporcionarle información, productos o servicios que nos solicite',
    'privacy.3.item3': 'Para notificarle sobre cambios en nuestro servicio',
    'privacy.3.item4': 'Para mejorar nuestro sitio web y servicios',
    'privacy.3.item5': 'Para cumplir con obligaciones legales',
    'privacy.4.title': '4. Seguridad de Datos',
    'privacy.4.content': 'Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan accidentalmente, se usen o se accedan de manera no autorizada, se alteren o se divulguen. Utilizamos cifrado de nivel empresarial y protocolos de seguridad para proteger su información.',
    'privacy.5.title': '5. Compartir Datos',
    'privacy.5.content': 'Podemos compartir sus datos personales con nuestras empresas asociadas de educación en inversiones para brindarle los servicios que ha solicitado. Requerimos que todos los terceros respeten la seguridad de sus datos personales y los traten de acuerdo con la ley. No permitimos que nuestros proveedores de servicios de terceros usen sus datos personales para sus propios fines.',
    'privacy.6.title': '6. Sus Derechos Legales',
    'privacy.6.content': 'En ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación con sus datos personales, incluido el derecho a:',
    'privacy.6.item1': 'Solicitar acceso a sus datos personales',
    'privacy.6.item2': 'Solicitar la corrección de sus datos personales',
    'privacy.6.item3': 'Solicitar la eliminación de sus datos personales',
    'privacy.6.item4': 'Oponerse al procesamiento de sus datos personales',
    'privacy.6.item5': 'Solicitar la restricción del procesamiento de sus datos personales',
    'privacy.6.item6': 'Solicitar la transferencia de sus datos personales',
    'privacy.6.item7': 'Retirar el consentimiento en cualquier momento',
    'privacy.7.title': '7. Cookies',
    'privacy.7.content': 'Nuestro sitio web utiliza cookies para distinguirlo de otros usuarios de nuestro sitio web. Esto nos ayuda a brindarle una buena experiencia cuando navega por nuestro sitio web y también nos permite mejorar nuestro sitio.',
    'privacy.8.title': '8. Cambios a Esta Política de Privacidad',
    'privacy.8.content': 'Podemos actualizar nuestra política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página y actualizando la fecha de "Última Actualización".',
    'privacy.9.title': '9. Contáctenos',
    'privacy.9.content': 'Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos a través del formulario de contacto de nuestro sitio web.',
    
    // Terms and Conditions
    'terms.title': 'Términos y Condiciones',
    'terms.lastUpdated': 'Última Actualización: 11 de Febrero de 2026',
    'terms.1.title': '1. Aceptación de Términos',
    'terms.1.content': 'Al acceder y usar el sitio web y los servicios de SecurePro, acepta y acepta estar sujeto a los términos y disposiciones de este acuerdo. Si no acepta cumplir con lo anterior, no use este servicio.',
    'terms.2.title': '2. Licencia de Uso',
    'terms.2.content': 'Se otorga permiso para acceder temporalmente a los materiales (información o software) en el sitio web de SecurePro solo para visualización personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puede:',
    'terms.2.item1': 'Modificar o copiar los materiales',
    'terms.2.item2': 'Usar los materiales para cualquier propósito comercial o para cualquier exhibición pública',
    'terms.2.item3': 'Intentar realizar ingeniería inversa de cualquier software contenido en el sitio web de SecurePro',
    'terms.2.item4': 'Eliminar cualquier derecho de autor u otras notaciones propietarias de los materiales',
    'terms.2.item5': 'Transferir los materiales a otra persona o "duplicar" los materiales en cualquier otro servidor',
    'terms.3.title': '3. Descripción del Servicio',
    'terms.3.content': 'SecurePro es una plataforma que conecta a los usuarios con empresas de educación en inversiones. No proporcionamos asesoramiento de inversión, servicios de planificación financiera ni gestionamos inversiones. Nuestro papel es únicamente facilitar las conexiones entre usuarios y recursos educativos.',
    'terms.4.title': '4. Responsabilidades del Usuario',
    'terms.4.content': 'Como usuario de SecurePro, acepta:',
    'terms.4.item1': 'Proporcionar información precisa, actual y completa durante el registro',
    'terms.4.item2': 'Mantener la seguridad de las credenciales de su cuenta',
    'terms.4.item3': 'Notificarnos inmediatamente de cualquier uso no autorizado de su cuenta',
    'terms.4.item4': 'Usar el servicio de conformidad con todas las leyes y regulaciones aplicables',
    'terms.4.item5': 'No usar el servicio para ningún propósito ilegal o fraudulento',
    'terms.5.title': '5. Riesgos de Inversión',
    'terms.5.content': 'La inversión implica riesgo. El rendimiento pasado no es indicativo de resultados futuros. El valor de las inversiones puede bajar así como subir, y es posible que no recupere la cantidad invertida. SecurePro no garantiza ningún rendimiento o resultado de inversión.',
    'terms.6.title': '6. Exclusión de Garantías',
    'terms.6.content': 'Los materiales en el sitio web de SecurePro se proporcionan "tal cual". SecurePro no ofrece garantías, expresas o implícitas, y por la presente renuncia y niega todas las demás garantías, incluidas, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual u otra violación de derechos.',
    'terms.7.title': '7. Limitaciones de Responsabilidad',
    'terms.7.content': 'En ningún caso SecurePro o sus proveedores serán responsables de ningún daño (incluidos, sin limitación, daños por pérdida de datos o ganancias, o debido a la interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en el sitio web de SecurePro, incluso si SecurePro o un representante autorizado de SecurePro ha sido notificado oralmente o por escrito de la posibilidad de tal daño.',
    'terms.8.title': '8. Enlaces de Terceros',
    'terms.8.content': 'El sitio web de SecurePro puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por SecurePro. No tenemos control y no asumimos ninguna responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros.',
    'terms.9.title': '9. Propiedad Intelectual',
    'terms.9.content': 'El servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de SecurePro y sus licenciantes. El servicio está protegido por derechos de autor, marcas comerciales y otras leyes.',
    'terms.10.title': '10. Terminación',
    'terms.10.content': 'Podemos terminar o suspender su cuenta y prohibir el acceso al servicio de inmediato, sin previo aviso ni responsabilidad, bajo nuestra exclusiva discreción, por cualquier motivo y sin limitación, incluida, entre otras, una violación de los Términos.',
    'terms.11.title': '11. Ley Aplicable',
    'terms.11.content': 'Estos Términos se regirán e interpretarán de acuerdo con las leyes aplicables, sin tener en cuenta sus disposiciones sobre conflictos de leyes. Nuestro incumplimiento de hacer cumplir cualquier derecho o disposición de estos Términos no se considerará una renuncia a esos derechos.',
    'terms.12.title': '12. Cambios a los Términos',
    'terms.12.content': 'Nos reservamos el derecho, a nuestra exclusiva discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es material, proporcionaremos al menos 30 días de aviso antes de que entren en vigencia los nuevos términos. Lo que constituye un cambio material se determinará a nuestra exclusiva discreción.',
    'terms.13.title': '13. Información de Contacto',
    'terms.13.content': 'Si tiene alguna pregunta sobre estos Términos, contáctenos a través del formulario de contacto de nuestro sitio web.',
  },
  de: {
    // Navigation
    'nav.logo': 'SecurePro',
    
    // Hero Section
    'hero.badge': 'Unternehmenssicherheit',
    'hero.title': 'Sind Sie Bereit, Ihre',
    'hero.titleHighlight': 'Finanzielle Zukunft zu Sichern?',
    'hero.description1': 'In der heutigen Welt ist die Planung für die Zukunft unerlässlich. SecurePro nutzt fortschrittliche KI-Technologie, um Ihnen zu helfen, fundierte Entscheidungen zu treffen und Ihre finanzielle Zukunft zu sichern.',
    'hero.description2': 'Unsere intelligenten Tools führen Sie durch kluge Investitionsentscheidungen und ermöglichen es Ihnen, Ihre Ersparnisse mit Leichtigkeit zu schützen und zu vermehren.',
    'form.title': 'Heute Anmelden',
    'form.name': 'Vorname',
    'form.namePlaceholder': 'Geben Sie Ihren Vornamen ein',
    'form.surname': 'Nachname',
    'form.surnamePlaceholder': 'Geben Sie Ihren Nachnamen ein',
    'form.email': 'E-Mail',
    'form.emailPlaceholder': 'Geben Sie Ihre E-Mail ein',
    'form.phone': 'Telefonnummer',
    'form.phonePlaceholder': 'Telefonnummer',
    'form.submit': 'Absenden',
    
    // What is SecurePro
    'what.title': 'Was ist SecurePro?',
    'what.subtitle': 'In Partnerschaft mit führenden Investmentbildungsunternehmen bietet SecurePro kostenloses, zugängliches Finanzwissen, um Ihnen zu helfen, fundierte Entscheidungen über Ihre finanzielle Zukunft zu treffen.',
    'what.p1': 'Die Notwendigkeit finanzieller Bildung ist universell. Es ist ein grundlegender Aspekt des modernen Lebens. Wir brauchen Geld, um die Anforderungen unserer Welt zu bewältigen. Bedauerlicherweise fehlt einem erheblichen Teil der Weltbevölkerung die finanzielle Bildung.',
    'what.p2': 'Dieser Mangel kann zu schlechten finanziellen Entscheidungen führen, die zu Schulden, unzureichenden Ersparnissen und einer unsicheren Zukunft führen. Finanzielle Bildung ist der Schlüssel, um diesen Kreislauf zu durchbrechen.',
    'what.p3': 'Sie befähigt Einzelpersonen mit dem Wissen und den Fähigkeiten, die erforderlich sind, um fundierte finanzielle Entscheidungen zu treffen, Geld effektiv zu verwalten und eine sichere Zukunft zu planen.',
    
    // Why SecurePro
    'why.title': 'Warum Bevorzugen Menschen SecurePro?',
    'why.feature1.title': 'KI-gestützte Einblicke',
    'why.feature1.desc': 'Unsere fortschrittliche KI analysiert Markttrends und bietet personalisierte Investitionsempfehlungen, die auf Ihre Ziele zugeschnitten sind.',
    'why.feature2.title': 'Expertenberatung',
    'why.feature2.desc': 'Verbinden Sie sich mit zertifizierten Finanzberatern, die Ihre einzigartige Situation verstehen und Ihnen helfen, fundierte Entscheidungen zu treffen.',
    'why.feature3.title': 'Sicher und Zuverlässig',
    'why.feature3.desc': 'Verschlüsselung auf Bankniveau und Sicherheitsprotokolle stellen sicher, dass Ihre Finanzdaten immer geschützt sind.',
    
    // Education
    'education.title': 'BILDUNG',
    'education.subtitle': 'Entfalten Sie Ihr Finanzielles Potenzial mit SecurePro Bildung',
    'education.p1': 'Finanzbildungsunternehmen sind, wie ihr Name schon sagt, der Vermittlung der Prinzipien von Finanzen und Investitionen gewidmet. Diese Organisationen präsentieren eine klare Lösung für die weit verbreiteten Probleme der finanziellen Analphabetismus und Wissenslücken, die wir heute sehen. Wir bei SecurePro bringen diese Unternehmen in die Reichweite der gewöhnlichen Person, und wir tun dies kostenlos. Mit SecurePro können Sie sowohl Zeit als auch Geld bei Ihrer Suche nach Finanzwissen sparen.',
    'education.p2': 'Das zeitlose Sprichwort "kein Risiko, keine Belohnung" fasst das Risikomanagement perfekt zusammen. Jeder Investor muss Risikomanagement praktizieren; ohne es navigieren Sie einfach blind, den Launen des Marktes ausgeliefert. Das Risikomanagement zielt darauf ab, Verluste so weit wie möglich zu minimieren. Dies beinhaltet typischerweise die Analyse jedes Vermögenswerts einzeln und das Verständnis, wie verschiedene Marktkräfte seine Leistung beeinflussen könnten. Mit SecurePro kann jeder über Investitionsrisiken und die Strategien zu deren Verwaltung lernen.',
    'education.p3': 'Fehlinformationen sind überall, und es ist heute ein großes Problem. Es kann schwierig sein, gefälschte Nachrichten zu erkennen, besonders für jemanden ohne Erfahrung. Mit der richtigen Bildung, wie sie über SecurePro zugänglich ist, können Menschen jedoch die Fähigkeiten entwickeln, sie zu identifizieren. Gefälschte Nachrichten können unsere Entscheidungsfindung ernsthaft beeinträchtigen, was es wichtig macht zu wissen, wie man sie erkennt. Achten Sie auf schlechte Grammatik und Tippfehler im Artikel. Seien Sie misstrauisch gegenüber Inhalten, die als "gesponsert" gekennzeichnet sind, und Schlagzeilen, die abwegige Behauptungen aufstellen. Überprüfen Sie immer die Quelle und stellen Sie sicher, dass sie nicht von einer fragwürdigen Website stammt. Dies sind einige einfache Tipps, die jeder verwenden kann, um gefälschte Nachrichten zu überprüfen.',
    
    // Six Principles
    'principles.title': 'SECHS GRUNDLEGENDE FINANZPRINZIPIEN',
    'principles.1.title': 'Planen Sie, bevor Sie handeln',
    'principles.1.desc': 'Das Verstehen und Bewerten Ihrer aktuellen Situation kann helfen, den besten Weg nach vorne zu klären. Ein solider Finanzplan und klare Ziele sind entscheidend für jeden, der sein hart verdientes Geld investieren möchte.',
    'principles.2.title': 'Denken Sie langfristig',
    'principles.2.desc': 'Einige Investoren verfolgen eine Kauf-und-Halte-Strategie und behalten einen Vermögenswert über einen längeren Zeitraum, anstatt zu versuchen, Marktschwankungen vorherzusagen.',
    'principles.3.title': 'Nutzen Sie die Zeit weise',
    'principles.3.desc': 'Zeit ist, wie man sagt, Geld. Gebildete Investoren verstehen die kritische Rolle, die Zeit in ihren Bemühungen spielt. Wenn Renditen erzielt werden, könnte man sich entscheiden, sie über viele Jahre zu verzinsen.',
    'principles.4.title': 'Diversifizieren Sie Ihr Portfolio',
    'principles.4.desc': 'Die Diversifizierung eines Portfolios kann helfen, Risiken zu managen, da unterdurchschnittliche Vermögenswerte durch andere ausgeglichen werden könnten, die gut abschneiden, wodurch die Gesamtverluste potenziell verringert werden.',
    'principles.5.title': 'Gründlich recherchieren',
    'principles.5.desc': 'Recherchieren, Lesen und Nachfragen über einen Vermögenswert vor der Investition ist von entscheidender Bedeutung. Dieser Prozess kann helfen, die inhärenten Risiken der Investition zu reduzieren.',
    'principles.6.title': 'Erstellen Sie ein Budget und reduzieren Sie Ausgaben',
    'principles.6.desc': 'Investitionsbildung kann für diejenigen von Vorteil sein, die die Kontrolle über ihre Schulden und Finanzen übernehmen möchten, indem sie effektives Geldmanagement lernen. Budgetierung kann Ihnen helfen, unnötige Ausgaben zu reduzieren.',
    'principles.cta': 'Machen Sie den Ersten Schritt',
    
    // FAQ
    'faq.title': 'Häufig Gestellte Fragen',
    'faq.1.q': 'Was ist SecurePro?',
    'faq.1.a': 'SecurePro ist eine Plattform, die Einzelpersonen mit führenden Investmentbildungsunternehmen verbindet. Wir bieten kostenlosen Zugang zu Finanzwissen und KI-gestützten Tools, um Ihnen zu helfen, fundierte Entscheidungen über Ihre finanzielle Zukunft zu treffen.',
    'faq.2.q': 'Ist SecurePro wirklich kostenlos?',
    'faq.2.a': 'Ja, absolut! SecurePro erhebt keine Gebühren für unsere Dienstleistungen. Die Anmeldung und der Zugang zu unserem Netzwerk von Investmentbildungsunternehmen sind völlig kostenlos. Wir glauben, dass finanzielle Bildung für jeden zugänglich sein sollte.',
    'faq.3.q': 'Benötige ich vorherige Investitionserfahrung, um SecurePro zu nutzen?',
    'faq.3.a': 'Überhaupt nicht! SecurePro ist für jeden konzipiert, unabhängig vom Erfahrungsniveau. Egal, ob Sie ein kompletter Anfänger sind oder bereits über Investitionswissen verfügen, unsere Plattform und Partnerbildungsunternehmen können Ihnen helfen, in Ihrem eigenen Tempo zu lernen und zu wachsen.',
    'faq.4.q': 'Wie schützt SecurePro meine persönlichen Informationen?',
    'faq.4.a': 'Wir nehmen Ihre Privatsphäre und Sicherheit ernst. SecurePro verwendet Sicherheitsmaßnahmen auf Unternehmensniveau, um Ihre persönlichen Informationen zu schützen. Ihre Daten werden verschlüsselt und sicher gespeichert, und wir geben Ihre Informationen niemals ohne Ihre Zustimmung weiter.',
    
    // CTA Buttons
    'cta.startJourney': 'Beginnen Sie Ihre Reise Heute!',
    'cta.getStarted': 'Jetzt Loslegen!',
    'cta.registerFree': 'Kostenlos Registrieren!',
    'footer.disclaimer': 'Investitionen sind mit Risiken verbunden. Die vergangene Wertentwicklung ist kein Indikator für zukünftige Ergebnisse.',
    
    // Footer
    'footer.tagline': 'Sichern Sie Ihre finanzielle Zukunft mit KI-gestützten Einblicken',
    'footer.privacy': 'Datenschutzrichtlinie',
    'footer.terms': 'Allgemeine Geschäftsbedingungen',
    'footer.rights': '© 2026 SecurePro. Alle Rechte vorbehalten.',
    
    // Language Prompt
    'languagePrompt.message': 'Wählen Sie Ihre bevorzugte Sprache',
    'languagePrompt.button': 'Sprache Auswählen',
    
    // Thank You Page
    'thankYou.title': 'Vielen Dank für die Verbindung mit',
    'thankYou.message': 'Wir haben Ihre Daten erhalten und einer unserer Expertenberater wird sich in Kürze bei Ihnen melden, um Ihnen bei den nächsten Schritten zu helfen.',
    'thankYou.nextSteps': 'Was Passiert als Nächstes?',
    'thankYou.step1': 'Unser Team wird Ihre Informationen überprüfen',
    'thankYou.step2': 'Ein Expertenberater wird Sie innerhalb von 24-48 Stunden kontaktieren',
    'thankYou.step3': 'Gemeinsam erstellen Sie einen personalisierten Finanzplan',
    'thankYou.returnHome': 'Zurück zur Startseite',
    
    // Privacy Policy
    'privacy.title': 'Datenschutzrichtlinie',
    'privacy.lastUpdated': 'Letzte Aktualisierung: 11. Februar 2026',
    'privacy.1.title': '1. Einführung',
    'privacy.1.content': 'Willkommen bei SecurePro. Wir respektieren Ihre Privatsphäre und verpflichten uns, Ihre personenbezogenen Daten zu schützen. Diese Datenschutzrichtlinie informiert Sie darüber, wie wir Ihre personenbezogenen Daten verwalten, wenn Sie unsere Website besuchen, und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt.',
    'privacy.2.title': '2. Informationen, die Wir Sammeln',
    'privacy.2.content': 'Wir können verschiedene Arten von personenbezogenen Daten über Sie sammeln, verwenden, speichern und übertragen, die wir wie folgt gruppiert haben:',
    'privacy.2.item1': 'Identitätsdaten: umfasst Vorname, Nachname',
    'privacy.2.item2': 'Kontaktdaten: umfasst E-Mail-Adresse und Telefonnummern',
    'privacy.2.item3': 'Technische Daten: umfasst IP-Adresse (Internet Protocol), Browsertyp und -version, Zeitzoneneinstellung und Standort, Browser-Plugin-Typen und -Versionen, Betriebssystem und Plattform',
    'privacy.2.item4': 'Nutzungsdaten: umfasst Informationen darüber, wie Sie unsere Website und Dienste nutzen',
    'privacy.3.title': '3. Wie Wir Ihre Informationen Verwenden',
    'privacy.3.content': 'Wir werden Ihre personenbezogenen Daten nur verwenden, wenn das Gesetz es uns erlaubt. Am häufigsten werden wir Ihre personenbezogenen Daten unter folgenden Umständen verwenden:',
    'privacy.3.item1': 'Um Sie als neuen Benutzer zu registrieren und Sie mit unseren Partner-Bildungsunternehmen zu verbinden',
    'privacy.3.item2': 'Um Ihnen Informationen, Produkte oder Dienstleistungen bereitzustellen, die Sie von uns anfordern',
    'privacy.3.item3': 'Um Sie über Änderungen an unserem Service zu informieren',
    'privacy.3.item4': 'Um unsere Website und Dienste zu verbessern',
    'privacy.3.item5': 'Um gesetzlichen Verpflichtungen nachzukommen',
    'privacy.4.title': '4. Datensicherheit',
    'privacy.4.content': 'Wir haben angemessene Sicherheitsmaßnahmen ergriffen, um zu verhindern, dass Ihre personenbezogenen Daten versehentlich verloren gehen, unbefugt verwendet oder darauf zugegriffen, geändert oder offengelegt werden. Wir verwenden Verschlüsselung auf Unternehmensniveau und Sicherheitsprotokolle, um Ihre Informationen zu schützen.',
    'privacy.5.title': '5. Datenweitergabe',
    'privacy.5.content': 'Wir können Ihre personenbezogenen Daten mit unseren Partner-Investmentbildungsunternehmen teilen, um Ihnen die von Ihnen angeforderten Dienste bereitzustellen. Wir verlangen von allen Dritten, die Sicherheit Ihrer personenbezogenen Daten zu respektieren und sie gemäß dem Gesetz zu behandeln. Wir erlauben unseren Drittanbietern nicht, Ihre personenbezogenen Daten für ihre eigenen Zwecke zu verwenden.',
    'privacy.6.title': '6. Ihre Gesetzlichen Rechte',
    'privacy.6.content': 'Unter bestimmten Umständen haben Sie Rechte gemäß den Datenschutzgesetzen in Bezug auf Ihre personenbezogenen Daten, einschließlich des Rechts auf:',
    'privacy.6.item1': 'Zugriff auf Ihre personenbezogenen Daten anfordern',
    'privacy.6.item2': 'Berichtigung Ihrer personenbezogenen Daten anfordern',
    'privacy.6.item3': 'Löschung Ihrer personenbezogenen Daten anfordern',
    'privacy.6.item4': 'Der Verarbeitung Ihrer personenbezogenen Daten widersprechen',
    'privacy.6.item5': 'Einschränkung der Verarbeitung Ihrer personenbezogenen Daten anfordern',
    'privacy.6.item6': 'Übertragung Ihrer personenbezogenen Daten anfordern',
    'privacy.6.item7': 'Einwilligung jederzeit widerrufen',
    'privacy.7.title': '7. Cookies',
    'privacy.7.content': 'Unsere Website verwendet Cookies, um Sie von anderen Benutzern unserer Website zu unterscheiden. Dies hilft uns, Ihnen eine gute Erfahrung beim Durchsuchen unserer Website zu bieten und ermöglicht es uns auch, unsere Website zu verbessern.',
    'privacy.8.title': '8. Änderungen an Dieser Datenschutzrichtlinie',
    'privacy.8.content': 'Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen und das Datum "Letzte Aktualisierung" aktualisieren.',
    'privacy.9.title': '9. Kontaktieren Sie Uns',
    'privacy.9.content': 'Wenn Sie Fragen zu dieser Datenschutzrichtlinie oder unseren Datenschutzpraktiken haben, kontaktieren Sie uns bitte über das Kontaktformular unserer Website.',
    
    // Terms and Conditions
    'terms.title': 'Geschäftsbedingungen',
    'terms.lastUpdated': 'Letzte Aktualisierung: 11. Februar 2026',
    'terms.1.title': '1. Zustimmung zu den Bedingungen',
    'terms.1.content': 'Durch den Zugriff auf und die Nutzung der Website und Dienste von SecurePro akzeptieren Sie und erklären sich damit einverstanden, an die Bedingungen und Bestimmungen dieser Vereinbarung gebunden zu sein. Wenn Sie dem oben Genannten nicht zustimmen, verwenden Sie diesen Dienst bitte nicht.',
    'terms.2.title': '2. Nutzungslizenz',
    'terms.2.content': 'Es wird die Erlaubnis erteilt, vorübergehend auf die Materialien (Informationen oder Software) auf der Website von SecurePro nur zur persönlichen, nicht-kommerziellen vorübergehenden Ansicht zuzugreifen. Dies ist die Gewährung einer Lizenz, keine Übertragung des Eigentums, und unter dieser Lizenz dürfen Sie nicht:',
    'terms.2.item1': 'Die Materialien ändern oder kopieren',
    'terms.2.item2': 'Die Materialien für kommerzielle Zwecke oder für öffentliche Ausstellungen verwenden',
    'terms.2.item3': 'Versuchen, Software auf der Website von SecurePro rückzuentwickeln',
    'terms.2.item4': 'Urheberrechte oder andere proprietäre Hinweise von den Materialien entfernen',
    'terms.2.item5': 'Die Materialien an eine andere Person übertragen oder die Materialien auf einem anderen Server "spiegeln"',
    'terms.3.title': '3. Dienstbeschreibung',
    'terms.3.content': 'SecurePro ist eine Plattform, die Benutzer mit Investmentbildungsunternehmen verbindet. Wir bieten keine Anlageberatung, Finanzplanungsdienste oder verwalten Investitionen. Unsere Rolle besteht ausschließlich darin, Verbindungen zwischen Benutzern und Bildungsressourcen zu erleichtern.',
    'terms.4.title': '4. Benutzerverantwortlichkeiten',
    'terms.4.content': 'Als Benutzer von SecurePro erklären Sie sich damit einverstanden:',
    'terms.4.item1': 'Bei der Registrierung genaue, aktuelle und vollständige Informationen bereitzustellen',
    'terms.4.item2': 'Die Sicherheit Ihrer Kontoanmeldeinformationen aufrechtzuerhalten',
    'terms.4.item3': 'Uns unverzüglich über jede unbefugte Nutzung Ihres Kontos zu informieren',
    'terms.4.item4': 'Den Dienst in Übereinstimmung mit allen geltenden Gesetzen und Vorschriften zu nutzen',
    'terms.4.item5': 'Den Dienst nicht für rechtswidrige oder betrügerische Zwecke zu verwenden',
    'terms.5.title': '5. Investitionsrisiken',
    'terms.5.content': 'Investitionen sind mit Risiken verbunden. Die vergangene Wertentwicklung ist kein Indikator für zukünftige Ergebnisse. Der Wert von Investitionen kann sinken und steigen, und Sie erhalten möglicherweise nicht den investierten Betrag zurück. SecurePro garantiert keine Investitionsrenditen oder -ergebnisse.',
    'terms.6.title': '6. Haftungsausschluss',
    'terms.6.content': 'Die Materialien auf der Website von SecurePro werden "wie besehen" bereitgestellt. SecurePro gibt keine Garantien, weder ausdrücklich noch stillschweigend, und lehnt hiermit alle anderen Garantien ab, einschließlich, ohne Einschränkung, stillschweigender Garantien oder Bedingungen der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von geistigem Eigentum oder anderer Rechtsverletzung.',
    'terms.7.title': '7. Haftungsbeschränkungen',
    'terms.7.content': 'In keinem Fall haften SecurePro oder seine Lieferanten für Schäden (einschließlich, ohne Einschränkung, Schäden durch Datenverlust oder Gewinnausfall oder aufgrund von Geschäftsunterbrechungen), die sich aus der Nutzung oder der Unmöglichkeit der Nutzung der Materialien auf der Website von SecurePro ergeben, selbst wenn SecurePro oder ein autorisierter Vertreter von SecurePro mündlich oder schriftlich über die Möglichkeit solcher Schäden informiert wurde.',
    'terms.8.title': '8. Links zu Dritten',
    'terms.8.content': 'Die Website von SecurePro kann Links zu Websites oder Diensten Dritter enthalten, die nicht im Besitz oder unter der Kontrolle von SecurePro sind. Wir haben keine Kontrolle und übernehmen keine Verantwortung für den Inhalt, die Datenschutzrichtlinien oder die Praktiken von Websites oder Diensten Dritter.',
    'terms.9.title': '9. Geistiges Eigentum',
    'terms.9.content': 'Der Dienst und sein ursprünglicher Inhalt, seine Funktionen und Funktionalität sind und bleiben das ausschließliche Eigentum von SecurePro und seinen Lizenzgebern. Der Dienst ist durch Urheberrechte, Marken und andere Gesetze geschützt.',
    'terms.10.title': '10. Kündigung',
    'terms.10.content': 'Wir können Ihr Konto kündigen oder aussetzen und den Zugriff auf den Dienst sofort, ohne vorherige Ankündigung oder Haftung, nach unserem alleinigen Ermessen, aus jedem Grund und ohne Einschränkung, einschließlich, aber nicht beschränkt auf einen Verstoß gegen die Bedingungen, sperren.',
    'terms.11.title': '11. Anwendbares Recht',
    'terms.11.content': 'Diese Bedingungen unterliegen den geltenden Gesetzen und werden nach diesen ausgelegt, ohne Rücksicht auf ihre Bestimmungen über Gesetzeskonflikte. Unsere Nichteinhaltung eines Rechts oder einer Bestimmung dieser Bedingungen wird nicht als Verzicht auf diese Rechte angesehen.',
    'terms.12.title': '12. Änderungen der Bedingungen',
    'terms.12.content': 'Wir behalten uns das Recht vor, diese Bedingungen nach unserem alleinigen Ermessen jederzeit zu ändern oder zu ersetzen. Wenn eine Änderung wesentlich ist, werden wir mindestens 30 Tage im Voraus benachrichtigen, bevor neue Bedingungen in Kraft treten. Was eine wesentliche Änderung darstellt, wird nach unserem alleinigen Ermessen bestimmt.',
    'terms.13.title': '13. Kontaktinformationen',
    'terms.13.content': 'Wenn Sie Fragen zu diesen Bedingungen haben, kontaktieren Sie uns bitte über das Kontaktformular unserer Website.',
  },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Initialize from localStorage or browser preference
    try {
      const savedLanguage = localStorage.getItem('selectedLanguage');
      if (savedLanguage) {
        const supportedLanguages: Language[] = ['en', 'it', 'fr', 'es', 'de'];
        if (supportedLanguages.includes(savedLanguage as Language)) {
          return savedLanguage as Language;
        }
      }
      
      // Fallback to browser language
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      const supportedLanguages: Language[] = ['en', 'it', 'fr', 'es', 'de'];
      if (supportedLanguages.includes(browserLang as Language)) {
        return browserLang as Language;
      }
    } catch (error) {
      // Use default language
    }
    return 'en';
  });

  useEffect(() => {
    // Save language to localStorage whenever it changes
    localStorage.setItem('selectedLanguage', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
