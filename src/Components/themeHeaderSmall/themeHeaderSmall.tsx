import { memo } from 'react';
import PropTypes from 'prop-types';

// import "./themeHeaderSmall.css";
import { HeaderSamllWrapper } from './style';

const ThemeHeaderSmall: any = memo(function (props: any) {
    const { title, more } = props;

    return (
        <HeaderSamllWrapper>
            <h3>{title}</h3>
            <a href="/abc">{more}</a>
        </HeaderSamllWrapper>
    )
})

ThemeHeaderSmall.defaultProps = {

}

ThemeHeaderSmall.propTypes = {
    title: PropTypes.string.isRequired,
    more: PropTypes.string
}

export default ThemeHeaderSmall
