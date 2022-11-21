import {ReactNode} from "react";
import {CenterBox, BodyLayout, BodyContainer, Title, Logo} from "./styles"
import {Slide} from "@mui/material";
import MainLogo from "../../../logo.svg";

function AuthLayout ({title, children} : {title: string ,children: ReactNode}) {
  return (
    <BodyLayout>
      <Logo src={MainLogo}/>
      <BodyContainer>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <CenterBox>
            <Title>{title}</Title>
            {children}
          </CenterBox>
        </Slide>
      </BodyContainer>
    </BodyLayout>
  )
}

export default AuthLayout
