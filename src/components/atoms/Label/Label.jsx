import PropTypes, { string } from 'prop-types';

const Label = ({ children, htmlfor })=>{
    const labelstyle = "text-sceondary";
    return(
        <label className={labelstyle} htmlFor={htmlfor}>{children}</label>
    );
};

Label.propTypes = {
    htmlfor:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}


export default Label;