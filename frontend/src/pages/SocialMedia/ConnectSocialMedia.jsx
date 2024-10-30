import React from "react";
import {
	FaCircle,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTwitter,
} from "react-icons/fa";
import { FaCircleCheck, FaCircleExclamation } from "react-icons/fa6";
import toast, {Toaster } from 'react-hot-toast'

const ConnectSocialMedia = () => {


	const socialMediaAccounts = [
		{
			name: "Facebook",
			title: "Connect Facebook",
			icon: FaFacebook,
		},
		{
			name: "Instagram",
			title: "Connect Instagram",
			icon: FaInstagram,
		},
		{
			name: "Twitter",
			title: "Connect Twitter",
			icon: FaTwitter,
		},
		{
			name: "LinkedIn",
			title: "Connect LinkedIn",
			icon: FaLinkedin,
		},




	];

	const handleConnectSocialMedia = async (e, platform) => {
		toast(`Ready to connect your ${platform} account? `)
		
	}

	return (
		<div className="my_container w-[100%] py-3 flex items-start justify-center border-l  h-[100%] overflow-hidden relative">

		<Toaster
			toastOptions={{
			className: '',
			style: {
				padding: '16px',
				color: '#713200',
				backgroundColor: '#FFFCCC',
				width: '760px',
				textAlign:'center'
			},
			}}

			containerStyle={{
				position: 'absolute',
				top: 10,
				left: 10,
			}}

		/>

			<div className="max-w-[100%] md:max-w-lg lg:max-w-2xl max-h-full flex flex-col gap-2 border rounded-[12px] shadow-lg px-10 pb-3 pt-1 mx-2 md:mx-6 overflow-auto">

				<h2 className="my_h4 mb-2 mt-2 pb-2 pt-2 border-b border-gray-100">
					Connect You Social Media Accounts
				</h2>

				{socialMediaAccounts.map((item, index) => (
					<div key={index} className="flex flex-row justify-between items-center my-1 cursor-pointer border rounded-lg p-2 border-gray-200" onClick={(e) => handleConnectSocialMedia(e, item.name)}>
						<div className="flex justify-start items-center gap-2">
							<span className="text-[12px]">
								<item.icon className="w-4 h-4" />
							</span>
							<span className="text-[13px] font-semibold">
								{item.title}
							</span>
						</div>

						<FaCircleExclamation className="w-4 h-4" />
					</div>
				))}


			</div>
		</div>
	);
};

export default ConnectSocialMedia;
