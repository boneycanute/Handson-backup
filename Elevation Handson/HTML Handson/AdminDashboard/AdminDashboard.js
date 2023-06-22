import React, { useState } from 'react';
import PanelHeader from '../PanelHeader/panelHeader';
import AdminDashboardSidebar from './AdminDashboardSidebar/adminDashboardSidebar';
import CourseFilter from './CourseFilter/courseFilter';

import './AdminDashboard.css';
import CourseCard from './courseCard/courseCard';

function AdminDashboard() {
	const [currentTab, setCurrentTab] = useState('ONGOING_COURSES');

	return (
		<div className="AdminDashboard-main">
			{/* <div className='AdminDashboard-main_header'>
         <PanelHeader/>
        </div> */}

			<div className="AdminDashboard-main_sidebar">
				<AdminDashboardSidebar />
			</div>
			<div className="AdminDashboard-main_middle">
				<div className="AdminDashboard-main_middle_tabs">
					<div
						className={`AdminDashboard-main_middle_tabs-ongoing--courses ${
							currentTab == 'ONGOING_COURSES' ? 'AdminDashboard-main_middle_tabs-selected' : ''
						}`}
						onClick={() => setCurrentTab('ONGOING_COURSES')}
					>
						Ongoing Courses
					</div>
					<div
						className={`AdminDashboard-main_middle_tabs-all--courses ${
							currentTab == 'ALL_COURSES' ? 'AdminDashboard-main_middle_tabs-selected' : ''
						}`}
						onClick={() => setCurrentTab('ALL_COURSES')}
					>
						All Courses
					</div>
				</div>
				<CourseFilter />
				<CourseCard/>
			</div>
		</div>
	);
}

export default AdminDashboard;
