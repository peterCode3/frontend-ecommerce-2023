import PropTypes from 'prop-types';

const AnchorTag = ({href, children})=>{
    const AnchorTagstyle = "cursor-pointer";

    return(
        <a className={AnchorTagstyle} href={href}>
            {children}
        </a>
    );
};


AnchorTag.propTypes = {
    href:PropTypes.string.isRequired,
    children:PropTypes.string.isRequired
}


export default AnchorTag;

