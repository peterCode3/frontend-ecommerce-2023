import PropTypes from 'prop-types';

const Input = ({ type, value, name, onChange }) => {
    return(
        <input className='p-2 border-2 bg- border-secondary' type={type} name={name} value={value} onChange={onChange} />
    );
};


export default Input;