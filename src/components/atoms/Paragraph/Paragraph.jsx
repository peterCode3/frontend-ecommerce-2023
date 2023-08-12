import PropTypes from 'prop-types';

const Paragraph = ({children})=>{
    const Pragraphstyle = "text-sceondary";
    return(
        <p className={Pragraphstyle}>{children}</p>
    );
};

Paragraph.proptypes = {
    children:PropTypes.string.isRequired
}

export default Paragraph;

