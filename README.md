# 🤖 AI Chat-Bot এটি একটি **React + Vite** প্রজেক্ট যেখানে TailwindCSS ব্যবহার করে একটি সুন্দর **AI Chat UI** তৈরি করা হয়েছে। UI টা Messenger/WhatsApp এর মত স্টাইল করা হয়েছে, Gradient রঙ এবং animation সহ। --- ## 🚀 ব্যবহৃত টেকনোলজি - ⚛️ **React (Vite setup)** - 🎨 **TailwindCSS** - 🔔 **React Toastify** → নোটিফিকেশনের জন্য - 📅 **Moment.js** → তারিখ/সময় ফরম্যাট করার জন্য - 🖼 **Lucide React Icons** → Send আইকন এর জন্য 
--- ## 📂 প্রজেক্ট স্ট্রাকচার src/
│
├── assets/                # প্রজেক্টে ব্যবহৃত ছবি/আইকন/স্ট্যাটিক ফাইল
│
├── components/            # সব কম্পোনেন্ট ফাইল
│   ├── ChatHeader.jsx     # চ্যাট হেডার (User/Room Info)
│   ├── ChatInput.jsx      # মেসেজ ইনপুট ফিল্ড + সেন্ড বাটন
│   ├── ChatMessage.jsx    # একক মেসেজ (Sender/Receiver)
│   ├── ChatMessages.jsx   # সব মেসেজ লিস্ট দেখাবে
│   └── TypingIndicator.jsx # টাইপিং অ্যানিমেশন (Typing...)
│
├── App.jsx                # মূল অ্যাপ
├── App.css                # অ্যাপ এর কাস্টম স্টাইল
├── index.css              # টেইলউইন্ড কনফিগ স্টাইল
├── main.jsx               # এন্ট্রি পয়েন্ট (ReactDOM.createRoot)
 --- ### 1️⃣ প্রজেক্ট ক্লোন করুন
bash
git clone <repo-link>
# cd ai-chat-bot
## npm run dev
