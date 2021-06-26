import { Layout } from '../components/Layout/Layout';
import { MeetingsTable } from '../components/MeetingsTable/MeetingsTable';

const meetings = [
	{
		title: 'Management Meeting #48',
		date: '17/07/2021',
		agenda: {
			link:
				'https://docs.google.com/document/d/1hUdsDM4X80AOBdx9XqedbLup7KxbHzeF_0bHor7hCl8/edit?usp=sharing',
			status: 'Upcoming Meeting Agenda',
		},
	},
	{
		title: 'Management Meeting #47',
		date: '15/05/2021',
		agenda: {
			link:
				'https://drive.google.com/file/d/1XSIbdVvgxOZ3qFLrCefGSo-q9fBk140p/view?usp=sharing',
			status: 'Draft Meeting Minutes',
		},
	},
	{
		title: 'Management Meeting #46',
		date: '20/03/2021',
		agenda: {
			link:
				'https://drive.google.com/file/d/11By-LdCcJzfB2lBdsTS5LkI3LB1qGZRa/view?usp=sharing',
			status: 'Approved Meeting Minutes',
		},
	},
	{
		title: 'Management Meeting #45',
		date: '16/01/2021',
		agenda: {
			link:
				'https://drive.google.com/file/d/16XS8uwDe8vzrIm1QLNbzzi1dSlgWjOrC/view?usp=sharing',
			status: 'Approved Meeting Minutes',
		},
	},
	{
		title: 'Management Meeting #44',
		date: '19/09/2020',
		agenda: {
			link:
				'https://drive.google.com/file/d/1IsSnxCDIEimPcIkG9sy4wZ4IgfLbIRQv/view?usp=sharing',
			status: 'Approved Meeting Minutes',
		},
	},
	{
		title: 'AGM 2020',
		date: '19/09/2020',
		agenda: {
			link:
				'https://docs.google.com/document/d/1VrbFGzFAyuiMxCVGbi91y7CAcA7eATVqrW8CoxK0Y_c/edit?usp=sharing',
			status: 'Draft Meeting Minutes',
		},
	},
	{
		title: 'Management Meeting #43',
		date: '20/06/2020',
		agenda: {
			link:
				'https://docs.google.com/document/d/1PdrTKTiAtJznVmfw9L679jlhCB9_qxT2UpQz-kwGOs8/edit?usp=sharing',
			status: 'Approved Meeting Minutes',
		},
	},
	{
		title: 'Management Meeting #42',
		date: '14/03/2020',
		agenda: {
			link:
				'https://drive.google.com/file/d/1Fy1YeuaFP5zQmW4weV2CWrMViCaWTJi0/view?usp=sharing',
			status: 'Approved Meeting Minutes',
		},
	},
	{
		title: 'Management Meeting #41',
		date: '18/01/2020',
		agenda: {
			link:
				'https://drive.google.com/file/d/1WvEtg3kVWmg2PKPxBzuGWZ_6lPicsbNR/view?usp=sharing',
			status: 'Approved Meeting Minutes',
		},
	},
];

export default function Meetings() {
	return (
		<Layout>
			<h1>Meetings</h1>
			<MeetingsTable meetings={meetings} />
		</Layout>
	);
}
