import './Button.css';

const Button = ({ handleClick, title, className }) => {
  return (
    <button data-testid='searchBtn' className={className} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
