interface CloseButtonProps {
  width: string;
  height: string;
  onClick: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({
  width,
  height,
  onClick,
}) => {
  return (
    <button onClick={onClick} className="p-2">
      <svg
        width={`${width}.000000`}
        height={`${height}.000000`}
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          id="Vector"
          d="M14 1.41016L12.5898 0L7 5.58984L1.41016 0L0 1.41016L5.58984 7L0 12.5898L1.41016 14L7 8.41016L12.5898 14L14 12.5898L8.41016 7L14 1.41016Z"
          fill="#202020"
          fillOpacity="1.000000"
          fillRule="nonzero"
        />
      </svg>
    </button>
  );
};
export default CloseButton;
