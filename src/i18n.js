import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navigation
      support: 'Support',
      privacy: 'Privacy Policy',
      language: 'Language',
      
      // App
      appName: 'Cubby',
      appDescription: 'Your personal storage organization app',
      home: 'Home',
      
      // Features
      features: 'Features',
      feature1: 'Smart storage management',
      feature2: 'Local data storage', 
      feature3: 'Multi-language support',
      feature4: 'Clean and intuitive interface',
      
      // Support page
      supportTitle: 'Customer Support',
      supportDescription: 'Contact us for any questions or feedback',
      email: 'Email',
      feedbackNote: 'We welcome any form of feedback and suggestions',
      
      // Privacy Policy page
      privacyTitle: 'Privacy Policy',
      lastUpdated: 'Last updated',
      informationCollection: 'Information We Collect',
      informationUse: 'How We Use Your Information',
      informationSharing: 'Information Sharing',
      dataSecurity: 'Data Security',
      yourRights: 'Your Rights',
      contactInfo: 'Contact Information',
      
      privacyContent: {
        intro: 'This Privacy Policy describes how Cubby handles your data and protects your privacy.',
        collection: 'Cubby stores all your data locally on your device. We do not collect or store any personal information on our servers.',
        use: 'All your storage organization data remains on your device and is used solely to provide the app functionality.',
        sharing: 'Since all data is stored locally, we do not share any personal information with third parties.',
        security: 'Your data security is ensured by local storage on your device. We recommend keeping your device secure.',
        rights: 'You have complete control over your data since it is stored locally on your device.',
        contact: 'If you have any questions about this Privacy Policy, please contact us at cuubysvc@gmail.com'
      }
    }
  },
  zh: {
    translation: {
      // Navigation
      support: '客户支持',
      privacy: '隐私协议',
      language: '语言',
      
      // App
      appName: '收纳格',
      appDescription: '您的个人收纳整理应用',
      home: '首页',
      
      // Features
      features: '功能特点',
      feature1: '智能收纳管理',
      feature2: '本地数据存储',
      feature3: '多语言支持', 
      feature4: '简洁易用界面',
      
      // Support page
      supportTitle: '客户支持',
      supportDescription: '如有任何问题或反馈，请联系我们',
      email: '邮箱',
      feedbackNote: '我们欢迎任何形式的反馈和建议',
      
      // Privacy Policy page
      privacyTitle: '隐私协议',
      lastUpdated: '最后更新',
      informationCollection: '我们收集的信息',
      informationUse: '我们如何使用您的信息',
      informationSharing: '信息共享',
      dataSecurity: '数据安全',
      yourRights: '您的权利',
      contactInfo: '联系信息',
      
      privacyContent: {
        intro: '本隐私协议描述了收纳格应用如何处理您的数据并保护您的隐私。',
        collection: '收纳格将您的所有数据存储在您的设备本地。我们不会在服务器上收集或存储任何个人信息。',
        use: '您的所有收纳整理数据都保留在您的设备上，仅用于提供应用功能。',
        sharing: '由于所有数据都存储在本地，我们不会与第三方共享任何个人信息。',
        security: '您的数据安全通过设备本地存储来保障。我们建议您保持设备安全。',
        rights: '由于数据存储在您的设备本地，您对您的数据拥有完全控制权。',
        contact: '如果您对本隐私协议有任何疑问，请通过 cuubysvc@gmail.com 联系我们'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'zh',
    debug: false,
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;