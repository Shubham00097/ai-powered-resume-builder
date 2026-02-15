import { Check, Layout } from 'lucide-react'
import { useState } from 'react'
import ClassicTemplate from "../assets/templates/ClassicTemplate"
import ModernTemplate from "../assets/templates/ModernTemplate"
import MinimalTemplate from "../assets/templates/MinimalTemplate"
import MinimalImageTemplate from "../assets/templates/MinimalImageTemplate"
import DeveloperClassic from "../assets/templates/DeveloperClassic"

function TemplateSelector({ selectedTemplate, onChange }) {
    const [isOpen, setIsOpen] = useState(false)
    const templates = [
        {
            id: "classic",
            name: "Classic",
            component: ClassicTemplate,
            description: "Traditional and ATS-friendly layout",
        },
        {
            id: "modern",
            name: "Modern",
            component: ModernTemplate,
            description: "Clean design with modern typography",
        },
        {
            id: "minimal",
            name: "Minimal",
            component: MinimalTemplate,
            description: "Simple, elegant, and distraction-free",
        },
        {
            id: "minimal-image",
            name: "Minimal Image",
            component: MinimalImageTemplate,
            description: "Minimal layout with profile image",
        },
        {
            id: "developer-classic",
            name: "Developer Classic",
            component: DeveloperClassic,
            description: "Compact layout for technical resumes",
        },
    ]

    return (
        <div className='relative'>
            <button onClick={() => setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'>
                <Layout size={14} /> <span className='max-sm:hidden'>Template</span>
            </button>
            {isOpen && (
                <div className='absolute top-full w-80 mt-2 z-10 bg-white rounded-md border border-gray-200 shadow-lg'>
                    {/* Scrollable container */}
                    <div className='max-h-125 overflow-y-auto p-3 space-y-3 custom-scrollbar'>
                        {templates.map((template) => (
                            <div key={template.id} onClick={() => { onChange(template.id); setIsOpen(false) }} className={`relative p-3 border rounded-md cursor-pointer transition-all ${selectedTemplate === template.id ? "border-blue-400 bg-blue-100" : "border-gray-300 hover:border-gray-400 hover:bg-gray-100"}`}>
                                {selectedTemplate === template.id && (
                                    <div className='absolute top-2 right-2'>
                                        <div className='size-5 bg-blue-400 rounded-full flex items-center justify-center'>
                                            <Check className='w-3 h-3 text-white' />
                                        </div>
                                    </div>
                                )}
                                <div className='space-y-1'>
                                    <h4 className='font-medium text-gray-800'>{template.name}</h4>
                                    <div className='mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic'>{template.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }

                /* Firefox */
                .custom-scrollbar {
                    scrollbar-width: thin;
                    scrollbar-color: #cbd5e1 #f1f5f9;
                }
            `}</style>
        </div>
    )
}

export default TemplateSelector
