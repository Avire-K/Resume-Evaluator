'use client';

import { useState } from 'react';
import FileUpload from '../../components/FileUpload';
import Results from '../../components/Results';

export default function Home() {
  const [results, setResults] = useState(null);

  const handleFileProcessed = (data) => {
    setResults(data);
  };

  return (
    <main className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4 text-slate-800">Resume Job Match Evaluator</h1>
        <p className="text-center mb-8 text-slate-600">
          Upload a resume PDF and let AI evaluate how well it matches the job description.
        </p>
        
        <FileUpload onFileUpload={handleFileProcessed} />
        
        {results && <Results data={results} />}
      </div>
    </main>
  );
}
