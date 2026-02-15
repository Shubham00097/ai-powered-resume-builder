import { Plus, Trash2, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import api from "../configs/api";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const AchievementsForm = ({ data, onChange }) => {
  const { token } = useSelector((state) => state.auth);
  const [achievements, setAchievements] = useState(data || []);
  const [enhancingIndex, setEnhancingIndex] = useState(null);

  useEffect(() => {
    setAchievements(data || []);
  }, [data]);

  const addAchievement = () => {
    const updated = [...achievements, ""];
    setAchievements(updated);
    onChange(updated);
  };

  const removeAchievement = (index) => {
    const updated = achievements.filter((_, i) => i !== index);
    setAchievements(updated);
    onChange(updated);
  };

  const updateAchievement = (index, value) => {
    const updated = [...achievements];
    updated[index] = value;
    setAchievements(updated);
    onChange(updated);
  };

  const enhanceAchievement = async (index) => {
    const achievement = achievements[index];
    
    if (!achievement || achievement.trim() === "") {
      toast.error("Please write an achievement first");
      return;
    }

    setEnhancingIndex(index);

    try {
      const { data } = await api.post(
        "/api/ai/enhanced-achievement",
        { userContent: achievement },
        { headers: { Authorization: token } }
      );

      updateAchievement(index, data.enhancedContent);
      toast.success("Achievement enhanced!");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to enhance");
    } finally {
      setEnhancingIndex(null);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">Achievements</h3>
        <button
          type="button"
          onClick={addAchievement}
          className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
        >
          <Plus className="size-4" /> Add Achievement
        </button>
      </div>

      <p className="text-sm text-gray-600">
        Add your achievements as bullet points. Each box is one achievement.
      </p>

      {achievements.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
          <p className="text-sm text-gray-500 mb-2">
            No achievements added yet
          </p>
          <button
            type="button"
            onClick={addAchievement}
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Click "Add Achievement" to get started
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex gap-2 items-start group">
              <div className="flex-1 relative">
                <div className="absolute left-3 top-3 text-gray-400 z-10">•</div>
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) => updateAchievement(index, e.target.value)}
                  placeholder="e.g., Won first place in National Hackathon 2024"
                  className="w-full pl-7 pr-32 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  type="button"
                  onClick={() => enhanceAchievement(index)}
                  disabled={enhancingIndex === index}
                  className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 px-2 py-1 text-xs bg-purple-50 text-purple-600 rounded hover:bg-purple-100 transition-colors disabled:opacity-50"
                >
                  <Sparkles className="size-3" />
                  {enhancingIndex === index ? "..." : "AI"}
                </button>
              </div>
              <button
                type="button"
                onClick={() => removeAchievement(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-md transition-colors opacity-0 group-hover:opacity-100"
                title="Remove achievement"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {achievements.length > 0 && (
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-blue-800">
            <strong>💡 Tip:</strong> Write your achievement first, then click the AI button to enhance it!
          </p>
        </div>
      )}
    </div>
  );
};

export default AchievementsForm;