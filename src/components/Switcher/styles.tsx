import styled from "styled-components";

export const Label = styled.label<{ checked: boolean }>`  
  cursor: pointer;  
  text-indent: -9999px;  
  width: 40px;  
  height: 20px;  
  background: ${props => props.theme.palette.primary.main};
  display: block;  
  border-radius: 100px;  
  position: relative;
  &:after {    
    content: "";    
    position: absolute;    
    left: ${({ checked }) => (checked ? "5px" : "52%")}; 
    top: 2.5px;    
    width: 14px;    
    height: 14px;    
    background: #fff;    
    border-radius: 90px;    
    transition: 0.3s;  
} 
`;