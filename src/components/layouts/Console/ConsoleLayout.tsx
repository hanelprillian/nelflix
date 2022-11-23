import {ReactNode} from "react";
import MainHeader from "../../elements/MainHeader";
import {BodyLayout} from "./styles"
function ConsoleLayout ({ children } : {children : ReactNode}) {
  return (
    <BodyLayout>
      <MainHeader/>
      {children}
    </BodyLayout>
  )
}

export default ConsoleLayout
