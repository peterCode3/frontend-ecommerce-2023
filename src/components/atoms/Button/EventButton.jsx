import PropTypes from 'prop-types';

const EventButton = ({type, children, onclick})=>{
    const EventButtonstyle = "text-scondary bg-green-500 py-1 px-4 rounded ";

    return(
        <button className={EventButtonstyle} onclick={onclick} type={type}>
            {children}
        </button>
    );
};


EventButton.propTypes = {
    type:PropTypes.string.isRequired,
    onclick:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}



export default EventButton;