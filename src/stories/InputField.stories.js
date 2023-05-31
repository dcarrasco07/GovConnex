import InputField from '../components/InputField/InputField';

export default {
  title: 'Example/InputField',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    state: {
      description: 'State of the Input Field',
      options: ['default', 'valid', 'error', 'disabled'],
      control: { type: 'select' },
    },
    type: {
      description: 'Type of the Input Field',
      options: ['text', 'number', 'email', 'password'],
      control: { type: 'select' },
    },
  },
};

export const Default = {
  args: {
    type: 'text',
    state: 'default',
  },
};

export const Valid = {
  args: {
    type: 'text',
    state: 'valid',
  },
};

export const Error = {
  args: {
    type: 'text',
    state: 'error',
  },
};

export const Disabled = {
  args: {
    type: 'text',
    state: 'disabled',
  },
};

export const Number = {
  args: {
    type: 'number'
  },
};

export const Email = {
  args: {
    type: 'email',
  },
};

export const Password = {
  args: {
    type: 'password',
  },
};
