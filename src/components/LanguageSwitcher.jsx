import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <select 
      value={i18n.language} 
      onChange={(e) => changeLanguage(e.target.value)}
      style={{ 
        padding: '6px 8px',
        border: '1px solid #d1d5db',
        borderRadius: '4px',
        background: '#ffffff',
        fontSize: '14px',
        cursor: 'pointer',
        outline: 'none',
        color: '#374151'
      }}
    >
      <option value="en">EN</option>
      <option value="zh">中文</option>
    </select>
  );
};

export default LanguageSwitcher;