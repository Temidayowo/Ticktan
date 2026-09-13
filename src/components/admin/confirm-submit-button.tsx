"use client";

type ConfirmSubmitButtonProps = {
  confirmMessage: string;
  className?: string;
  children: React.ReactNode;
};

const ConfirmSubmitButton = ({
  confirmMessage,
  className,
  children,
}: ConfirmSubmitButtonProps) => {
  return (
    <button
      type="submit"
      className={className}
      onClick={(event) => {
        if (!window.confirm(confirmMessage)) {
          event.preventDefault();
        }
      }}
    >
      {children}
    </button>
  );
};

export default ConfirmSubmitButton;
