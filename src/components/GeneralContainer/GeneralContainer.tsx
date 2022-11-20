import './generalContainer.css';

interface GeneralContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const GeneralContainer = ({
  children,
  className: wrapperClass,
  ...rest
}: GeneralContainerProps) => {
  return (
    <div className={`general__container ${wrapperClass || ''}`} {...rest}>
      {children}
    </div>
  );
};
