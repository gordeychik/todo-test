import styled from 'styled-components';

const InputStyled = styled.input`
    width: 300px;
    font-size: 16px;
    line-height: 23px;
    padding: 10px 20px;
    color: rgb(82, 82, 82);
    border: none;
    background-color: #fff;
    border-radius: 4px;
    `

interface IProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
    className?: string;
}

export const Input: React.FC<IProps> = ({ onChange, value }) => {
    return (
        <InputStyled type="text" placeholder="New task..." value={value} onChange={onChange} />
    )
}
