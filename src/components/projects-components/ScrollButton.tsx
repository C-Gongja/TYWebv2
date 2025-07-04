import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ScrollButtonProps {
	direction: "left" | "right";
	onClick: () => void;
}


const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => (
	<button
		className={`
      w-[70px] h-[100px] flex items-center justify-center absolute bottom-[200px]
      ${direction === 'left' ? 'left-[10px] xl:left-[50px]' : 'right-[10px] xl:right-[50px]'}
      text-[var(--text-main)] bg-white/20 rounded-full shadow-lg ring-1 ring-black/5
      transition-all duration-300
      xl:text-violet-300 xl:hover:bg-violet-400 xl:hover:text-white active:bg-violet-400
    `}
		onClick={onClick}
	>
		{direction === 'left' ? <IoIosArrowBack size={30} /> : <IoIosArrowForward size={30} />}
	</button>
);

export default ScrollButton;