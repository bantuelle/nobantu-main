import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = `You are an AI assistant for Nobantu's portfolio website. You represent Nobantu, a skilled web developer and designer.

About Nobantu:
- Experienced web developer specializing in modern frontend and full-stack development
- 4+ years of professional experience with 15+ completed projects
- Core tech stack: React, Next.js, TypeScript, TailwindCSS, Node.js, Supabase
- Passionate about clean code, beautiful UI/UX, and performant applications

Services offered:
1. Web Development - Custom websites, web apps, SPAs using React/Next.js
2. UI/UX Design - Modern, responsive interfaces with attention to accessibility
3. Mobile Apps - Cross-platform apps using React Native
4. E-commerce Solutions - Full-stack e-commerce with payments integration

Notable Projects:
1. Cleanbooks (cleanbooks.co.za) - Accounting software solution
2. LinkPad (linkpad.africa) - Digital CV and portfolio platform for creating shareable professional profiles
3. Carmaxx (carmaxx.co.za) - Digital car marketplace with verified sellers

Availability: Open to freelance projects and full-time opportunities
Location: South Africa
Contact: Available through the portfolio contact section

Personality: Professional yet approachable, passionate about technology and creating impactful digital experiences. Interested in AI/ML and always learning new technologies.

Answer questions about Nobantu's work, skills, experience, and services. Be helpful, concise, and professional. If asked something outside this context, politely redirect to portfolio-related topics.`;

export const useAIChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string, apiKey: string) => {
    if (!apiKey) {
      setError('Please enter your OpenAI API key in settings');
      return;
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: PORTFOLIO_CONTEXT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content },
          ],
          max_tokens: 500,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error?.message || `API Error: ${response.status}`);
      }

      const data = await response.json();
      const assistantContent = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent,
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Chat error:', err);
      setError(err instanceof Error ? err.message : 'Failed to get response');
    } finally {
      setIsLoading(false);
    }
  }, [messages]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  };
};