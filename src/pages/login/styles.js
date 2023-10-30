import { styled } from 'styled-components';

export const PageContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.85);
`;

export const ModalForm = styled.div`
  --modal-width: 366px;
  --modal-height: 439px;

  position: absolute;
  left: calc(50% - (var(--modal-width) / 2));
  top: calc(50% - (var(--modal-height) / 2));
  box-sizing: border-box;
  width: var(--modal-width);
  min-height: var(--modal-height);
  background-color: #ffffff;
  border-radius: 12px;
  padding: 43px 47px 47px 40px;
`;
export const ModalLogo = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 34px;
  background-color: transparent;
`;

export const ModalLogoImage = styled.img`
  width: 140px;
  height: 21px;
`;

export const ModalInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid #d0cece;
  padding: 8px 1px;
  font-size: 16px;
  padding-left: 10px;

  &::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #d0cece;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  width: 278px;
  height: 52px;
  border-radius: 6px;
  border: none;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;

  &:disabled {
    background-color: #303030;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #ffffff;
  background-color: #580ea2;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;
export const SecondaryButton = styled(Button)`
  color: #000000;
  background-color: transparent;
  border: 1px solid #d0cece;

  &:hover {
    background-color: #f4f5f6;
  }

  &:active {
    background-color: #d9d9d9;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
  width: 100%;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;

export const Error = styled.div`
  color: red;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
  text-align: center;
`;





// import { NavLink } from 'react-router-dom';
// import styled, { css } from 'styled-components';

// export const Wrapper = styled.div`
//   width: 100%;
//   min-height: 100%;
//   overflow: hidden;
// `;

// export const ContainerEnter = styled.div`
//   max-width: 100%;
//   height: 100vh;
//   margin: 0 auto;
//   position: relative;
//   background-color: rgb(0 0 0 / 85%);
// `;

// export const ModalBlock = styled.div`
//   position: absolute;
//   z-index: 2;
//   left: calc(50% - (366px / 2));
//   top: calc(50% - (439px / 2));
//   opacity: 1;
// `;

// export const ModalFormLogin = styled.form`
//   width: 366px;
//   height: 439px;
//   background-color: #fff;
//   border-radius: 12px;
//   display: -webkit-box;
//   display: flex;
//   -webkit-box-orient: vertical;
//   flex-direction: column;
//   justify-content: space-between;
//   padding: 43px 47px 47px 41px;
//   align-items: center;
// `;

// export const ModalFormLoginLink = styled.a``;

// export const ModalFormLoginImg = styled.img``;

// export const ModalFormLoginInput = styled.div`
//   width: 278px;
//   margin: 0 auto;
//   display: flex;
//   flex-direction: column;
//   row-gap: 20px;
// `;

// export const ModalFormLoginButtons = styled(ModalFormLoginInput)``;

// export const ModalInput = styled.input`
//   height: 52px;
//   border: none;
//   border-bottom: 1px solid #d0cece;
//   outline: none;
//   &::placeholder {
//     font-family: StratosSkyeng, sans-serif;
//     font-size: 18px;
//     font-style: normal;
//     font-weight: 400;
//     line-height: 24px;
//     letter-spacing: -0.054px;
//     color: #d0cece;
//   }
// `;

// const BtnMixin = css`
//   font-size: 18px;
//   line-height: 24px;
//   letter-spacing: -0.054px;
//   font-variant-numeric: lining-nums proportional-nums;
//   border-radius: 6px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const ModalButtonEnter = styled(NavLink)`
//   ${BtnMixin};
//   background-color: #580ea2;
//   height: 52px;
//   color: #fff;

//   &:hover {
//     background-color: #3f007d;
//   }

//   &:active {
//     background-color: #271a58;
//   }
// `;

// export const ModalBtnSignup = styled.button`
//   ${BtnMixin};
//   width: 278px;
//   height: 52px;
//   border: 1px solid #d0cece;
//   background-color: #fff;
//   color: #000;

//   &:hover {
//     background-color: #3f007d;
//     color: #fff;
//   }

//   &:active {
//     background-color: #271a58;
//     color: #fff;
//   }
// `;



// export const PageContainer = styled.div`
//   max-width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.85);
// `;

// export const ModalForm = styled.div`
//   --modal-width: 366px;
//   --modal-height: 439px;

//   position: absolute;
//   left: calc(50% - (var(--modal-width) / 2));
//   top: calc(50% - (var(--modal-height) / 2));
//   box-sizing: border-box;
//   width: var(--modal-width);
//   min-height: var(--modal-height);
//   background-color: #ffffff;
//   border-radius: 12px;
//   padding: 43px 47px 47px 40px;
// `;
// export const ModalLogo = styled.div`
//   display: flex;
//   justify-content: center;
//   width: 100%;
//   margin-bottom: 34px;
//   background-color: transparent;
// `;

// export const ModalLogoImage = styled.img`
//   width: 140px;
//   height: 21px;
// `;

// export const ModalInput = styled.input`
//   width: 100%;
//   border: none;
//   border-bottom: 1px solid #d0cece;
//   padding: 8px 1px;
//   font-size: 16px;
//   padding-left: 10px;

//   &::placeholder {
//     font-style: normal;
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 24px;
//     color: #d0cece;
//   }
// `;

// const Button = styled.button`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-decoration: none;

//   width: 278px;
//   height: 52px;
//   border-radius: 6px;
//   border: none;
//   font-style: normal;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 24px;

//   &:disabled {
//     background-color: #303030;
//   }
// `;

// export const PrimaryButton = styled(Button)`
//   color: #ffffff;
//   background-color: #580ea2;
//   &:hover {
//     background-color: #3f007d;
//   }

//   &:active {
//     background-color: #271a58;
//   }
// `;
// export const SecondaryButton = styled(Button)`
//   color: #000000;
//   background-color: transparent;
//   border: 1px solid #d0cece;

//   &:hover {
//     background-color: #f4f5f6;
//   }

//   &:active {
//     background-color: #d9d9d9;
//   }
// `;

// export const Buttons = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   margin-top: 60px;
//   width: 100%;
// `;

// export const Inputs = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 30px;
//   width: 100%;
// `;

// export const Error = styled.div`
//   color: red;
//   font-weight: 400;
//   font-size: 18px;
//   line-height: 24px;
//   margin-top: 20px;
//   text-align: center;
// `;