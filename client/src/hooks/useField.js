import { useState } from "react";

const useField = (type, name, initialValue = "") => {
	const [ value, setValue ] = useState(initialValue);

	const onChange = (e) => {
		setValue(e.target.value);
	}

	return {
		name,
		type,
		value,
		onChange,
		setValue
	}
}


module.exports = useField;