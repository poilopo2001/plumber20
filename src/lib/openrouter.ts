import axios from 'axios';
import { PageContent } from './pageContent';

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://depannage-luxembourg.com';
const SITE_NAME = 'PlombierPro';

if (!OPENROUTER_API_KEY) {
  throw new Error('OPENROUTER_API_KEY is not defined in environment variables');
}

interface Message {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function generateContent(prompt: string, context: string): Promise<string> {
  try {
    console.log('Sending request with:', { context, prompt });

    const response = await axios.post(
      'https://openrouter.ai/api/v1/chat/completions',
      {
        model: 'google/gemini-flash-1.5',
        messages: [
          {
            role: 'user',
            content: `${context}\n\n${prompt}\n\nIMPORTANT: Return a valid JSON object.`
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        top_p: 0.9
      },
      {
        headers: {
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
          'HTTP-Referer': SITE_URL,
          'X-Title': SITE_NAME,
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Full API Response:', response.data);

    if (!response.data || !response.data.choices || !response.data.choices[0]) {
      console.error('Invalid response structure:', response.data);
      throw new Error('Invalid response structure from API');
    }

    const messageContent = response.data.choices[0].message?.content;
    if (!messageContent) {
      console.error('No message content in response:', response.data.choices[0]);
      throw new Error('No message content in response');
    }

    // Clean the content to ensure it's valid JSON
    const cleanContent = messageContent.trim().replace(/```json\n?|\n?```/g, '');
    console.log('Cleaned content:', cleanContent);

    // Validate JSON
    try {
      const parsedJson = JSON.parse(cleanContent);
      console.log('Successfully parsed JSON:', parsedJson);
      return cleanContent;
    } catch (e) {
      console.error('JSON parsing error:', e);
      console.error('Invalid JSON content:', cleanContent);
      throw new Error('Response is not valid JSON');
    }

  } catch (error) {
    console.error('Error in generateContent:', error);
    if (error.response) {
      console.error('API Error Response:', {
        status: error.response.status,
        statusText: error.response.statusText,
        data: error.response.data
      });
    }
    throw error;
  }
}

export async function generateSEOMetadata(title: string, content: string) {
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'HTTP-Referer': SITE_URL,
        'X-Title': SITE_NAME,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'google/gemini-flash-1.5-exp',
        messages: [
          {
            role: 'system',
            content: 'Generate SEO metadata in French for the given content. Return a valid JSON object with title, description, and keywords array.'
          },
          {
            role: 'user',
            content: `Title: ${title}\nContent: ${content}\n\nGenerate SEO metadata in French. Return as a JSON object with format: { title: string, description: string, keywords: string[] }`
          }
        ],
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 0.9
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('API Response Error:', errorText);
      throw new Error(`OpenRouter API request failed: ${response.statusText}`);
    }

    const result = await response.json();
    
    if (!result.choices?.[0]?.message?.content) {
      console.error('Invalid API Response:', result);
      throw new Error('Invalid response format from OpenRouter API');
    }

    try {
      const contentStr = typeof result.choices[0].message.content === 'string'
        ? result.choices[0].message.content
        : JSON.stringify(result.choices[0].message.content);

      const metadata = JSON.parse(contentStr);
      
      if (!metadata.title || !metadata.description || !Array.isArray(metadata.keywords)) {
        throw new Error('Missing required metadata fields');
      }

      return metadata;
    } catch (parseError) {
      console.error('Error parsing metadata:', parseError);
      console.error('Raw metadata:', result.choices[0].message.content);
      throw new Error('Failed to parse metadata from API response');
    }
  } catch (error) {
    console.error('Error generating metadata:', error);
    throw error;
  }
}
