import { Mail, Phone, MapPin, Globe, Linkedin, Github } from "lucide-react";

const DeveloperClassic = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short"
    });
  };

  return (
    <>
      <div className="w-[210mm] min-h-[297mm] bg-white p-12 mx-auto shadow-lg print:shadow-none print:p-10" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* Header - CENTERED */}
        <div className="mb-3 print:mb-2 text-center">
          <h1 className="text-2xl font-bold mb-2 print:text-xl print:mb-1.5" style={{ color: accentColor || '#2563eb' }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>

          <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-gray-700 text-xs print:gap-x-2 print:gap-y-0.5 print:text-[10px]">
            {data.personal_info?.phone && (
              <div className="flex items-center gap-1">
                <Phone size={12} className="print:w-2.5 print:h-2.5" />
                <span>{data.personal_info.phone}</span>
              </div>
            )}
            {data.personal_info?.email && (
              <div className="flex items-center gap-1">
                <Mail size={12} className="print:w-2.5 print:h-2.5" />
                <span>{data.personal_info.email}</span>
              </div>
            )}
            {data.personal_info?.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin size={12} className="print:w-2.5 print:h-2.5" />
                <span>{data.personal_info.linkedin}</span>
              </div>
            )}
            {data.personal_info?.github && (
              <div className="flex items-center gap-1">
                <Github size={12} className="print:w-2.5 print:h-2.5" />
                <span>{data.personal_info.github}</span>
              </div>
            )}
            {data.personal_info?.website && (
              <div className="flex items-center gap-1">
                <Globe size={12} className="print:w-2.5 print:h-2.5" />
                <span>{data.personal_info.website}</span>
              </div>
            )}
          </div>
        </div>

        {/* Professional Summary */}
        {data.professional_summary && (
          <div className="mb-6 print:mb-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold mb-2.5 pb-1.5 border-b-2 print:text-lg print:mb-2" style={{ borderColor: accentColor || '#2563eb', color: accentColor || '#2563eb' }}>
              Professional Summary
            </h2>
            <p className="text-gray-800 leading-normal text-sm print:text-xs print:leading-relaxed">
              {data.professional_summary}
            </p>
          </div>
        )}

        {/* Education */}
        {data.education && data.education.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-xl font-bold mb-2.5 pb-1.5 border-b-2 print:text-lg print:mb-2" style={{ borderColor: accentColor || '#2563eb', color: accentColor || '#2563eb' }}>
              Education
            </h2>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-3 print:mb-2 print:break-inside-avoid">
                <div className="flex justify-between items-start mb-1 print:mb-0.5">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 print:text-sm">
                      {edu.degree}{edu.field && `, ${edu.field}`}
                    </h3>
                    <p className="text-gray-700 text-sm print:text-xs">{edu.institution}</p>
                  </div>
                  <span className="text-gray-600 text-xs whitespace-nowrap ml-4 print:text-xs">
                    {formatDate(edu.graduation_date)}
                  </span>
                </div>
                {edu.gpa && (
                  <p className="text-gray-700 text-xs print:text-xs">Grade: {edu.gpa}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Experience */}
        {data.experience && data.experience.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-xl font-bold mb-2.5 pb-1.5 border-b-2 print:text-lg print:mb-2" style={{ borderColor: accentColor || '#2563eb', color: accentColor || '#2563eb' }}>
              Experience
            </h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4 print:mb-3 print:break-inside-avoid">
                <div className="flex justify-between items-start mb-2 print:mb-1">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 print:text-sm">{exp.position}</h3>
                    <p className="text-gray-700 font-medium text-sm print:text-xs">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 text-xs whitespace-nowrap ml-4 print:text-xs">
                    {formatDate(exp.start_date)} – {exp.is_current ? "Present" : formatDate(exp.end_date)}
                  </span>
                </div>
                {exp.description && (
                  <ul className="space-y-1 text-gray-700 text-sm print:space-y-0.5 print:text-xs">
                    {exp.description.split('\n').filter(line => line.trim()).map((line, i) => (
                      <li key={i} className="flex gap-2 print:gap-1.5">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span className="flex-1">{line.trim().replace(/^[•\-]\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills */}
        {data.skills && data.skills.length > 0 && (
          <div className="mb-6 print:mb-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold mb-2.5 pb-1.5 border-b-2 print:text-lg print:mb-2" style={{ borderColor: accentColor || '#2563eb', color: accentColor || '#2563eb' }}>
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-sm print:space-y-1 print:text-xs">
              {(() => {
                const languages = data.skills.filter(s =>
                  ['c', 'c++', 'java', 'javascript', 'python', 'typescript', 'html', 'css', 'sql', 'go', 'rust', 'php', 'ruby', 'swift', 'kotlin', 'dart', 'scala', 'r', 'matlab'].some(lang => s.toLowerCase().includes(lang))
                );

                const frameworks = data.skills.filter(s =>
                  ['react', 'next', 'node', 'express', 'tailwind', 'vue', 'angular', 'django', 'flask', 'spring', 'laravel', '.net', 'redux', 'jquery', 'bootstrap', 'fastapi', 'nest'].some(fw => s.toLowerCase().includes(fw))
                );

                const databases = data.skills.filter(s =>
                  ['mongodb', 'mysql', 'postgresql', 'redis', 'firebase', 'sqlite', 'dynamodb', 'cassandra', 'oracle', 'mariadb', 'elasticsearch'].some(db => s.toLowerCase().includes(db))
                );

                const tools = data.skills.filter(s =>
                  ['github', 'git', 'vscode', 'postman', 'docker', 'aws', 'kubernetes', 'jenkins', 'jira', 'figma', 'webpack', 'linux', 'azure', 'gcp', 'gitlab', 'terraform', 'ansible'].some(tool => s.toLowerCase().includes(tool))
                );

                const allCategorized = [...languages, ...frameworks, ...databases, ...tools];
                const other = data.skills.filter(s => !allCategorized.includes(s));

                return (
                  <>
                    {languages.length > 0 && (
                      <div>
                        <span className="font-semibold text-gray-900">Languages: </span>
                        <span className="text-gray-700">{languages.join(', ')}</span>
                      </div>
                    )}
                    {frameworks.length > 0 && (
                      <div>
                        <span className="font-semibold text-gray-900">Frameworks: </span>
                        <span className="text-gray-700">{frameworks.join(', ')}</span>
                      </div>
                    )}
                    {databases.length > 0 && (
                      <div>
                        <span className="font-semibold text-gray-900">Databases: </span>
                        <span className="text-gray-700">{databases.join(', ')}</span>
                      </div>
                    )}
                    {tools.length > 0 && (
                      <div>
                        <span className="font-semibold text-gray-900">Tools: </span>
                        <span className="text-gray-700">{tools.join(', ')}</span>
                      </div>
                    )}
                    {other.length > 0 && (
                      <div>
                        <span className="font-semibold text-gray-900">Other: </span>
                        <span className="text-gray-700">{other.join(', ')}</span>
                      </div>
                    )}
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* Projects */}
        {data.project && data.project.length > 0 && (
          <div className="mb-6 print:mb-4">
            <h2 className="text-xl font-bold mb-2.5 pb-1.5 border-b-2 print:text-lg print:mb-2" style={{ borderColor: accentColor || '#2563eb', color: accentColor || '#2563eb' }}>
              Projects
            </h2>
            {data.project.map((proj, index) => (
              <div key={index} className="mb-4 print:mb-3 print:break-inside-avoid">
                <div className="flex justify-between items-start mb-1 print:mb-0.5">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-gray-900 print:text-sm">
                      {proj.name}
                      {proj.link && (
                        <a href={proj.link} className="ml-2 text-xs font-normal hover:underline print:text-xs" style={{ color: accentColor || '#2563eb' }}>
                          [Link]
                        </a>
                      )}
                    </h3>
                  </div>
                  {proj.date && (
                    <span className="text-gray-600 text-xs whitespace-nowrap ml-4 print:text-xs">
                      {formatDate(proj.date)}
                    </span>
                  )}
                </div>
                {proj.description && (
                  <ul className="space-y-1 text-gray-700 text-sm print:space-y-0.5 print:text-xs">
                    {proj.description.split('\n').filter(line => line.trim()).map((line, i) => (
                      <li key={i} className="flex gap-2 print:gap-1.5">
                        <span className="text-gray-400 mt-0.5">•</span>
                        <span className="flex-1">{line.trim().replace(/^[•\-]\s*/, '')}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Achievements */}
        {data.achievements && data.achievements.length > 0 && (
          <div className="mb-6 print:mb-4 print:break-inside-avoid">
            <h2 className="text-xl font-bold mb-2.5 pb-1.5 border-b-2 print:text-lg print:mb-2" style={{ borderColor: accentColor || '#2563eb', color: accentColor || '#2563eb' }}>
              Achievements
            </h2>
            <ul className="space-y-1 text-gray-700 text-sm print:space-y-0.5 print:text-xs">
              {data.achievements.map((achievement, index) => (
                <li key={index} className="flex gap-2 print:gap-1.5">
                  <span className="text-gray-400 mt-0.5">•</span>
                  <span className="flex-1">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <style jsx>{`
        @media print {
          @page {
            size: A4;
            margin: 0;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
        }
      `}</style>
    </>
  );
};

export default DeveloperClassic;