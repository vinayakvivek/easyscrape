const Output = () => {
  const value = "{}";
  return (
    <div className="w-full h-full">
      <textarea
        className="w-full h-full p-4 focus:outline-none"
        disabled
        value={value}
      ></textarea>
    </div>
  );
};

export default Output;
