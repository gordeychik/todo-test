import styled from "styled-components"

const ButtonStyled = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    color: rgb(82, 82, 82);
    font-size: 16px;
    line-height: 22px;
    color: rgb(255, 255, 255);
    cursor: pointer;
    outline: none;
    border: 1px solid yellow;
    background-color: transparent;
    text-transform: uppercase;
    transition: all 0.3s;

    &:hover {
        color: yellow;
        transform: rotate(5deg);
    }
    `

interface IProps {
    onClick: () => void;
    text: string;
    isDisabled?: boolean;
}

export const Button: React.FC<IProps> = ({ onClick, text, isDisabled }) => {
    return (
        <ButtonStyled disabled={isDisabled} onClick={onClick}>{text}</ButtonStyled>
    )
}
