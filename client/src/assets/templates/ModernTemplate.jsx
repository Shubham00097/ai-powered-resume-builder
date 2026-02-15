import { Mail, Phone, MapPin, Linkedin, Globe, Github } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
	const formatDate = (dateStr) => {
		if (!dateStr) return "";
		const [year, month] = dateStr.split("-");
		return new Date(year, month - 1).toLocaleDateString("en-US", {
			year: "numeric",
			month: "short"
		});
	};

	return (
		<div className="max-w-4xl mx-auto bg-white text-gray-800">
			{/* Header */}
			<header className="p-5 text-white" style={{ backgroundColor: accentColor }}>
				<h1 className="text-3xl font-light mb-1.5">
					{data.personal_info?.full_name || "Your Name"}
				</h1>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm ">
					{data.personal_info?.email && (
						<div className="flex items-center gap-2">
							<Mail className="size-4" />
							<span>{data.personal_info.email}</span>
						</div>
					)}
					{data.personal_info?.phone && (
						<div className="flex items-center gap-2">
							<Phone className="size-4" />
							<span>{data.personal_info.phone}</span>
						</div>
					)}
					{data.personal_info?.location && (
						<div className="flex items-center gap-2">
							<MapPin className="size-4" />
							<span>{data.personal_info.location}</span>
						</div>
					)}
					{data.personal_info?.linkedin && (
						<a target="_blank" href={data.personal_info?.linkedin} className="flex items-center gap-2">
							<Linkedin className="size-4" />
							<span className="break-all text-xs">{data.personal_info.linkedin.split("https://www.")[1] ? data.personal_info.linkedin.split("https://www.")[1] : data.personal_info.linkedin}</span>
						</a>
					)}
					{data.personal_info?.github && (
						<a target="_blank" href={data.personal_info?.github} className="flex items-center gap-2">
							<Github className="size-4" />
							<span className="break-all text-xs">{data.personal_info.github.split("https://www.")[1] ? data.personal_info.github.split("https://www.")[1] : data.personal_info.github}</span>
						</a>
					)}
					{data.personal_info?.website && (
						<a target="_blank" href={data.personal_info?.website} className="flex items-center gap-2">
							<Globe className="size-4" />
							<span className="break-all text-xs">{data.personal_info.website.split("https://")[1] ? data.personal_info.website.split("https://")[1] : data.personal_info.website}</span>
						</a>
					)}
				</div>
			</header>

			<div className="p-5">
				{/* Professional Summary */}
				{data.professional_summary && (
					<section className="mb-4">
						<h2 className="text-lg font-light mb-2 pb-1 border-b border-gray-200">
							Professional Summary
						</h2>
						<p className="text-gray-700 leading-normal text-sm">{data.professional_summary}</p>
					</section>
				)}

				{/* Experience */}
				{data.experience && data.experience.length > 0 && (
					<section className="mb-4">
						<h2 className="text-lg font-light mb-2.5 pb-1 border-b border-gray-200">
							Experience
						</h2>

						<div className="space-y-3">
							{data.experience.map((exp, index) => (
								<div key={index} className="relative pl-4 border-l border-gray-200">

									<div className="flex justify-between items-start mb-1">
										<div>
											<h3 className="text-base font-medium text-gray-900">{exp.position}</h3>
											<p className="font-medium text-xs" style={{ color: accentColor }}>{exp.company}</p>
										</div>
										<div className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded whitespace-nowrap ml-2">
											{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
										</div>
									</div>
									{exp.description && (
										<div className="text-gray-700 leading-normal text-xs mt-1.5 whitespace-pre-line">
											{exp.description}
										</div>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				{/* Projects */}
				{data.project && data.project.length > 0 && (
					<section className="mb-4">
						<h2 className="text-lg font-light mb-2.5 pb-1 border-b border-gray-200">
							Projects
						</h2>

						<div className="space-y-2.5">
							{data.project.map((p, index) => (
								<div key={index} className="relative pl-4 border-l border-gray-200" style={{borderLeftColor: accentColor}}>


									<div className="flex justify-between items-start">
										<div>
											<h3 className="text-sm font-medium text-gray-900">{p.name}</h3>
										</div>
									</div>
									{p.description && (
										<div className="text-gray-700 leading-normal text-xs mt-1">
											{p.description}
										</div>
									)}
								</div>
							))}
						</div>
					</section>
				)}

				{/* Achievements - NEW SECTION */}
				{data.achievements && data.achievements.length > 0 && (
					<section className="mb-4">
						<h2 className="text-lg font-light mb-2.5 pb-1 border-b border-gray-200">
							Achievements
						</h2>

						<ul className="space-y-1.5 pl-4">
							{data.achievements.map((achievement, index) => (
								<li key={index} className="text-gray-700 text-xs flex gap-2">
									<span style={{ color: accentColor }}>•</span>
									<span>{achievement}</span>
								</li>
							))}
						</ul>
					</section>
				)}

				<div className="grid sm:grid-cols-2 gap-5">
					{/* Education */}
					{data.education && data.education.length > 0 && (
						<section>
							<h2 className="text-lg font-light mb-2 pb-1 border-b border-gray-200">
								Education
							</h2>

							<div className="space-y-2.5">
								{data.education.map((edu, index) => (
									<div key={index}>
										<h3 className="font-semibold text-gray-900 text-xs">
											{edu.degree} {edu.field && `in ${edu.field}`}
										</h3>
										<p className="text-xs" style={{ color: accentColor }}>{edu.institution}</p>
										<div className="flex justify-between items-center text-xs text-gray-600">
											<span>{formatDate(edu.graduation_date)}</span>
											{edu.gpa && <span>GPA: {edu.gpa}</span>}
										</div>
									</div>
								))}
							</div>
						</section>
					)}

					{/* Skills */}
					{data.skills && data.skills.length > 0 && (
						<section>
							<h2 className="text-lg font-light mb-2 pb-1 border-b border-gray-200">
								Skills
							</h2>

							<div className="flex flex-wrap gap-1.5">
								{data.skills.map((skill, index) => (
									<span
										key={index}
										className="px-2 py-0.5 text-xs text-white rounded-full"
										style={{ backgroundColor: accentColor }}
									>
										{skill}
									</span>
								))}
							</div>
						</section>
					)}
				</div>
			</div>
		</div>
	);
}

export default ModernTemplate;