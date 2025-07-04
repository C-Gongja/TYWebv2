import React from 'react';

interface ScrollIndicatorProps {
	itemsCount: number;
	activeIndex: number;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ itemsCount, activeIndex }) => (
	<div className="flex justify-center gap-2">
		{Array.from({ length: itemsCount }).map((_, index) => (
			<span
				key={index}
				className={`
          w-1 h-1 rounded-full transition-all duration-300
          ${index === activeIndex ? 'bg-custom-mint scale-125' : 'bg-gray-400'}
        `}
			/>
		))}
	</div>
);
export default ScrollIndicator;