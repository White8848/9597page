
import { GoogleGenAI, Type } from "@google/genai";
import { TechnicalLog } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateTechnicalLogs = async (): Promise<TechnicalLog[]> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Generate 5 realistic FRC (First Robotics Competition) robot technical log entries for an advanced vision-guided robot named LuBan. Include timestamps, log levels (INFO, WARNING, ERROR, CRITICAL), and specific mechanical/electronic components like 'Vision System', 'Drive Train', 'Manipulator', 'Battery'.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              timestamp: { type: Type.STRING },
              status: { type: Type.STRING },
              component: { type: Type.STRING },
              message: { type: Type.STRING },
            },
            required: ["timestamp", "status", "component", "message"]
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text.trim());
    }
    return [];
  } catch (error) {
    console.error("Failed to generate logs:", error);
    return [];
  }
};
