const Button = (props) => {
  return (
    <div>
      <button
        value={props.id}
        onClick={props.onClick}
        className="py-2 px-4 border-2 rounded-lg border-gray-800 h-10 w-40 hover:text-white hover:bg-gray-800"
      >
        {props.id}
      </button>
    </div>
  );
};

export default Button;
