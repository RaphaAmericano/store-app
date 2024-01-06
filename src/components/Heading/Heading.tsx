import clsx from "clsx";
import HeadingProps, { HeadingTag } from "./Heading.props"

function getCSS(tag:HeadingTag){
    switch(tag){
        case "h1":
            return "text-4xl font-extrabold lg:text-5xl";
        case "h2":
            return "text-3xl font-semibold first:mt-0";
        case "h3":
            return "text-2xl font-semibold";
        case "h4":
        case "h5":
        case "h6":
        default:
            return "text-xl font-semibold";
    }
}

const Heading = (props: HeadingProps ) => {
    const { tag, children, className, ...restProps } = props;
    const HeadingComponent = tag; 
    const classes = getCSS(tag);
    return <HeadingComponent {...restProps} className={clsx("scroll-m-20 tracking-tight",classes, className)}>{children}</HeadingComponent>
}

export default Heading