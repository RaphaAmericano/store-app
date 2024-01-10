
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"
import { AlertBarProps } from "./AlertBar.props"

const AlertBar = (props: AlertBarProps) => {
    const { title, icon, children, ...rest } = props
    return <Alert {...rest}>
    {icon ?? icon}
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>
      {children}
    </AlertDescription>
  </Alert>
}
export default AlertBar