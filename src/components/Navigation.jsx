import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav style={{ 
      padding: '16px 0', 
      borderBottom: '1px solid #e5e7eb',
      marginBottom: '32px'
    }}>
      <div className="container">
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            <Link to="/" className="nav-link">
              {t('home')}
            </Link>
            <Link to="/support" className="nav-link">
              {t('support')}
            </Link>
            <Link to="/privacy" className="nav-link">
              {t('privacy')}
            </Link>
          </div>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;