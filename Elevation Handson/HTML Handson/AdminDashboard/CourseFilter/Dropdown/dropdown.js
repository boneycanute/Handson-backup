import React, { useState } from 'react';
import './dropdown.css';

function Dropdown({ options, dropDownTitle, onSelectOption }) {
	const [isActive, setIsActive] = useState(false);
	const [selected, setIsSelected] = useState(dropDownTitle);
	function handleBlur(e) {
		console.log(e);
	}
	return (
		<div className="Dropdown">
			<div
				onClick={(e) => {
					setIsActive(!isActive);
				}}
				className="Dropdown-btn"
			>
				{selected}
			</div>
			<div className="Dropdown-content" style={{ display: isActive ? 'block' : 'none' }}>
				{options &&
					options.map((option) => {
						return (
							<div
								onClick={(e) => {
                                    onSelectOption(option)
									setIsSelected(e.target.textContent);
									setIsActive(!isActive);
								}}
								className="item"
							>
								{option.name}
							</div>
						);
					})}
			</div>
		</div>
	);
}

export default Dropdown;
