/**
 * Created by lenovo on 2017/8/5.
 */
import React from 'react';
import FooterLink from '../containers/FooterLink';

const Footer = () => {
	return <p>
		show:
		<FooterLink filter="SHOW_ALL">All</FooterLink>
		{", "}	
		<FooterLink filter="SHOW_ACTIVE">Active</FooterLink>
		{", "}	
		<FooterLink filter="SHOW_COMPLETED">Completed</FooterLink>
	</p>
};

export default Footer;