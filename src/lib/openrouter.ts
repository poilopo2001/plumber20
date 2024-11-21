import axios from 'axios';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function generateContent(prompt: string, context: string = '') {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4',
        messages: [
          {
            role: 'system',
            content: `You are a professional content writer for a plumbing company in Luxembourg. 
            Write in French and focus on SEO optimization. ${context}`,
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': SITE_URL,
          'X-Title': SITE_NAME,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating content:', error);
    throw error;
  }
}

export async function generateSEOMetadata(title: string, content: string) {
  try {
    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'openai/gpt-4',
        messages: [
          {
            role: 'system',
            content: 'Generate SEO metadata in French for the given content. Return a JSON object with title, description, and keywords array.',
          },
          {
            role: 'user',
            content: `Title: ${title}\nContent: ${content}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': SITE_URL,
          'X-Title': SITE_NAME,
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error('Error generating metadata:', error);
    throw error;
  }
}
