import {ReactNode} from "react";
import {CenterBox, BodyLayout, BodyContainer, Title} from "./styles"
import {Slide} from "@mui/material";

function AuthLayout ({title, children} : {title: string ,children: ReactNode}) {
  return (
    <BodyLayout>
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
