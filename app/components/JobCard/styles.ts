import styled from 'styled-components/native';
import {theme} from '@cuteapp/constant/theme';
import {lighten, darken} from 'polished';

interface TagsProps {
  color: string;
}

export const Container = styled.View`
  padding: 8px 15px;
  height: 180px;
  margin: 5px;
  background-color: ${theme.colors['oxford-blue']};
  border-radius: 10px;
`;

export const ContainerTags = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Tags = styled.Text<TagsProps>`
  background-color: ${props => lighten(0.135, props.color)};
  color: ${props => darken(0.4, props.color)};
  padding: 4px 6px;
  margin-right: 5px;
  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-top: 8px;
  margin-bottom: 5px;
  font-size: 18px;
  color: #fff;
  font-weight: bold;
`;

export const Description = styled.Text`
  color: #fff;
  flex-shrink: 1;
`;

export const Footer = styled.View`
  align-items: flex-end;
  margin-top: 20px;
  background-color: red;
`;

export const DateText = styled.Text`
  color: #fff;
`;
