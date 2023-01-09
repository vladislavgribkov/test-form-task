import { styled } from '@mui/material/styles';

const MainFormWrapper = styled('form')`
  height: max-content;
  padding: 20px;
  width: 400px;
  border: 1px solid blue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export default MainFormWrapper;
