import ai from "../configs/ai.js";
import Resume from "../models/Resume.js";

// Controller for enhancing a resume's professional summary
// POST: /api/ai/enhance-pro-sum
export const enhanceProfessionalSummary = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `You are an expert in resume writing. Your task is to enhance the professional summary of a resume. The summary should be 1-2 sentences also highlighting key skills, experience, and career objectives. Make it compelling and ATS-friendly. And only return text no options or anything else.

Content to enhance:
${userContent}`;

    const enhancedContent = await ai.generateContent(prompt);

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    console.error("Enhance summary error:", error);
    return res.status(500).json({ message: error.message });
  }
};

// Controller for enhancing a resume's job description
// POST: /api/ai/enhance-job-desc
export const enhanceJobDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `You are an expert in resume writing. Your task is to enhance the job description of a resume. The job description should be only in 1-2 sentence also highlighting key responsibilities and achievements. Use action verbs and quantifiable results where possible. Make it ATS-friendly. And only return text no options or anything else.

Content to enhance:
${userContent}`;

    const enhancedContent = await ai.generateContent(prompt);

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    console.error("Enhance job desc error:", error);
    return res.status(500).json({ message: error.message });
  }
};

// Controller for uploading a resume to the database
// POST: /api/ai/upload-resume
export const uploadResume = async (req, res) => {
  try {
    console.log("Upload resume request received");
    const { resumeText, title } = req.body;
    const userId = req.userId;

    if (!title) {
      return res.status(400).json({ message: "Title is required" });
    }

    if (!resumeText) {
      return res.status(400).json({ message: "Resume text is required" });
    }

    if (!userId) {
      return res.status(400).json({ message: "User not authenticated" });
    }

    const prompt = `You are an expert AI Agent to extract data from resume. Extract data and provide ONLY valid JSON in this exact format with no markdown, no explanation, just the JSON:

{
    "professional_summary": "",
    "skills": [],
    "personal_info": {
        "image": "",
        "full_name": "",
        "profession": "",
        "email": "",
        "phone": "",
        "location": "",
        "linkedin": "",
        "github": "",
        "website": ""
    },
    "experience": [
        {
            "company": "",
            "position": "",
            "start_date": "",
            "end_date": "",
            "description": "",
            "is_current": false
        }
    ],
    "project": [
        {
            "name": "",
            "type": "",
            "description": ""
        }
    ],
    "education": [
        {
            "institution": "",
            "degree": "",
            "field": "",
            "graduation_date": "",
            "gpa": ""
        }
    ]
}

Resume text:
${resumeText}`;

    console.log("Calling Gemini API...");
    const extractedData = await ai.generateContent(prompt);
    console.log("Response received:", extractedData.substring(0, 100));

    // Remove markdown code blocks if present
    let cleanedData = extractedData.trim();
    if (cleanedData.startsWith("```json")) {
      cleanedData = cleanedData.replace(/```json\n?/g, "").replace(/```\n?/g, "");
    } else if (cleanedData.startsWith("```")) {
      cleanedData = cleanedData.replace(/```\n?/g, "");
    }

    const parsedData = JSON.parse(cleanedData);
    console.log("Data parsed successfully");

    console.log("Creating resume in database...");
    const newResume = await Resume.create({ userId, title, ...parsedData });
    console.log("Resume created with ID:", newResume._id);

    return res.status(200).json({ resumeId: newResume._id });

  } catch (error) {
    console.error("Upload error:", error.message);
    return res.status(500).json({ message: error.message });
  }
};

// Controller for enhancing project description
// POST: /api/ai/enhance-project-desc
export const enhanceProjectDescription = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `You are an expert in resume writing. Your task is to enhance the project description. The description should be 1-2 sentences highlighting key technologies used, features implemented, and impact. Use action verbs and technical details where relevant. Make it ATS-friendly. And only return text no options or anything else.

Content to enhance:
${userContent}`;

    const enhancedContent = await ai.generateContent(prompt);

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    console.error("Enhance project desc error:", error);
    return res.status(500).json({ message: error.message });
  }
};

// Controller for enhancing achievement
// POST: /api/ai/enhance-achievement
export const enhanceAchievement = async (req, res) => {
  try {
    const { userContent } = req.body;

    if (!userContent) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = `You are an expert in resume writing. Your task is to enhance an achievement statement. Make it concise (one sentence), impactful, and quantifiable where possible. Use strong action verbs. Make it ATS-friendly. And only return text no options or anything else.

Achievement to enhance:
${userContent}`;

    const enhancedContent = await ai.generateContent(prompt);

    return res.status(200).json({ enhancedContent });
  } catch (error) {
    console.error("Enhance achievement error:", error);
    return res.status(500).json({ message: error.message });
  }
};