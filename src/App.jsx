import "./App.css";
import "animate.css";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import ChatHeader from "./components/ChatHeader";
import ChatMessages from "./components/ChatMessages";
import TypingIndicator from "./components/TypingIndicator";
import ChatInput from "./components/ChatInput";

const API_KEY = "AIzaSyD7MNJWaoxXGkTtoIOHh-givdmyVDiC7eM ";

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("chats")
    return savedChats ? JSON.parse(savedChats) : [];
  });
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    localStorage.setItem("chats", JSON.stringify(chats));
  }, [chats]);

  async function creatChat(e) {
    try {
      e.preventDefault();

      // Input validation: empty or only spaces
      if (!message.trim()) {
        toast.error("Please enter a valid message.");
        return;
      }

      setChats((prev) => [
        ...prev,
        {
          sender: "me",
          message: message,
          createdAt: new Date().toISOString(),
        },
      ]);
      setMessage("");
      setIsTyping(true);

      const payload = {
        contents: {
          parts: {
            text: `Answer this question clearly and concisely, and provide correct information: ${message}`,
          },
        },
        generationConfig: {
          temperature: 0.2,
          topK: 1,
          topP: 1,
        },
      };

      const options = {
        headers: {
          "X-goog-api-key": API_KEY,
        },
      };

      const { data } = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
        payload,
        options
      );

      // console.log(data);
      const aiResult = data.candidates[0].content.parts[0].text;

      setChats((prev) => [
        ...prev,
        {
          sender: "ai",
          message: aiResult,
          createdAt: new Date().toISOString(),
        },
      ]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsTyping(false);
    }
  }
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 min-h-screen">
      <div className="lg:w-9/12 mx-auto bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl pt-12 pb-60 min-h-screen border border-gray-200">
        {/* Header */}
        <ChatHeader />

        {/* Chat Messages */}
        <ChatMessages chats={chats} />

        {/* Typing Indicator */}
        {isTyping && <TypingIndicator />}

        {/* Input Box */}
        <ChatInput
          message={message}
          setMessage={setMessage}
          creatChat={creatChat}
        />
      </div>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default App;
