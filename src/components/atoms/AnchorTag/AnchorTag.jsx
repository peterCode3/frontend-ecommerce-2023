import Link from 'next/link';
import PropTypes from 'prop-types';

const AnchorTag = ({ href, children }) => {
    const AnchorTagstyle = "cursor-pointer";

    return (
        <Link href={href}>
            <>{children}</>
        </Link>
    );
};


AnchorTag.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}


export default AnchorTag;

