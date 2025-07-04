const commonInputStyles =
	"mt-1 block w-full p-2 border text-black text-lg border-gray-300 rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500";

const TextareaField = ({
	label,
	name,
	value,
	onChange,
}: {
	label: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => (
	<div>
		<label htmlFor={name} className="block text-xl font-medium text-[var(--text-main)]">
			{label}
		</label>
		<textarea
			id={name}
			name={name}
			rows={4}
			value={value || undefined}
			placeholder={`Enter your ${label}`}
			onChange={onChange}
			className={commonInputStyles}
			required />
	</div>
);

export default TextareaField;