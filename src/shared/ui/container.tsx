export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1400px] mx-auto my-[20px] px-[15px] ">
      {children}
    </div>
  )
}
