import React from 'react';

const Logo = ({ className, style }) => {
  return (
    <div className={`brand-logo-svg ${className || ''}`} style={{ display: 'inline-flex', alignItems: 'center', position: 'relative', ...style }}>
      {/* Semi-circle of dots */}
      <svg width="60" height="100" viewBox="0 0 60 100" style={{ position: 'absolute', left: '-15px', top: '50%', transform: 'translateY(-50%)' }}>
        <path id="curve" d="M 50,10 A 40,40 0 0,0 50,90" fill="transparent" stroke="transparent" />
        {/* We can place dots manually or use stroke-dasharray. Let's use manual circles for perfection */}
        <circle cx="45" cy="12" r="4" fill="#17C717" />
        <circle cx="33" cy="18" r="4" fill="#17C717" />
        <circle cx="23" cy="27" r="4" fill="#17C717" />
        <circle cx="16" cy="38" r="4" fill="#17C717" />
        <circle cx="12" cy="50" r="4" fill="#17C717" />
        <circle cx="16" cy="62" r="4" fill="#17C717" />
        <circle cx="23" cy="73" r="4" fill="#17C717" />
        <circle cx="33" cy="82" r="4" fill="#17C717" />
        <circle cx="45" cy="88" r="4" fill="#17C717" />
      </svg>

      {/* The Big 'I' */}
      <div style={{
        fontSize: '3.5rem',
        fontWeight: '900',
        color: '#FFCC00',
        fontFamily: 'serif',
        lineHeight: '1',
        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
        marginRight: '0.2rem',
        position: 'relative',
        zIndex: 2
      }}>
        I
      </div>

      {/* The rest of the text */}
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        {/* MELA PROJECTS */}
        <div style={{
          fontSize: '2.5rem',
          fontWeight: '900',
          color: '#17C717',
          fontFamily: '"Allerta Stencil", "Black Ops One", sans-serif',
          lineHeight: '0.8',
          letterSpacing: '1px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          MELA PROJECTS
        </div>

        {/* Green Line with dot */}
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '4px', marginBottom: '2px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#17C717', marginRight: '-2px', zIndex: 1 }}></div>
          <div style={{ height: '3px', backgroundColor: '#17C717', width: '100%' }}></div>
        </div>

        {/* Tagline */}
        <div style={{
          fontSize: '0.7rem',
          fontWeight: '600',
          color: '#FFCC00',
          textAlign: 'right',
          letterSpacing: '0.5px'
        }}>
          Where Expertise Meets Efficiency
        </div>
      </div>
    </div>
  );
};

export default Logo;
