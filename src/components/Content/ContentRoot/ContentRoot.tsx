import { ReactNode } from "react"
import styles from "./ContentRoot.module.scss"

interface ContentRootProps {
  children: ReactNode
}

const ContentRoot = ({children}: ContentRootProps) => {
  return (
    <div className={styles.content}>{children}</div>
  )
}

export default ContentRoot