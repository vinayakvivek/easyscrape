const URLInput = () => {
  return (
    <div className="flex h-10 w-full flex-row items-center overflow-hidden rounded-full bg-white">
      <p className="justify-center px-5 text-center font-bold">URL</p>
      <input
        type="text"
        placeholder="https://reactflow.dev/docs/api/nodes/node-resizer/"
        className="h-full border flex-1 px-4 py-2 focus:outline-none"
      />
    </div>
  );
};

export default URLInput;
