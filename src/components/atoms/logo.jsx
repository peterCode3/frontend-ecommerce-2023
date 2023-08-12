import PropTypes from 'prop-types';

const logo = ({ src, alt, href })=> {
    return(
        <div>
            {LogoData.map((item)=> {
                return(
                    <a className='w-[70px] block' key={item.href} href={item.href}>
                        <img src={item.src} alt={item.alt} />
                    </a>
                );
            })}
        </div>
    );
}; 