import { fontSize, fontWeight, color, variant } from './variables';

const theme = {
  textColor: 'hsl(0, 0%, 7%)',
  textMuted: 'hsl(208, 7%, 46%)',
  backgroundColor: 'hsl(0, 0%, 99%)',
  accentColor: 'hsl(183, 100%, 35%)',

  button: {
    color: 'hsl(0, 0%, 7%)',
    backgroundColor: 'hsl(0, 0%, 91%)',
  },

  buttonIcon: {
    color: 'hsl(0, 0%, 60%)',
    backgroundColor: 'transparent',
    hoverColor: 'hsl(0, 0%, 40%)',
  },

  input: {
    backgroundColor: 'hsl(0, 0%, 96%)',
    borderColor: 'hsl(0, 0%, 70%)',
    checkedColor: variant.success,
  },

  navbar: {
    thickness: '5.2rem',
    backgroundColor: 'hsl(0, 0%, 92%)',
    linkColor: 'hsl(0, 0%, 25%)',
  },

  shadow: '0 0.5em 1em -0.125em rgb(10 10 10 / 4%)',

  color,
  fontSize,
  fontWeight,
  variant,
};

export default theme;
