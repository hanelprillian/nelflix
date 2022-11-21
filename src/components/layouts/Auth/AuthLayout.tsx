import { ReactNode } from "react";
import {useStyles} from "./styles";

function AuthLayout ({children} : {children: ReactNode}) {
  const styles = useStyles();
  return (
    <>
      <div className={styles.bannerPage}>

      </div>
      {children}
    </>
  )
}

export default AuthLayout
