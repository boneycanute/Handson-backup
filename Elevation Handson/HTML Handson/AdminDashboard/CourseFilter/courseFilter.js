import React, { useState } from 'react';
import './courseFilter.css';
import Dropdown from './Dropdown/dropdown';

function CourseFilter() {
	const [options, setOption] = useState([{ name: 'IIT DELHI' }, { name: 'Delhi Technological University' }, { name: 'Inderprashth university' }]);
	const [selectedCourse, setSelectedCourse] = useState('');
	const [selectedDegree, setSelectedDegree] = useState('');
	const [selectedCollege, setSelectedCollege] = useState('');
	const [selectedBatch, setSelectedBatch] = useState('');
	const [selectedSemester, setSelectedSemester] = useState('');
	const [selectedTeacher, setSelectedTeacher] = useState('');

	function handleBlur(e) {
		console.log(e);
	}

	const onSelectDegree = (value) => {
		console.log(value, 'valueeeeee');
		setSelectedDegree(value);
	};

	const onSelectCollege = (value) => {
		console.log(value, 'valueeeeee');
		setSelectedCollege(value);
	};

	const onSelectBatch = (value) => {
		console.log(value, 'valueeeeee');
		setSelectedBatch(value);
	};

	const onSelectSemester = (value) => {
		console.log(value, 'valueeeeee');
		setSelectedSemester(value);
	};

	const onSelectCourse = (value) => {
		console.log(value, 'valueeeeee');
		setSelectedCourse(value);
	};

	const onSelectTeacher = (value) => {
		console.log(value, 'valueeeeee');
		setSelectedTeacher(value);
	};

	return (
		<div className="courseFilter">
			<Dropdown onSelectOption={onSelectDegree} dropDownTitle="Degree" options={options} />
			<Dropdown onSelectOption={onSelectCollege} dropDownTitle={'College'} options={options} />
			<Dropdown onSelectOption={onSelectBatch} dropDownTitle={'Batch'} options={options} />
			<Dropdown onSelectOption={onSelectSemester} dropDownTitle={'Semester'} options={options} />
			<Dropdown onSelectOption={onSelectCourse} dropDownTitle={'Course'} options={options} />
			<Dropdown onSelectOption={onSelectTeacher} dropDownTitle={'Teacher'} options={options} />
            <div className='courseFilter_search-icon'></div>
		</div>
	);
}

export default CourseFilter;
