import { FormControl, IconButton, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons/';
import { useState } from 'react';

export default function Password(props){
    const [showPassword, setShowPassword] = useState(false);

    return (
        <FormControl>
            <InputLabel 
                htmlFor={props.id}
                error={props.error}
            >
                {props.label}
            </InputLabel>
            <Input
                id={props.id}
                type={showPassword ? 'text' : 'password'}
                {...props.register()}
                error={props.error}
                endAdornment={
                    <InputAdornment position="end">
                    <IconButton aria-label="Toggle password visibility" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
}