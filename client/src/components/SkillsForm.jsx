import { Plus, Sparkles, X } from 'lucide-react'
import React, { useState } from 'react'

function SkillsForm({ data, onChange, template }) {
    const [newSkill, setNewSkill] = useState("")
    const [categoryInputs, setCategoryInputs] = useState({
        Languages: "",
        Frameworks: "",
        Databases: "",
        Tools: "",
        Other: ""
    })

    // Check if we're using DeveloperClassic template
    const isDeveloperClassic = template === 'developer-classic'

    const addSkill = () => {
        if (newSkill.trim() && !data.includes(newSkill.trim())) {
            onChange([...data, newSkill.trim()])
            setNewSkill("")
        }
    }

    const addSkillToCategory = (category) => {
        const skill = categoryInputs[category].trim()
        if (skill && !data.includes(skill)) {
            onChange([...data, skill])
            setCategoryInputs(prev => ({ ...prev, [category]: "" }))
        }
    }

    const removeSkill = (indexToRemove) => {
        onChange(data.filter((_, index) => index !== indexToRemove))
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkill()
        }
    }

    const handleCategoryKeyPress = (e, category) => {
        if (e.key === "Enter") {
            e.preventDefault();
            addSkillToCategory(category)
        }
    }

    // Categorize skills for DeveloperClassic
    const getCategorizedSkills = () => {
        const categorized = {
            Languages: [],
            Frameworks: [],
            Databases: [],
            Tools: [],
            Other: []
        }

        const categoryKeywords = {
            Languages: ['c', 'c++', 'javascript', 'python', 'typescript', 'html', 'css', 'sql', 'java', 'ruby', 'go', 'rust', 'php', 'swift', 'kotlin', 'language'],
            Frameworks: ['react', 'next', 'node', 'express', 'tailwind', 'vue', 'angular', 'django', 'flask', 'spring', 'laravel', 'bootstrap', 'jquery'],
            Databases: ['mongodb', 'mysql', 'postgresql', 'redis', 'firebase', 'sqlite', 'oracle', 'dynamodb', 'mariadb'],
            Tools: ['github', 'git', 'vscode', 'postman', 'docker', 'aws', 'jenkins', 'kubernetes', 'figma', 'jira', 'webpack', 'babel']
        }

        data.forEach(skill => {
            let assigned = false
            for (const [category, keywords] of Object.entries(categoryKeywords)) {
                if (keywords.some(keyword => skill.toLowerCase().includes(keyword))) {
                    categorized[category].push(skill)
                    assigned = true
                    break
                }
            }
            if (!assigned) {
                categorized.Other.push(skill)
            }
        })

        return categorized
    }

    // RENDER FOR DEVELOPER CLASSIC - ALL CATEGORIES EDITABLE
    if (isDeveloperClassic) {
        const categorizedSkills = getCategorizedSkills()
        
        const categoryPlaceholders = {
            Languages: "e.g., JavaScript, Python, Java",
            Frameworks: "e.g., React, Node.js, Express",
            Databases: "e.g., MongoDB, PostgreSQL, MySQL",
            Tools: "e.g., Git, Docker, AWS",
            Other: "e.g., Leadership, Communication"
        }

        return (
            <div className='space-y-4'>
                <div>
                    <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>
                        Skills (Category-Based)
                    </h3>
                    <p className='text-sm text-gray-500'>
                        Add skills to each category - they will be organized in your resume
                    </p>
                </div>

                {/* All categories with individual inputs */}
                <div className='space-y-4'>
                    {['Languages', 'Frameworks', 'Databases', 'Tools', 'Other'].map(category => (
                        <div key={category} className='border border-gray-200 rounded-lg p-4 bg-white'>
                            <h4 className='font-semibold text-sm text-gray-900 mb-3'>{category}</h4>
                            
                            {/* Input for this category */}
                            <div className='flex gap-2 mb-3'>
                                <input 
                                    type="text" 
                                    placeholder={categoryPlaceholders[category]}
                                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                                    onChange={(e) => setCategoryInputs(prev => ({ ...prev, [category]: e.target.value }))}
                                    value={categoryInputs[category]} 
                                    onKeyDown={(e) => handleCategoryKeyPress(e, category)}
                                />
                                <button 
                                    onClick={() => addSkillToCategory(category)} 
                                    disabled={!categoryInputs[category].trim()} 
                                    className='flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
                                >
                                    <Plus className='size-4' />
                                    Add
                                </button>
                            </div>

                            {/* Display skills in this category */}
                            {categorizedSkills[category].length > 0 ? (
                                <div className='flex flex-wrap gap-2'>
                                    {categorizedSkills[category].map((skill) => {
                                        const globalIndex = data.indexOf(skill)
                                        return (
                                            <span 
                                                key={globalIndex} 
                                                className='flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                                            >
                                                {skill}
                                                <button 
                                                    onClick={() => removeSkill(globalIndex)} 
                                                    className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                                                >
                                                    <X className='w-3 h-3' />
                                                </button>
                                            </span>
                                        )
                                    })}
                                </div>
                            ) : (
                                <p className='text-xs text-gray-400 italic'>No {category.toLowerCase()} added yet</p>
                            )}
                        </div>
                    ))}
                </div>

                {data.length === 0 && (
                    <div className='text-center py-6 text-gray-500 border border-gray-200 rounded-lg bg-gray-50'>
                        <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                        <p>No skills added yet.</p>
                        <p className='text-sm'>Start adding skills to each category above.</p>
                    </div>
                )}

                <div className='bg-blue-50 p-3 rounded-lg'>
                    <p className='text-sm text-blue-800'>
                        <strong>Tip:</strong> Add 8-12 relevant skills across categories. Skills are automatically organized by type in the DeveloperClassic template.
                    </p>
                </div>
            </div>
        )
    }

    // DEFAULT RENDER FOR OTHER TEMPLATES
    return (
        <div className='space-y-4'>
            <div>
                <h3 className='flex items-center gap-2 text-lg font-semibold text-gray-900'>
                    Skills
                </h3>
                <p className='text-sm text-gray-500'>
                    Add your technical and soft skills
                </p>
            </div>

            <div className='flex gap-2'>
                <input 
                    type="text" 
                    placeholder="Enter a skill (e.g., JavaScript, Project Management)" 
                    className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
                    onChange={(e) => setNewSkill(e.target.value)}
                    value={newSkill} 
                    onKeyDown={handleKeyPress}
                />
                <button 
                    onClick={addSkill} 
                    disabled={!newSkill.trim()} 
                    className='flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors'
                >
                    <Plus className='size-4' />
                    Add
                </button>
            </div>

            {data.length > 0 ? (
                <div className='flex flex-wrap gap-2'>
                    {data.map((skill, index) => (
                        <span 
                            key={index} 
                            className='flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm'
                        >
                            {skill}
                            <button 
                                onClick={() => removeSkill(index)} 
                                className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
                            >
                                <X className='w-3 h-3' />
                            </button>
                        </span>
                    ))}
                </div>
            ) : (
                <div className='text-center py-6 text-gray-500'>
                    <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />
                    <p>No skills added yet.</p>
                    <p className='text-sm'>Add your technical and soft skills above.</p>
                </div>
            )}

            <div className='bg-blue-50 p-3 rounded-lg'>
                <p className='text-sm text-blue-800'>
                    <strong>Tip:</strong> Add 8-12 relevant skills. Include both technical skills (programming languages, tools) and soft skills (leadership, communication).
                </p>
            </div>
        </div>
    )
}

export default SkillsForm

