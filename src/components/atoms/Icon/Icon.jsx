import PropsTypes from 'prop-types';

const Icon = ({ children })=>{
    const IconStyle = "icon-style";

    return(
        <i className={IconStyle}>{children}</i>
    );

};

export default Icon