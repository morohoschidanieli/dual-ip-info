interface IPProps {
  children: string;
}

const IP = ({ children }: IPProps) => {
  return (
    <div className="flex relative flex-row justify-center bg-purple-50 p-4 m-2 hover:text-white text-purple-800 text-base rounded-md border hover:bg-purple-800">
      {children}
    </div>
  );
};

export default IP;
