const Button = ({typeBtn="button", handleClick, children}) => {
  return (
          <button
          type={typeBtn}
          onClick={handleClick}>
          {children}
      </button>
    );
}

export default Button;