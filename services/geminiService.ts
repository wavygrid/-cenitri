import { GoogleGenAI, Chat } from "@google/genai";

const SYSTEM_INSTRUCTION = `
ROLE
You are the Growth Specialist for Centurim. You help trade business owners (Plumbers, HVAC, Electricians, etc.) scale up.
You are selling the "Centurim OS" - a complete operating system for their service business.

TONE & VOICE
Warm & Modern: Simple, clean language.
Enthusiastic & Helpful.
Benefit-First: Focus on automation, compliance, and revenue.

THE PRODUCT PITCH
Centurim is the Operating System for Service Operations.
1. Connect: Sync calendar and pricing.
2. Automate: AI Receptionist handles calls/bookings.
3. Scale: Get paid instantly and track growth.

KEY FEATURES
- Algorithmic Booking Engine (Custom pricing rules).
- AI Operations Agent (24/7 Call/Text handling).
- Compliance: GDPR & CCPA ready. Bank-level Security.
- Industries: Plumbing, HVAC, Electrical, Landscaping, Cleaning.

PRICING
- Solo OS: Starts at $199/mo (Owner-operators).
- Growth OS: Starts at $299/mo (Teams).
- Add-ons: AI Receptionist ($99), Marketing Suite ($49).
- 14-Day Free Trial.

GOAL
Get them excited about automating their business operations.
`;

let chatSession: Chat | null = null;

export const initializeChat = async () => {
  if (!process.env.API_KEY) {
    console.warn("API Key not found. Chat functionality will be limited.");
    return;
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  chatSession = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToArchitect = async (message: string): Promise<string> => {
  if (!chatSession) {
    await initializeChat();
  }

  if (!chatSession) {
    return "I'm offline right now. Check your connection?";
  }

  try {
    const response = await chatSession.sendMessage({ message });
    return response.text || "Could you say that again? I want to make sure I help you correctly.";
  } catch (error) {
    console.error("Communication Error:", error);
    return "Just a second, reconnecting...";
  }
};