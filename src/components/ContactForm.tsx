import * as React from 'react';
import { InputField } from './InputField';
import { FileUpload } from './FileUpload';
import { Checkbox } from './Checkbox';

export const ContactForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className="relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-indigo-950">
        <div className="absolute inset-0 opacity-5" 
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
             }}
        />
      </div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center px-8 py-32 w-full max-md:px-4 max-md:py-24">
        <div className="w-full max-w-[800px]">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="inline-block relative text-base font-bold tracking-wider leading-none uppercase text-orange-400 before:content-[''] before:absolute before:-left-16 before:top-1/2 before:-translate-y-1/2 before:w-12 before:h-[2px] before:bg-orange-400 after:content-[''] after:absolute after:-right-16 after:top-1/2 after:-translate-y-1/2 after:w-12 after:h-[2px] after:bg-orange-400">
              Contact
            </h2>
            <h1 className="mt-6 text-4xl font-medium text-white">
              DISCUTONS DE VOTRE PROJET
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField placeholder="Prénom" id="firstname" required />
              <InputField placeholder="Nom" id="lastname" required />
            </div>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField placeholder="Adresse E-mail" type="email" id="email" required />
              <InputField placeholder="Téléphone" type="tel" id="phone" required />
            </div>

            {/* Address */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField placeholder="Adresse (n° et rue)" id="street" />
              <InputField placeholder="Code postal" id="postal" />
            </div>

            <InputField placeholder="Localité" id="locality" />

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                required
                placeholder=""
                rows={6}
                className="
                  peer
                  w-full px-4 py-3
                  text-base text-white
                  bg-white/10
                  border border-white/10
                  rounded-lg
                  outline-none
                  transition-all duration-300
                  focus:border-orange-400/50
                  focus:bg-white/[0.15]
                  hover:bg-white/[0.12]
                  resize-none
                "
              />
              <label
                htmlFor="message"
                className="
                  absolute left-4 top-3
                  text-sm text-white/50
                  transition-all duration-300
                  cursor-text
                  peer-focus:text-xs
                  peer-focus:-translate-y-2
                  peer-focus:text-orange-400
                "
              >
                Votre message<span className="text-orange-400 ml-1">*</span>
              </label>
            </div>

            {/* File Upload */}
            <FileUpload maxFiles={10} />

            {/* Checkboxes */}
            <div className="space-y-4">
              <Checkbox
                id="terms"
                required
                label="J'accepte que mes coordonnées personnelles soient utilisées par la société Remake pour me recontacter."
              />
              <Checkbox
                id="marketing"
                label="J'accepte de recevoir des informations commerciales de la part de la société Remake."
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center mt-12">
              <button
                type="submit"
                className="
                  group relative
                  px-8 py-4
                  text-sm font-bold
                  text-white uppercase
                  bg-gradient-to-r from-orange-400 to-orange-500
                  rounded-lg
                  overflow-hidden
                  transition-all duration-300
                  hover:shadow-lg hover:shadow-orange-400/20
                "
              >
                <span className="relative z-10 flex items-center gap-3 transition-transform duration-300 group-hover:gap-5">
                  Envoyer
                  <svg 
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};
