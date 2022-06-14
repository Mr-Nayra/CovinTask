const Button = (props) => {
  return (
    <div>
      <button
        value={props.id}
        onClick={props.onClick}
        className="py-1 border-2 rounded-lg border-gray-800 h-10 max-w-40 w-16 hover:text-white hover:bg-gray-800"
      >
        {props.id}
      </button>
    </div>
  );
};

export default Button;
