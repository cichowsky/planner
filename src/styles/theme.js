import { fontSize, fontWeight, color, variant } from './variables';

const theme = {
  textColor: 'hsl(0, 0%, 7%)',
  textMuted: 'hsl(208, 7%, 46%)',
  backgroundColor: 'hsl(0, 0%, 99%)',

  button: {
    color: 'hsl(0, 0%, 7%)',
    backgroundColor: 'hsl(0, 0%, 91%)',
  },

  buttonIcon: {
    color: 'hsl(0, 0%, 40%)',
    backgroundColor: 'transparent',
  },

  input: {
    backgroundColor: 'hsl(0, 0%, 96%)',
    borderColor: 'hsl(0, 0%, 70%)',
    checkedColor: variant.success,
  },

  navbar: {
    thickness: '4.8rem',
    backgroundColor: 'hsl(203, 98%, 50%)',
    iconColor: 'hsl(0, 0%, 100%)',
  },

  color,
  fontSize,
  fontWeight,
  variant,
};

export default theme;
