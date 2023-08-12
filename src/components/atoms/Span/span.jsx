import PropTypes from 'prop-types';

const Span = ({ children })=>{
    const Spanstyle="text-scondary";
    return(
        <span className={Spanstyle}>{children}</span>
    );
};



Span.proptypes = {
    children:PropTypes.string.isRequired
}


export default Span;