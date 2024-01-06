import clsx from "clsx";
import { ContainerProps } from "./Container.props"

const Container = (props:ContainerProps) => {
    const { children, className, ...restProps } = props;
    return <div {...restProps} className={clsx("container mx-auto", className)}>{children}</div>
}

export default Container