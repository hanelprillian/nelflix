import {ReactNode, useEffect} from "react";
import {CenterBox, BodyLayout, BodyContainer} from "./styles"

function AuthLayout ({children} : {children: ReactNode}) {
  useEffect(() => {
    // document.body.style.backgroundColor = 'red'
  }, [])
  return (
    <BodyLayout>
      <BodyContainer>
        <CenterBox>
          {children}
        </CenterBox>
      </BodyContainer>
    </BodyLayout>
  )
}

export default AuthLayout
