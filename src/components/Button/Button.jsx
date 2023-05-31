import React from 'react';
import './button.css';

/**
 * Primary UI component for user interaction
 */
const Button = ({ state, variation, text }) => {
  const [_state, setState] = React.useState(state);

  React.useEffect(() => {
    setState(state);
  }, [state]);

  const handleMouseEnter = () => {
    if (_state !== 'active' && _state !== 'disabled') {
      setState('hover');
    }
  };

  const handleMouseLeave = () => {
    if (_state !== 'active' && _state !== 'disabled') {
      setState(state);
    }
  };

  const handleClick = () => {
    setState('active');
    alert('You have clicked me!')
  };

  return (
    <button
      data-testid="button"
      type="button"
      className={`${variation} ${_state}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      disabled={_state === 'disabled'}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  state: 'default',
  variation: 'primary',
  text: 'Button',
};

export default Button;