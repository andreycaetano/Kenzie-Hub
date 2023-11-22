import { forwardRef } from "react";

export const Input = forwardRef(({label, id, ...rest}, ref) => {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...rest} ref={ref}/>
        </>
    )
})