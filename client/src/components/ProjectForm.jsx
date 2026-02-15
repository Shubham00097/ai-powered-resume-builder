import { Plus, Trash2, Sparkles } from "lucide-react";
import { useState } from "react";
import api from "../configs/api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ProjectForm = ({ data, onChange }) => {
  const { token } = useSelector((state) => state.auth);
  const [projects, setProjects] = useState(data || []);
  const [enhancingIndex, setEnhancingIndex] = useState(null);

  const addProject = () => {
    const newProject = {
      name: "",
      type: "",
      description: "",
    };
    const updated = [...projects, newProject];
    setProjects(updated);
    onChange(updated);
  };

  const removeProject = (index) => {
    const updated = projects.filter((_, i) => i !== index);
    setProjects(updated);
    onChange(updated);
  };

  const updateProject = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
    onChange(updated);
  };

  const enhanceDescription = async (index) => {
    const description = projects[index].description;
    
    if (!description || description.trim() === "") {
      toast.error("Please write a description first");
      return;
    }

    setEnhancingIndex(index);

    try {
      const { data } = await api.post(
        "/api/ai/enhanced-project-desc",
        { userContent: description },
        { headers: { Authorization: token } }
      );

      updateProject(index, "description", data.enhancedContent);
      toast.success("Description enhanced!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to enhance");
    } finally {
      setEnhancingIndex(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
        <button
          type="button"
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
        >
          <Plus className="size-4" /> Add Project
        </button>
      </div>

      {projects.length === 0 ? (
        <p className="text-sm text-gray-500 text-center py-8">
          No projects added yet. Click "Add Project" to get started.
        </p>
      ) : (
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg space-y-3 bg-gray-50"
            >
              <div className="flex justify-between items-start">
                <h4 className="font-medium text-gray-700">
                  Project {index + 1}
                </h4>
                <button
                  type="button"
                  onClick={() => removeProject(index)}
                  className="text-red-600 hover:bg-red-50 p-1 rounded transition-colors"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>

              <input
                type="text"
                value={project.name}
                onChange={(e) => updateProject(index, "name", e.target.value)}
                placeholder="Project Name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <input
                type="text"
                value={project.type}
                onChange={(e) => updateProject(index, "type", e.target.value)}
                placeholder="Project Type (e.g., Web App, Mobile App)"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <div className="relative">
                <textarea
                  value={project.description}
                  onChange={(e) =>
                    updateProject(index, "description", e.target.value)
                  }
                  placeholder="Describe the project, technologies used, and your role..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={4}
                />
                <button
                  type="button"
                  onClick={() => enhanceDescription(index)}
                  disabled={enhancingIndex === index}
                  className="absolute bottom-2 right-2 flex items-center gap-1 px-2 py-1 text-xs bg-purple-50 text-purple-600 rounded hover:bg-purple-100 transition-colors disabled:opacity-50"
                >
                  <Sparkles className="size-3" />
                  {enhancingIndex === index ? "Enhancing..." : "Enhance with AI"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectForm;