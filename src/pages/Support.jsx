import { useTranslation } from 'react-i18next';
import { Mail } from 'lucide-react';

const Support = () => {
  const { t } = useTranslation();

  return (
    <div className="container" style={{ paddingTop: '24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '600',
          color: '#000000',
          marginBottom: '12px'
        }}>
          {t('supportTitle')}
        </h1>
        <p style={{ 
          fontSize: '16px', 
          color: '#6b7280',
          marginBottom: '0'
        }}>
          {t('supportDescription')}
        </p>
      </div>

      <div style={{ 
        padding: '24px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        marginBottom: '24px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
          <Mail size={18} style={{ marginRight: '8px', color: '#374151' }} />
          <h3 style={{ 
            fontSize: '16px',
            fontWeight: '600',
            color: '#000000',
            margin: '0'
          }}>
            {t('email')}
          </h3>
        </div>
        
        <p style={{ 
          fontSize: '15px', 
          color: '#374151',
          fontFamily: 'Monaco, Consolas, monospace',
          background: '#f9fafb',
          padding: '10px 12px',
          borderRadius: '4px',
          border: '1px solid #e5e7eb',
          marginBottom: '16px'
        }}>
          cuubysvc@gmail.com
        </p>
        
        <p style={{ 
          fontSize: '14px', 
          color: '#6b7280',
          marginBottom: '0'
        }}>
          {t('feedbackNote')}
        </p>
      </div>
    </div>
  );
};

export default Support;