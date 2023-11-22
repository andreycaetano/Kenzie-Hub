import { forwardRef } from "react";

export const Form = forwardRef(({children, ...rest}, ref) => {
    return(
        <form ref={ref} {...rest}>
            {children}
        </form>
    )
})