export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1700px] mx-auto my-[20px] px-2 ">
      {children}
    </div>
  );
};
