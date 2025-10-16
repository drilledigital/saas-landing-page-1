import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";
const classes = cva("border rounded-full  h-12 px-6 font-medium ", {
    variants: {
        variant: {
            primary: "bg-lime-400 text-neutral-950 border-lime-400",
            secondary: "border-white",
        },
        size:{
            sm: "h-10",
        }
    },
});
export default function Button(
    props: {
        variant: "primary" | "secondary";
        size?: 'sm'; 
    } & ButtonHTMLAttributes<HTMLButtonElement>
) {
    const {variant, className, size, ...otherProps} = props;
    return (
        <button
            className={classes({
                variant,
                size,
                className,
            })}
            {...otherProps}
        />
    );
}
