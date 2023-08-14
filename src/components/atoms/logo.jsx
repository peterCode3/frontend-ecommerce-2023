import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ logoData }) => {
  return (
    <div>
      {logoData.map((item) => (
        <a className='w-[70px] block' key={item.href} href={item.href}>
          <img src={item.src} alt={item.alt} />
        </a>
      ))}
    </div>
  );
};

Logo.propTypes = {
  logoData: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Logo;
