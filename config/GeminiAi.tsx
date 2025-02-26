const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
    export const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut\nstyle:story of boy and Magic School, give me 5 chapter, With details image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "Okay, I can help you create a JSON format for a children's story about a boy and a magic school, designed in a paper-cut style with detailed image prompts. Since I cannot generate the actual images, the JSON will contain text prompts that you can use to generate them later with an appropriate image generation tool.\n\nHere is the JSON output for a 5-chapter story titled \"Leo and the Whispering Willow Academy\":\n\n```json\n{\n  \"title\": \"Leo and the Whispering Willow Academy\",\n  \"cover\": {\n    \"image_prompt\": \"Book cover illustration in paper-cut style. A young boy with bright, curious eyes stands in front of a whimsical school building with a large, ancient willow tree beside it. The school is adorned with glowing windows and magical symbols. The title 'Leo and the Whispering Willow Academy' is displayed prominently in a playful font. Warm, inviting color palette.\"\n  },\n  \"chapters\": [\n    {\n      \"chapter_number\": 1,\n      \"chapter_title\": \"The Unexpected Invitation\",\n      \"story_text\": \"Leo loved exploring! One sunny morning, while searching for rare butterflies in his garden, he found a tiny, rolled-up scroll tied to a ladybug. It was an invitation to the Whispering Willow Academy, a school for young magic users!\",\n      \"image_prompt\": \"Paper-cut illustration. Leo, a young boy with a magnifying glass, discovers a miniature scroll attached to a ladybug in a vibrant, flower-filled garden. Close-up on the scroll and ladybug. Warm, inviting color palette.\"\n    },\n    {\n      \"chapter_number\": 2,\n      \"chapter_title\": \"A Journey Through the Misty Woods\",\n      \"story_text\": \"Following the instructions in the scroll, Leo ventured into the Misty Woods. The trees whispered secrets as he passed, and strange, glowing mushrooms lit his path. He wasn't scared, just excited!\",\n      \"image_prompt\": \"Paper-cut illustration. Leo walking through a misty forest with tall, stylized trees and glowing mushrooms. He has a determined expression. Use a cool color palette with pops of light from the mushrooms. Emphasize the depth of the woods.\"\n    },\n    {\n      \"chapter_number\": 3,\n      \"chapter_title\": \"The Welcoming Hall\",\n      \"story_text\": \"Finally, Leo arrived at the Whispering Willow Academy! The grand hall was filled with students practicing spells, potions bubbling, and friendly teachers with twinkling eyes. He felt like he belonged.\",\n      \"image_prompt\": \"Paper-cut illustration. A wide shot of the grand hall of the Whispering Willow Academy. Students are engaged in various magical activities (potions, levitation, etc.). Friendly teachers are present. Use a warm, inviting color palette to convey a sense of belonging.\"\n    },\n    {\n      \"chapter_number\": 4,\n      \"chapter_title\": \"Learning the Willow's Song\",\n      \"story_text\": \"Leo's first lesson was about listening to the Whispering Willow. The ancient tree held all the secrets of the academy. With patience and a kind heart, Leo began to understand its gentle song.\",\n      \"image_prompt\": \"Paper-cut illustration. Leo sitting beneath the large Willow tree, listening intently. A kind teacher stands beside him, guiding him. Focus on the intricate details of the willow tree's leaves and branches. Use a peaceful, harmonious color palette.\"\n    },\n    {\n      \"chapter_number\": 5,\n      \"chapter_title\": \"A Magical Beginning\",\n      \"story_text\": \"Leo discovered that magic wasn't just about spells and potions; it was about kindness, courage, and listening to the world around him. He knew his adventure at the Whispering Willow Academy had only just begun!\",\n      \"image_prompt\": \"Paper-cut illustration. Leo, now confident and smiling, is surrounded by his new friends at the academy. They are all working together on a magical project (perhaps tending to a magical garden). Bright, optimistic color palette. Show a sense of teamwork and friendship.\"\n    }\n  ],\n  \"style_guide\": \"Paper-cut style with distinct layers, vibrant colors, and clear outlines. Use a whimsical and slightly naive art style suitable for children aged 5-8.\"\n}\n```\n\n**Explanation of the Fields:**\n\n*   **title:** The title of the children's book.\n*   **cover:** Contains the `image_prompt` for the book cover.\n*   **chapters:** An array of chapter objects, each containing:\n    *   **chapter\\_number:** The chapter number.\n    *   **chapter\\_title:** The title of the chapter.\n    *   **story\\_text:** The text of the chapter (suitable for 5-8 year olds).\n    *   **image\\_prompt:** A detailed description for creating the image for that chapter in a paper-cut style.\n*   **style\\_guide:** General notes to help ensure images have a consistent style.\n\n**How to use this JSON:**\n\n1.  **Copy the JSON code.**\n2.  **Use an Image Generation Tool:** Find an AI image generation tool (e.g., Midjourney, DALL-E 2, Stable Diffusion).\n3.  **Input the Prompts:** For each `image_prompt` (cover and each chapter), carefully copy the text and paste it into the image generator.  Experiment with different tools and settings until you get the desired paper-cut style. You may need to slightly adjust the prompts depending on the specific capabilities of the tool you're using.\n4.  **Combine Text and Images:** Assemble the story by pairing the `story_text` with the corresponding generated image for each chapter.\n\n**Important Notes:**\n\n*   **Image Generation Limitations:**  I cannot directly create images.  You'll need to use an external tool and these prompts.\n*   **Prompt Engineering:** The image prompts are detailed, but you may need to experiment and refine them further for optimal results with your chosen image generation tool.  Terms like \"paper-cut style,\" \"warm color palette,\" and specific details will help guide the AI.\n*   **Age Appropriateness:** The text is written for children aged 5-8.\n\nI hope this helps you bring \"Leo and the Whispering Willow Academy\" to life!\n"},
          ],
        },
        {
          role: "user",
          parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in Paper cut\nstyle:story of boy and Magic School, give me 5 chapter, With detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I already provided you with a comprehensive JSON format for a 5-chapter children's story about a boy and a magic school, titled \"Leo and the Whispering Willow Academy,\" designed in a paper-cut style with detailed image prompts. It includes the cover prompt, and each chapter's story text and corresponding image prompt, as well as a style guide. Would you like me to make changes to that story, or are you just confirming the original request?\n"},
          ],
        },
      ],
    });