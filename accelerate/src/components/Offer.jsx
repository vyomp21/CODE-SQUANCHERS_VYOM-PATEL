import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import "../styles/Offers.css"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
const Offer = ({src, description, title, wiki}) => {
    return (
        <MDBCard>
          <MDBCardImage src={src} width={400} height={240} style={{objectFit: "fill"}}  position='top' alt='...' />
          <MDBCardBody>
            <MDBCardTitle>{title}</MDBCardTitle>
            <MDBCardText>
              {description}
            </MDBCardText>
            <MDBBtn href={wiki} target="_blank">Read More</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      );
}
export default Offer;
