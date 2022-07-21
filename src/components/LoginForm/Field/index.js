// == Import : npm
import PropTypes from 'prop-types';

// == Import : local
import './style.scss';
import {useDispatch} from "react-redux";
import {changeField} from "../../../actions/user";

// == Composant
const Field = ({ value, name, type, placeholder }) => {
    const dispatch = useDispatch();

    const handleChange = (evt) => {
       // onChange(evt.target.value, name);
        dispatch(changeField(name, evt.target.value));
    };

    const inputId = `field-${name}`;

    return (
        <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
            <input
                // React - state
                value={value}
                onChange={handleChange}
                // infos de base
                id={inputId}
                type={type}
                className="field-input"
                placeholder={placeholder}
                name={name}
            />

            <label
                htmlFor={inputId}
                className="field-label"
            >
                {placeholder}
            </label>
        </div>
    );
};

Field.propTypes = {
    value: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
    value: '',
    type: 'text',
};

// == Export
export default Field;
