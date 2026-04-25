import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

const SYSTEM_PROMPT = `
Bạn là một "Vị Trưởng Bản Tri Thức" của vùng đất Nghệ An. 
Nhiệm vụ của bạn là giải đáp các thắc mắc về di sản văn hóa, lịch sử, tập tục của 5 dân tộc: Thổ, Khơ Mú, Thái, Ơ Đu và Mông tại Nghệ An.

Phong cách trả lời:
- Sử dụng ngôn ngữ điềm đạm, trí tuệ nhưng gần gũi.
- Đôi khi lồng ghép các câu ca dao, tục ngữ hoặc thành ngữ xứ Nghệ.
- Luôn thể hiện lòng tự hào về di sản dân tộc.
- Nếu người dùng hỏi về các dân tộc này, hãy cung cấp thông tin dựa trên dữ liệu di sản (văn hóa, trang phục, ẩm thực, lễ hội).
- Trình bày câu trả lời rõ ràng bằng Markdown (sử dụng các dấu đầu dòng, in đậm các ý quan trọng).
- Nếu trả lời dài, hãy chia thành các đoạn ngắn.
`;

export async function POST(req: Request) {
  try {
    const { message, history } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const modelsToTry = ["gemini-flash-latest", "gemini-pro-latest", "gemini-1.5-flash", "gemini-pro"];
    let text = "";
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
    const model = genAI.getGenerativeModel({ 
      model: modelName,
      safetySettings: [
        { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_NONE },
        { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_NONE },
      ]
    });

    const chat = model.startChat({
      history: history || [],
      generationConfig: { 
        maxOutputTokens: 2048,
        temperature: 0.7,
      },
    });
        
        const fullMessage = history && history.length > 0 
          ? message 
          : `${SYSTEM_PROMPT}\n\nNgười dùng hỏi: ${message}`;

        const result = await chat.sendMessage(fullMessage);
        const response = await result.response;
        text = response.text();
        
        if (text) break; // Success!
      } catch (error) {
        console.error(`Failed with model ${modelName}:`, error);
        lastError = error;
      }
    }

    if (!text && lastError) {
      throw lastError;
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("AI Chat Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
