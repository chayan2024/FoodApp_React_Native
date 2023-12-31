import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const BUTTON_WIDTH_PERCENTAGE = 0.8;
export const BUTTON_MAX_WIDTH_PERCENTAGE = 0.8; 
export const BUTTON_HEIGHT = 55;
export const BUTTON_BORDER_RADIUS = BUTTON_HEIGHT / 2;
export const BUTTON_VERTICAL_MARGIN_PERCENTAGE = 0.02;

export const BUTTON_WIDTH = SCREEN_WIDTH * BUTTON_WIDTH_PERCENTAGE;
export const BUTTON_MAX_WIDTH = SCREEN_WIDTH * BUTTON_MAX_WIDTH_PERCENTAGE;
export const BUTTON_VERTICAL_MARGIN = SCREEN_HEIGHT * BUTTON_VERTICAL_MARGIN_PERCENTAGE;
