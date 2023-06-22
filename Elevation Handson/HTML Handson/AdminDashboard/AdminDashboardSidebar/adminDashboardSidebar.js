import React from 'react';

import './adminDashboardSidebar.css';

const AdminDashboardSidebar = () => {

	return (
		<div className='AdminDashboardSidebar'>
		    <div className="AdminDashboardSidebar__main">
			<div>
				<div className="AdminDashboardSidebar__main-link AdminDashboardSidebar__main-link-active" onClick={() => {}}>
					<div className="AdminDashboardSidebar__main-link-name">Courses</div>
				</div>
			
					<div className="AdminDashboardSidebar__main-sublinks">
						<div className="AdminDashboardSidebar__main-sublink">Syllabus</div>
						<div className="AdminDashboardSidebar__main-sublink">Weekly Target</div>
						<div className="AdminDashboardSidebar__main-sublink">Performance</div>
						<div className="AdminDashboardSidebar__main-sublink AdminDashboardSidebar__main-sublink-active">Doubts</div>
					</div>
			
			</div>
			<div>
				<div className="AdminDashboardSidebar__main-link">
					<div className="AdminDashboardSidebar__main-link-name">Classes</div>
				</div>
			</div>
			<div>
				<div className="AdminDashboardSidebar__main-link">
					<div className="AdminDashboardSidebar__main-link-name">Exam/Assignments</div>
				</div>
			</div>
			<div>
				<div className="AdminDashboardSidebar__main-link">
					<div className="AdminDashboardSidebar__main-link-name">Notice Board</div>
				</div>
			</div>
		</div>
		</div>
	);
};

export default AdminDashboardSidebar;
