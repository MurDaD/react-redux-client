import React from 'react'
import { Form } from 'semantic-ui-react'

const DropdownFormField = props => (
    <Form.Select {...props.input}
                 options={props.options}
                 label={props.label}
                 value={props.input.value}
                 onChange={(param,data) => props.input.onChange(data.value)}
                 placeholder={props.label}
    />
);

export default DropdownFormField
