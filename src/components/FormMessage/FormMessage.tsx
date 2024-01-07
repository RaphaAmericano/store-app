import clsx from "clsx"
import { FormMessageProps } from "./FormMessage.props"

const FormMessage = (props: FormMessageProps) => {
    const { text, type } = props
    const color = () => {
        switch (type) {
            case "success":
                return "text-green-500"
            case "alert":
                return "text-yellow-500"
            case "danger":
            default:
                return "text-red-500"
        }
    }
    return (
        <small className={clsx("text-sm font-medium leading-none", color())}>{text}</small>
    )
}

export default FormMessage