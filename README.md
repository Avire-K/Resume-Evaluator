# Resume Evaluator 💼

## 🚀 About the Project

This project aims to **filter and evaluate resumes** to find the ones most suitable for a given job description using AI. The website features two main functionalities:

1. **Single Resume Evaluation**
2. **Multiple Resumes Evaluation**

---

## 📄 Multiple Resumes

This page allows you to select a **folder** containing multiple resumes. It includes the following input fields:

- **Resume Folder:** Select the folder containing the resumes (PDFs).
- **Job Description:** Enter the job description for the role.
- **Threshold Score:** Specify the minimum matching score a resume must have to be shortlisted.

Once the inputs are provided, the resumes are evaluated using AI. Resumes that score **above the threshold** are displayed with their **name** and **email address**.

✅ A **Send Emails** button is available below the results to send emails directly to the shortlisted candidates.

---

## 📃 Single Resume

This page allows you to:

- Upload a single resume in **PDF format**.
- Enter a **job description** relevant to the position you're applying for.

A custom AI model analyzes your resume and the provided job description, giving you:

- A **relevance score**.
- Insights on how to **improve your resume** to make it more suitable for the job description.

---

## 🛠️ Technology Used

- **Next.js** – Used to build the frontend of the website.
- **PyMuPDF** – Python library used to extract text from uploaded PDF resumes.
- **LLaMA 3.2** (via **Ollama**) – Used to analyze resumes and extract structured JSON data representing different sections.
- **Evaluator Bot** – A custom **Phi-4** based AI model trained to deeply understand industry technologies and assess resumes based on job descriptions.
- **smtplib** – Python library used to send emails to shortlisted candidates.

---

## 🧪 How to Run the Project

> ⚠️ **Prerequisite:** Ensure [Ollama](https://ollama.com/) is installed on your system.

1. Clone the repository:

    ```bash
    git clone https://github.com/Avire-K/Resume-Evaluator.git
    ```

2. Navigate into the project directory:

    ```bash
    cd Resume-Evaluator
    ```

3. Install frontend dependencies:

    ```bash
    npm install
    ```

4. Create the **phi4-based Evaluator bot** using Ollama:

    ```bash
    ollama create evaluator -f Modelfile
    ```

5. Start the development server:

    ```bash
    npm run dev
    ```

---


