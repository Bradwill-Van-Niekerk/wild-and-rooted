import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p>&copy; 2024 Farmhouse Fare. All rights reserved.</p>
        <div style={styles.socialLinks}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.link}>
            Instagram
          </a>
        </div>
      </div>

      {/* Location Section */}
      <section style={{ ...styles.section, ...styles.verticalSection }}>
        <h2 style={styles.subHeader}>Location</h2>
        <p style={styles.paragraph}>97 Durham Ave, Salt River, Cape Town, 7925</p>
        <p style={styles.paragraph}>Phone: +27 78 151 9494</p>
      </section>

      {/* Opening Hours Section */}
      <section style={{ ...styles.section, ...styles.verticalSection }}>
        <h2 style={styles.subHeader}>Opening Hours</h2>
        <p style={styles.paragraph}><strong>LUNCH</strong><br />Saturday and Sunday <br /> 12:00 PM to 1:30 PM</p>
        <p style={styles.paragraph}><strong>DINNER</strong><br />Wednesday to Sunday <br /> 6:00 PM to 10:45 PM</p>
      </section>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  socialLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  section: {
    padding: '20px',
    borderTop: '1px solid #444',
    marginTop: '20px',
  },
  verticalSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: '20px',
    color: '#fff',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    color: '#ccc',
    marginBottom: '10px',
  },
};

export default Footer;
