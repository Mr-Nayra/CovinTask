const Container = (props) => {
  return (
    <div className="w-full h-80 border-2 rounded-lg border-gray-800 flex items-center justify-center">
      {props.loading && (
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="loader"></div>
        </div>
      )}
      {props.data && !props.loading && (
        <div className="flex flex-col items-center">
            <img src={props.data.avatar} className="rounded-full h-40 w-40 object-cover"></img>
          <p className="text">
            Name = {props.data.first_name + " " + props.data.last_name}
          </p>
          <p className="text">
            Email = {props.data.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default Container;
