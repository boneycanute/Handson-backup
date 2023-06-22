import React, { useEffect, useState } from 'react';
import { Avatar, Box, LinearProgress } from '@material-ui/core';

import NotificationIcon from '../images/notification-icon.svg';
import CourseStrip from '../images/courseStrip.svg';

import './courseCard.css';
import { isEmpty } from '../../../utils/index';
import Axios from 'axios';
import appConfig from '../../../appConfig';

function CourseCard({}) {
	const [teacherProfile, setTeacherProfile] = useState({});

	const formatDate = (classes, type) => {
		let nextClass = classes[0];

		if (type == 'date') {
			return format(new Date(nextClass.scheduledOn), `d LLLL yy`);
		} else {
			return format(new Date(nextClass.scheduledOn), 'hh:mm a');
		}
	};

	const getCardCourseData = () => {
		const url = `${appConfig.serverUrl}/etp/get-course-data?programName=etp-test-template_etp-college_2022_sem-1&category=beginner&dataNeeded=ALL`;
		Axios.get(url)
			.then((res) => {
				if (res?.data?.teacher) {
					setTeacherProfile(res.data.teacher);
				}
			})
			.catch((err) => {
				console.log(err, 'resssssss||err');
			});
	};
	useEffect(() => {
		getCardCourseData();
        getSemesterNotification();
	}, []);

	const getSemesterNotification = () => {
		const url = `${appConfig.serverUrl}/etp/get-semester-notifications?college=etp-test-college&batch=2022&semester=sem-1&degree=b-tech&dataNeeded=ALL`;
		console.log(url, 'urrrlll');

		Axios.get(url)
			.then((res) => {
				console.log(res, 'ressssssshjh');
			})
			.catch((err) => {
				console.log(err, 'ressssssshjh||err');
			});
	};

	return (
		<div className="CourseCard">
			<div className="CourseCard-header">
				{/*<div className="CourseCard-header-strip-data">SEMESTER - {course.semester.split('-')[1]}</div>*/}
				<img src={CourseStrip} className="CourseCard-header-strip"></img>
			</div>
			<div className="CourseCard_university">
				<div className="CourseCard_university-course">M.B.A - Finance</div>
				<div className="vertical_line"></div>
				<div className="CourseCard_university-university">Rishihood University</div>
			</div>
			<div className="CourseCard-content">
				<div className="CourseCard-body">
					<div className="CourseCard-body-progress">
						<div className="CourseCard-body-progress-course">{'Full stack mern'}</div>
					</div>
					<div className="CourseCard-body-teacher">
						<Avatar className="CourseCard-body-teacher-photo" src={teacherProfile.profileImg} />
						<div className="CourseCard-body-teacher-detail">
							<div className="CourseCard-body-teacher-name">{teacherProfile.name}</div>
							<div className="CourseCard-body-teacher-info">
								<div className="CourseCard-body-teacher-info_concept">42 Concepts</div>
								<div className="CourseCard-body-teacher-info_student">58 Students</div>
							</div>
						</div>
					</div>
					<div className="CourseCard-body_course-detail">
						<hr className="horizontal_line" />
						<div className="CourseCard-body_course-detail_avg-score">
							<div className="CourseCard-body_course-detail_text">Average class score</div>
							<div className="CourseCard-body_course-detail_value">20/40</div>
						</div>
						<hr className="vertical_line" />
						<div className="CourseCard-body_course-detail_percentile">
							<div className="CourseCard-body_course-detail_text">Average class score</div>
							<div className="CourseCard-body_course-detail_value">20/40</div>
						</div>
						<hr className="horizontal_line" />
						<div className="CourseCard-body_course-detail_unresolved">
							<div className="CourseCard-body_course-detail_text">Average class score</div>
							<div className="CourseCard-body_course-detail_value">20/40</div>
						</div>
						<hr className="vertical_line" />
						<div className="CourseCard-body_course-detail_doubt">
							<div className="CourseCard-body_course-detail_text">Average class score</div>
							<div className="CourseCard-body_course-detail_value">20/40</div>
						</div>
						<hr className="horizontal_line" />
					</div>
					{!true && (
						<div className="CourseCard-body-notification">
							{/*<Image src={notif} className="CourseCard-body-notification-icon" />*/}
							<div className="CourseCard-body-notification-span" onClick={() => {}}>
								View Notifications
							</div>
						</div>
					)}
				</div>
				<div className="CourseCard-footer">
					{true ? (
						<div className="CourseCard-footer-schedule">
							<div className="CourseCard-footer-schedule-label">Next Class Date/Time</div>
							<div className="CourseCard-footer-schedule-content">
								<div className="CourseCard-footer-schedule-date">22 sep 2022</div>
								<div className="CourseCard-footer-schedule-time">
									<span>06:30 PM</span>
								</div>
							</div>
						</div>
					) : (
						<div className="CourseCard-footer-no-schedule">
							<div className="">No Class Scheduled</div>
						</div>
					)}
					<div className="CourseCard-footer-course-btn-div">
						<button className="CourseCard-footer-course-btn" onClick={() => router.push('/panel/full-stack')}>
							View Course
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
