import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button/Button';

const mockAlert = jest.fn();

beforeAll(() => {
    window.alert = mockAlert;
});

afterAll(() => {
    window.alert.mockRestore();
});

test('renders button', () => {
    render(<Button />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toBeInTheDocument();
});

test('sets class to primary when no variation is indicated', () => {
    render(<Button />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('primary');
});

test('sets class to primary when variation is primary', () => {
    render(<Button variation="primary" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('primary');
});

test('sets class to secondary when variation is secondary', () => {
    render(<Button variation="secondary" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('secondary');
});

test('sets class to success when variation is success', () => {
    render(<Button variation="success" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('success');
});

test('sets class to warning when variation is warning', () => {
    render(<Button variation="warning" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('warning');
});

test('sets class to danger when variation is danger', () => {
    render(<Button variation="danger" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('danger');
});

test('sets class to hover when state is hover', () => {
    render(<Button state="hover" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('hover');
});

test('sets class to active when state is active', () => {
    render(<Button state="active" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toHaveClass('active');
});

test('sets button to disabled when state is disabled', () => {
    render(<Button state="disabled" />);
    const myElement = screen.getByTestId('button');
    expect(myElement).toBeDisabled();
});

test('sets class to active when button is clicked', () => {
    const alertSpy = jest.spyOn(window, 'alert');
    render(<Button />);
    const myElement = screen.getByTestId('button');
    fireEvent.click(myElement);
    expect(alertSpy).toHaveBeenCalledTimes(1);
    expect(myElement).toHaveClass('active');
});