import PropTypes from 'prop-types';

const CheckBox = ({label, onchange, checked})=>{
    const CheckBoxStyle = "text-scondary";

    return(
        <label>
            <input type="checkbox" onchange={onchange} checked={checked}/>
            {label}
        </label>
    );
};

CheckBox.propTypes = {
    label:PropTypes.string.isRequired,
    onchange:PropTypes.string.isRequired,
    checked:PropTypes.string.isRequired
}


export default CheckBox;