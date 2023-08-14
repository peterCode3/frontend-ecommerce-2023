import PropTypes from 'prop-types';

const Label = ({ children, htmlFor }) => {
    const labelStyle = "block text-gray-700 font-medium ptr-label";
    return (
        <label className={labelStyle} htmlFor={htmlFor}>
            {children}
        </label>
    );
};

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

export default Label;
