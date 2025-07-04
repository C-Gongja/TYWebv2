const commonInputStyles =
	"mt-1 block w-full p-2 border text-black text-lg border-gray-300 rounded-md shadow-sm bg-gray-100 focus:ring-blue-500 focus:border-blue-500";

const InputField = ({
	label,
	type,
	name,
	value,
	onChange,
}: {
	label: string;
	type: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}) => (
	<div>
		<label htmlFor={name} className="block text-xl font-medium text-[var(--text-main)]">
			{label}
		</label>
		<input
			type={type}
			id={name}
			name={name}
			value={value || undefined}
			placeholder={`Enter your ${label.toLowerCase()}`}
			onChange={onChange}
			className={commonInputStyles} required />
	</div>
);

export default InputField;