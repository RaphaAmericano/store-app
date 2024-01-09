import { Fragment } from "react"
import { LoaderProps } from "./Loader.props"
import { LuLoader2 } from "react-icons/lu";

const Loader = ({ text }: LoaderProps) => {
    return  <Fragment>
                <LuLoader2  className="animate-spin"  />
                {text}
            </Fragment>
}

export default Loader