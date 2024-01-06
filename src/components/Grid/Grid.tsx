import clsx from "clsx";
import { GridProps } from "./Grid.props";

const Grid = (props: GridProps) => {
    const { cols, gap, children, ...restProps} = props;
    
    return <div {...restProps} className={clsx("grid grid-cols-4 gap-4")}>{children}</div>
}

export default Grid