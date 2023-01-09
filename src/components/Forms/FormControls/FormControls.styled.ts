import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const MessageWrapper = styled(Box)`
  position: absolute;
  bottom: -1rem;
  left: 0.1rem;
  font-size: 0.7rem;
  color: #cb1e1e;
  height: 1rem;
  overflow: hidden;

  &:before {
    display: inline;
    content: '⚠';
    margin: 7px;
  }
`;

export default MessageWrapper;
