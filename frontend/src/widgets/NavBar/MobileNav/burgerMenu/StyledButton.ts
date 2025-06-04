import styled from "styled-components";
import BurgerMenu from "widgets/NavBar/MobileNav/burgerMenu/burgerMenu";

const StyledButton = (open: boolean) => styled.button `
        div:nth-child(1) {
          transform: ${ open ? 'rotate(45deg)' : 'rotate(0deg)'};
          transition: all 1s ease-in;
        }
        div:nth-child(3) {
          transform: ${ open ? 'rotate(-45deg)' : 'rotate(0deg)'};
        }
        div:nth-child(2) {
          transform: ${ open ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${ open ? '0' : '1'};
        }
    `;
export default StyledButton;