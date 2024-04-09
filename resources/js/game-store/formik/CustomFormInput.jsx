import {ErrorMessage, useField} from 'formik';
import {InputText} from "primereact/inputtext";
import {InputTextarea} from 'primereact/inputtextarea';
import {Message} from 'primereact/message';
import {InputNumber} from "primereact/inputnumber";
import { RadioButton } from 'primereact/radiobutton';
import {Dropdown} from 'primereact/dropdown';

const CustomErrorMessage = ({children}) => {
    return (
        <Message severity="error" text={children} className='formErrorMessage mt-1'/>
    )
}


export const CustomFormSelectService = ({ label, optionLabel = 'nombre', optionValue = 'id', iconSrc, placeholder, onSelect, ...props }) => {
    const [field] = useField(props);
    const options = props.options;

    const handleSelect = (event) => {
        const selectedId = event.value;
        field.onChange(event);
        onSelect(selectedId);
    };

    return (
        <div style={{ position: 'relative', marginBottom: '1rem' }}>
            <label htmlFor={props.id || props.nombre}>{label}</label>
            <div>
                <Dropdown
                    {...field}
                    options={options}
                    optionLabel={optionLabel}
                    optionValue={optionValue}
                    className='w-full'
                    filter={!!props.filter}
                    placeholder={placeholder}
                    onChange={handleSelect}
                />
            </div>
            <ErrorMessage name={props.name} component={CustomErrorMessage} />
        </div>
    );
};

export const CustomFormInput = ({ label, iconSrc, placeholder, type, ...props }) => {
    const [field] = useField(props);
    const isNumberInput = type === 'number';

    return (
        <div style={{position: 'relative', marginBottom: '1rem'}}>
            <label htmlFor={props.id || props.name}>{label}</label>
            <div>
                <InputText
                    {...field}
                    {...props}
                    placeholder={placeholder}
                    type={isNumberInput ? 'text' : type}
                    inputMode={isNumberInput ? 'numeric' : 'text'}
                    pattern={isNumberInput ? '[0-9]*' : undefined}
                    className='w-full'
                />
            </div>
            <ErrorMessage name={props.name} component={CustomErrorMessage}/>
        </div>
    );
};


