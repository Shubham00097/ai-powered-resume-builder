# 🚀 AI-Powered Resume Builder

A comprehensive full-stack web application that revolutionizes resume creation through AI-powered content generation, intelligent optimization, and professional templates. Built with the MERN stack and enhanced with cutting-edge AI technology.

---

## ✨ Core Features

### 🔐 **Secure Authentication System**
- User registration and login with JWT-based authentication
- Protected routes with role-based authorization
- Session management and secure token handling

### 📄 **Intelligent Resume Management**
- **Create** professional resumes from scratch or upload existing ones
- **Edit** with real-time live preview for instant feedback
- **Delete** unwanted resumes with confirmation safeguards
- **Share** via public URLs for easy distribution to recruiters
- Autosave functionality to prevent data loss

### 🤖 **AI-Powered Content Enhancement**
- **Smart Summary Generation**: AI crafts compelling professional summaries tailored to your experience
- **Job Description Optimization**: Automatically enhances bullet points with action verbs and quantifiable achievements
- **Content Analysis**: AI evaluates and suggests improvements for resume effectiveness
- **Resume Upload & Enhancement**: Extract content from existing PDFs and upgrade them with AI recommendations

### 🖼 **Advanced Image Processing**
- Seamless profile image uploads with drag-and-drop support
- Automatic background removal for professional headshots
- ImageKit CDN integration for lightning-fast image delivery
- Image optimization and responsive formatting

### 🎨 **Professional Templates & Export**
- Curated collection of modern, ATS-friendly resume templates
- Industry-specific layouts (Tech, Creative, Business, Academic)
- One-click PDF export with print-optimized formatting
- Mobile-responsive design for editing on any device

---

## 🛠 Technology Stack

### **Frontend**
- **React.js** - Component-based UI architecture
- **Redux Toolkit** - Centralized state management
- **Tailwind CSS** - Utility-first styling framework
- **Axios** - HTTP client for API requests
- **React Router DOM** - Client-side routing
- **React PDF** - PDF generation and rendering

### **Backend**
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - ODM for MongoDB with schema validation
- **JWT** - Stateless authentication tokens
- **bcrypt** - Secure password hashing

### **AI & Media Services**
- **Grok AI API** - Natural language processing and content generation
- **ImageKit** - Image CDN with transformation capabilities
- **Multer** - Multipart form data handling for file uploads

### **Development Tools**
- **dotenv** - Environment variable management
- **cors** - Cross-origin resource sharing configuration
- **nodemon** - Development server auto-restart
- **ESLint** - Code quality and consistency

---

## 📸 Application Screenshots

<table>
<tr>
<td width="50%">

### Home Page
<img src="https://github.com/Shubham00097/ai-powered-resume-builder/blob/main/Screenshots/home%20page.png?raw=true" alt="Home Page" />

*Landing page showcasing key features and benefits*

</td>
<td width="50%">

### Dashboard
<img src="https://github.com/Shubham00097/ai-powered-resume-builder/blob/main/Screenshots/dashboard.png?raw=true" alt="Dashboard" />

*Central hub for managing all your resumes*

</td>
</tr>

<tr>
<td width="50%">

### Create or Upload
<img src="https://github.com/Shubham00097/ai-powered-resume-builder/blob/main/Screenshots/create%20or%20upload.png?raw=true" alt="Create Upload" />

*Choose to build from scratch or enhance existing resume*

</td>
<td width="50%">

### Template Selection
<img src="https://github.com/Shubham00097/ai-powered-resume-builder/blob/main/Screenshots/templateSelector.png?raw=true" alt="Template" />

*Browse professional templates for every industry*

</td>
</tr>

<tr>
<td colspan="2">

### Signup Form
<img src="https://github.com/Shubham00097/ai-powered-resume-builder/blob/main/Screenshots/signupform.png?raw=true" alt="Signup" />

*Secure user registration with validation*

</td>
</tr>
</table>

---

## 🏗 System Architecture
```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (React)                     │
├─────────────────────────────────────────────────────────────┤
│  • Authentication Module    • Resume Editor                  │
│  • Live Preview Engine      • Template Selector              │
│  • Redux State Management   • API Integration Layer          │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS/REST API
                     │
┌────────────────────▼────────────────────────────────────────┐
│              Server Layer (Node.js + Express)                │
├─────────────────────────────────────────────────────────────┤
│  • Authentication Routes    • Resume CRUD Operations         │
│  • AI Integration Endpoints • Image Upload Handler           │
│  • Middleware Layer         • Error Handling                 │
└────────────────────┬────────────────────────────────────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
┌───────▼──────┐ ┌──▼─────┐ ┌───▼──────────┐
│   MongoDB    │ │Grok AI │ │   ImageKit   │
│   Database   │ │  API   │ │     CDN      │
└──────────────┘ └────────┘ └──────────────┘
```

### **Architecture Highlights**
- **Three-tier architecture** separating presentation, business logic, and data layers
- **RESTful API design** for scalable client-server communication
- **Microservices integration** with external AI and media processing services
- **Stateless authentication** using JWT tokens for horizontal scalability

---

## 🚀 Key Differentiators

- **AI-First Approach**: Every feature enhanced with intelligent automation
- **Real-Time Collaboration**: Live preview updates as you type
- **Enterprise-Grade Security**: Industry-standard encryption and authentication
- **Performance Optimized**: Lazy loading, code splitting, and CDN delivery
- **Accessibility Compliant**: WCAG 2.1 Level AA standards

