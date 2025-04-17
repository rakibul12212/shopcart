// eslint-disable-next-line react/prop-types
const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full max-w-[1920px] px-5 md:px-10  mx-auto  ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
