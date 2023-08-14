import PropTypes from 'prop-types';

const Input = ({ type, value, name, onChange }) => {
    const InputStyle = "ptr-form-input";
    return(
        <input className='ptr-form-input mt-2 mb-2 text-black px-4 py-2 w-full border rounded-md focus:ring focus:ring-blue-300' type={type} name={name} value={value} onChange={onChange} />
    );
};


export default Input;