import Page from 'src/components/Page';
import AppHeader from 'src/components/AppHeader';
import Content from 'src/components/Content';
import PropTypes from "prop-types";

const Error = ({message}) => (
    <Page>
        <AppHeader/>
        <Content
            title="Erreur"
            text={message}
        />
    </Page>
);

Error.propTypes = {
    message: PropTypes.string.isRequired,
}
export default Error;
