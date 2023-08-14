import PropTypes from 'prop-types';

const Submit = ({ value, name, onChange }) => {
    const InputStyle = "ptr-form-input";
    return(
        <input className='focus:outline-none mt-3 px-4 py-2 cursor-pointer border rounded-md focus:ring focus:ring-blue-300' type='submit' name={name} value={value} onChange={onChange} />
    );
};

Submit.propTypes = {
    name:PropTypes.string.isRequired
}
export default Submit;