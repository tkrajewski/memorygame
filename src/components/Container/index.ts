import styled from 'styled-components';
import { motion } from 'framer-motion';

export default styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.whiteDefault};
`;
