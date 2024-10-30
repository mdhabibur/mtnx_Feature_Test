import React from "react";
import { FaTimes } from "react-icons/fa";

const GenerateScriptModal = ({
	isOpen,
	onClose,
	title,
	content,
	onCopy,
	loading,
}) => {
	if (!isOpen) return null;

    console.log("content: ", content)

	return (
		<div className="absolute top-20 flex items-center justify-center shadow-lg rounded-lg ">

			<div className="bg-gray-600 text-gray-200 shadow-lg rounded-lg p-5 max-w-4xl mx-auto overflow-y-auto">

				<div className="flex justify-between items-center gap-4 border-b-2 py-2 mb-8">
					<h2 className="text-xl font-semibold uppercase">{title}</h2>
					<button onClick={onClose}>
						<FaTimes className="text-gray-200 text-xl" />
					</button>
				</div>

				<div className="mt-4">
					{loading ? (
						<p>Generating Script...</p>
					) : (
						<>
							<pre className="whitespace-pre-wrap">{content}</pre>
							{content && (
								<button
									onClick={onCopy}
									className="motionx_btn bg-blue-500 mt-4 text-white"
								>
									Copy
								</button>
							)}
						</>
					)}
				</div>


			</div>
		</div>
	);
};

export default GenerateScriptModal;
