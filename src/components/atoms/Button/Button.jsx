import PropTypes from 'prop-types';

const Button = ({ href, children })=> {
    const Buttonstyle = "text-secondary bg-primary px-3 py-1 rounded bg-blue-500";
    return(
        <a className={Buttonstyle} href={href}>
            {children}
        </a>
    );
}

Button.PropTypes = {
    href:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}


export default Button