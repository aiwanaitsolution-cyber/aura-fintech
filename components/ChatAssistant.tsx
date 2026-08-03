"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageCircle, Phone, Send, Sparkles, X } from "lucide-react";
import { services, site } from "@/lib/client-data";

const prompts = [
  "Which loan is right for my business?",
  "What documents are required?",
  "Help me calculate EMI",
  "I want to speak on WhatsApp"
];

function answerFor(prompt: string) {
  const lower = prompt.toLowerCase();
  if (lower.includes("document")) return "Most cases start with KYC, bank statements, income proof and product-specific papers. Business cases may also need GST returns, ITRs and financial statements.";
  if (lower.includes("emi")) return "Use the EMI calculator to test amount, rate and tenure before a lender conversation. The result is indicative, not a sanction.";
  if (lower.includes("whatsapp")) return "You can continue on WhatsApp with your loan type, amount, city and basic profile. Aura will respond by appointment.";
  return "For business funding, Aura can review your use case, documents and repayment capacity, then guide you toward a suitable lender category where applicable.";
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hi, I can help you find a loan pathway, prepare documents or connect you with Aura on WhatsApp." }
  ]);
  const [input, setInput] = useState("");

  const whatsappUrl = useMemo(() => {
    const context = messages.map((message) => `${message.role}: ${message.text}`).slice(-4).join("\n");
    return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(`Hello Aura Fintec Services, I need help with my finance requirement.\n\n${context}`)}`;
  }, [messages]);

  function send(text: string) {
    const clean = text.trim();
    if (!clean) return;
    setMessages((current) => [...current, { role: "user", text: clean }, { role: "assistant", text: answerFor(clean) }]);
    setInput("");
  }

  return (
    <div className="chat-assistant">
      <AnimatePresence>
        {open && (
          <motion.div className="chat-panel" initial={{ opacity: 0, y: 18, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 12, scale: 0.97 }}>
            <div className="chat-head">
              <div><Sparkles size={18} /><span>Aura Assistant</span></div>
              <button onClick={() => setOpen(false)} aria-label="Close assistant"><X size={18} /></button>
            </div>
            <div className="chat-body">
              {messages.map((message, index) => <p className={`chat-message ${message.role}`} key={`${message.role}-${index}`}>{message.text}</p>)}
            </div>
            <div className="chat-suggestions">
              {prompts.map((prompt) => <button key={prompt} onClick={() => send(prompt)}>{prompt}</button>)}
            </div>
            <form className="chat-input" onSubmit={(event) => { event.preventDefault(); send(input); }}>
              <input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about loans, documents or EMI" aria-label="Ask Aura assistant" />
              <button aria-label="Send message"><Send size={17} /></button>
            </form>
            <div className="chat-actions">
              <a href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}><Phone size={16} /> Call</a>
              <Link href={`/services/${services[1].slug}`}>Business Loan</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button className="chat-toggle" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Open Aura assistant">
        <Bot size={22} />
        <span>Chat</span>
      </button>
    </div>
  );
}
