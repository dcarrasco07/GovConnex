import Button from '../components/Button/Button';

export default {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'Text or label of the button',
      control: { type: 'text' },
    },
    state: {
      description: 'State of the button',
      options: ['default', 'hover', 'active', 'disabled'],
      control: { type: 'select' },
    },
    variation: {
      description: 'Variation of the button',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      control: { type: 'select' },
    },
  },
};

export const Primary = {
  args: {
    text: 'Primary',
  },
};

export const Secondary = {
  args: {
    text: 'Secondary',
    variation: 'secondary',
  },
};

export const Success = {
  args: {
    text: 'Success',
    variation: 'success',
  },
};

export const Warning = {
  args: {
    text: 'Warning',
    variation: 'warning',
  },
};

export const Danger = {
  args: {
    text: 'Danger',
    variation: 'danger',
  },
};

export const Hover = {
  args: {
    text: 'Hover',
    state: 'hover',
  },
};

export const Active = {
  args: {
    text: 'Active',
    state: 'active',
  },
};

export const Disabled = {
  args: {
    text: 'Disabled',
    state: 'disabled',
  },
};
