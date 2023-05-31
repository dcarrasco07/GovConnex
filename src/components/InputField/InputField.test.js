import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from './InputField';

test('renders input field', () => {
    render(<InputField />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement).toBeInTheDocument();
});

test('checks if class is set to focus when state is changed', () => {
    render(<InputField state="focus" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement).toHaveClass('focus');
});

test('checks if class is set to valid when state is changed', () => {
    render(<InputField state="valid" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement).toHaveClass('valid');
});

test('checks if class is set to error when state is changed', () => {
    render(<InputField state="error" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement).toHaveClass('error');
});

test('checks if input disabled when state is changed to disabled', () => {
    render(<InputField state="disabled" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement).toBeDisabled();
});

test('checks if type is set to text', () => {
    render(<InputField type="text" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement.type).toBe('text');
});

test('checks if type is set to number', () => {
    render(<InputField type="number" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement.type).toBe('number');
});

test('checks if type is set to email', () => {
    render(<InputField type="email" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement.type).toBe('email');
});

test('checks if type is set to password', () => {
    render(<InputField type="password" />);
    const myElement = screen.getByTestId('inputField');
    expect(myElement.type).toBe('password');
});

test('set error state to email when invalid value', () => {
    const { rerender } = render(<InputField type="email" />);
    const myElement = screen.getByTestId('inputField');
    fireEvent.change(myElement, { target: { value: 'invalidvalue' } });

    rerender(<InputField type="email" value={myElement.value} />);

    expect(myElement).toHaveClass('error');
});

test('set valid state to email when valid value', () => {
    const { rerender } = render(<InputField type="email" />);
    const myElement = screen.getByTestId('inputField');
    fireEvent.change(myElement, { target: { value: 'valid@gmail.com' } });

    rerender(<InputField type="email" value={myElement.value} />);

    expect(myElement).toHaveClass('valid');
});