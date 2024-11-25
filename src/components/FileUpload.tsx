import * as React from 'react';
import { FileUploadProps } from './types';

export const FileUpload: React.FC<FileUploadProps> = ({ maxFiles }) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [files, setFiles] = React.useState<File[]>([]);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    if (files.length + droppedFiles.length <= maxFiles) {
      setFiles(prev => [...prev, ...droppedFiles]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      if (files.length + selectedFiles.length <= maxFiles) {
        setFiles(prev => [...prev, ...selectedFiles]);
      }
    }
  };

  return (
    <div 
      className={`
        relative overflow-hidden
        flex flex-col items-center
        p-8 mt-7 
        rounded-lg
        transition-all duration-300
        ${isDragging 
          ? 'border-2 border-orange-400 bg-orange-400/5' 
          : 'border-2 border-dashed border-white/20 hover:border-orange-400/50 hover:bg-white/5'
        }
      `}
      onDragEnter={handleDragEnter}
      onDragOver={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div className="flex flex-col items-center">
        {/* Upload Icon */}
        <svg
          className={`w-12 h-12 mb-4 transition-colors duration-300 ${
            isDragging ? 'text-orange-400' : 'text-white/50'
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>

        {/* Upload Text */}
        <div className="text-center">
          <p className={`text-lg font-medium transition-colors duration-300 ${
            isDragging ? 'text-orange-400' : 'text-white/70'
          }`}>
            Glisser & déposer les fichiers ici
          </p>
          <p className="mt-2 text-sm text-white/50">ou</p>
          <label 
            htmlFor="file-upload" 
            className="
              inline-block mt-2 px-4 py-2
              text-sm font-medium text-white
              bg-orange-400/20 
              rounded-lg cursor-pointer
              transition-all duration-300
              hover:bg-orange-400/30
            "
          >
            Parcourir les fichiers
          </label>
        </div>

        {/* File Input */}
        <input
          id="file-upload"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileSelect}
          aria-label="File upload"
        />

        {/* File Counter */}
        <div className="mt-4 text-sm text-white/50">
          {files.length} sur {maxFiles} fichiers
        </div>

        {/* File List */}
        {files.length > 0 && (
          <div className="w-full mt-6 space-y-2">
            {files.map((file, index) => (
              <div 
                key={index}
                className="
                  flex items-center justify-between
                  px-4 py-2
                  bg-white/5 rounded-lg
                  text-sm text-white/70
                "
              >
                <span className="truncate max-w-[200px]">{file.name}</span>
                <button
                  onClick={() => setFiles(prev => prev.filter((_, i) => i !== index))}
                  className="ml-2 text-white/50 hover:text-orange-400 transition-colors duration-300"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
