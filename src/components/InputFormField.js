import React from 'react'
import { Form } from 'semantic-ui-react'

const InputFormField = props => (
    <Form.Input {...props.input}
                label={props.label}
                value={props.input.value}
                onChange={(param,data) => props.input.onChange(data.value)}
                placeholder={props.label}
    />
);

export default InputFormField
