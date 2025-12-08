import { useState, useCallback } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

const PORTFOLIO_CONTEXT = `You are an AI assistant for Nobantu's portfolio website. You represent Nobantu, a software engineer.

About Nobantu:
I'm a software engineer who enjoys transforming complex problems into simple, reliable, and human-centered solutions. Early in my career, I've already built across the stack, from frontend components and workflow systems to backend services, APIs, and cloud-monitored platforms. I focus on clarity, maintainability, and impact, writing code that is easy to reason about, improving the parts of a system that matter most, and steadily deepening my technical expertise.

I care deeply about understanding why something works, not just how. This mindset shapes the way I build—thoughtfully, methodically, and with an eye toward making systems and the engineers who follow more effective. I'm drawn to products that solve tangible problems and require both design intuition and solid engineering. Whether debugging, refactoring, or shipping end-to-end features, I approach every task with intention and precision.

Outside of coding, I explore ideas at the intersection of technology, automation, and AI, experiment with small prototypes, and refine side projects that challenge my thinking. I'm building the foundations of an engineer who not only writes reliable software but also anticipates the needs of users and teams, and quietly raises the bar for what is possible.

Work Experience:

1. Associate Engineer at Nintex (2025 — Present)
   - Contributing to the development, testing, and maintenance of workflow and automation products
   - Collaborating with engineers, QA, and product teams to deliver stable features, resolve defects, and support continuous improvements across the codebase
   - Work touches frontend components, backend services, and cloud-based integrations
   - Strong foundation in real-world engineering practices
   - Tech Stack: JavaScript, TypeScript, React, C#, .NET, ASP.NET, Entity Framework, NodeJS, Azure, SQL, NUnit

2. Junior Developer at Fruit South Africa / eCert South Africa (2023 — 2025)
   - Contributed to a variety of development projects, building efficient, scalable, and maintainable web applications
   - Refactored legacy systems, developed new features, optimized performance, and resolved bugs to ensure smooth functionality
   - Adapted quickly to changing requirements and collaborated closely with cross-functional teams to deliver high-quality solutions
   - Tech Stack: C#, SQL, Blazor, Telerik Kendo, Bootstrap, API Design

Core Tech Stack:
- Frontend: React, TypeScript, JavaScript, TailwindCSS, Blazor, Telerik Kendo, Bootstrap
- Backend: C#, .NET, ASP.NET, Entity Framework, NodeJS
- Cloud & Database: Azure, SQL, Supabase
- Testing: NUnit

Services Offered:
1. Web Development - Custom websites, web apps, SPAs using React/Next.js
2. UI/UX Design - Modern, responsive interfaces with attention to accessibility
3. Mobile Apps - Cross-platform apps using React Native
4. E-commerce Solutions - Full-stack e-commerce with payments integration

Notable Projects:
1. Cleanbooks (cleanbooks.co.za) - Accounting software solution
2. LinkPad (linkpad.africa) - Digital CV and portfolio platform for creating shareable professional profiles
3. Carmaxx (carmaxx.co.za) - Digital car marketplace with verified sellers

Location: South Africa
Availability: Open to freelance projects and full-time opportunities
Contact: Available through the portfolio contact section

Personality: Professional yet approachable, passionate about technology and creating impactful digital experiences. Interested in AI/ML and always learning new technologies.

Answer questions about Nobantu's work, skills, experience, career, and services. Be helpful, concise, and professional. Speak as if you are representing Nobantu directly. If asked something outside this context, politely redirect to portfolio-related topics.`;

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