import './Button.css';

const Button = ({ handleClick, title, className }) => {
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
