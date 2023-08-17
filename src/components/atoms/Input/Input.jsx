import PropTypes from 'prop-types';

const InputField = ({ type, value, name, onChange, placeholder }) => {
    const InputStyle = "ptr-form-input";
    return(
        <input className='ptr-form-input mt-2 mb-2 text-black px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300' placeholder={placeholder} type={type} name={name} value={value} onChange={onChange} />
    );
};


export default InputField;