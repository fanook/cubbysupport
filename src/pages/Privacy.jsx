import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="container" style={{ paddingTop: '32px', lineHeight: '1.7' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ 
          fontSize: '28px', 
          fontWeight: '600',
          color: '#000000',
          marginBottom: '12px'
        }}>
          {t('privacyTitle')}
        </h1>
        <p style={{ 
          fontSize: '14px', 
          color: '#6b7280',
          fontStyle: 'italic'
        }}>
          {t('lastUpdated')}: 2024-01-01
        </p>
      </div>

      <div style={{ 
        padding: '20px',
        background: '#f9fafb',
        borderRadius: '8px',
        marginBottom: '24px',
        border: '1px solid #e5e7eb'
      }}>
        <p style={{ fontSize: '15px', color: '#374151', margin: 0 }}>
          {t('privacyContent.intro')}
        </p>
      </div>

      <div style={{ display: 'grid', gap: '24px' }}>
        <section>
          <h2 style={{ 
            color: '#000000',
            fontSize: '18px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            {t('informationCollection')}
          </h2>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {t('privacyContent.collection')}
          </p>
        </section>

        <section>
          <h2 style={{ 
            color: '#000000',
            fontSize: '18px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            {t('informationUse')}
          </h2>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {t('privacyContent.use')}
          </p>
        </section>

        <section>
          <h2 style={{ 
            color: '#000000',
            fontSize: '18px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            {t('informationSharing')}
          </h2>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {t('privacyContent.sharing')}
          </p>
        </section>

        <section>
          <h2 style={{ 
            color: '#000000',
            fontSize: '18px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            {t('dataSecurity')}
          </h2>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {t('privacyContent.security')}
          </p>
        </section>

        <section>
          <h2 style={{ 
            color: '#000000',
            fontSize: '18px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            {t('yourRights')}
          </h2>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {t('privacyContent.rights')}
          </p>
        </section>

        <section>
          <h2 style={{ 
            color: '#000000',
            fontSize: '18px',
            marginBottom: '8px',
            fontWeight: '600'
          }}>
            {t('contactInfo')}
          </h2>
          <p style={{ fontSize: '15px', color: '#374151' }}>
            {t('privacyContent.contact')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;