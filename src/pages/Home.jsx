import { useTranslation } from 'react-i18next';
import { Package, Lock, Globe, Smartphone } from 'lucide-react';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container" style={{ paddingTop: '48px' }}>
      <div style={{ marginBottom: '40px', textAlign: 'center' }}>
        <h1 style={{ 
          fontSize: '36px', 
          fontWeight: '600',
          color: '#000000',
          marginBottom: '12px',
          letterSpacing: '-0.5px'
        }}>
          {t('appName')}
        </h1>
        <p style={{ 
          fontSize: '18px', 
          color: '#6b7280',
          marginBottom: '0'
        }}>
          {t('appDescription')}
        </p>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginTop: '40px'
      }}>
        <div style={{ 
          padding: '20px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px'
        }}>
          <Package size={20} style={{ marginBottom: '12px', color: '#374151' }} />
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#000000', marginBottom: '4px' }}>
            {t('feature1')}
          </h3>
        </div>
        <div style={{ 
          padding: '20px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px'
        }}>
          <Lock size={20} style={{ marginBottom: '12px', color: '#374151' }} />
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#000000', marginBottom: '4px' }}>
            {t('feature2')}
          </h3>
        </div>
        <div style={{ 
          padding: '20px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px'
        }}>
          <Globe size={20} style={{ marginBottom: '12px', color: '#374151' }} />
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#000000', marginBottom: '4px' }}>
            {t('feature3')}
          </h3>
        </div>
        <div style={{ 
          padding: '20px',
          border: '1px solid #e5e7eb',
          borderRadius: '8px'
        }}>
          <Smartphone size={20} style={{ marginBottom: '12px', color: '#374151' }} />
          <h3 style={{ fontSize: '15px', fontWeight: '600', color: '#000000', marginBottom: '4px' }}>
            {t('feature4')}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;