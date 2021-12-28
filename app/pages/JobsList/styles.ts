import styled from 'styled-components/native';
import {theme} from '@cuteapp/constant/theme';

export const Container = styled.View``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 20px 5px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors['oxford-blue']};
`;
