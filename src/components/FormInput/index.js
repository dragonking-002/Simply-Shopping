import { Group,FormInputLabel,Input } from "./form-input.stylex"

const FormInput = ({label,...otherProps}) => {
    return(
        <Group>
            <Input {...otherProps}/>
            <FormInputLabel>{label}</FormInputLabel>
        </Group>
    )
}

export default FormInput