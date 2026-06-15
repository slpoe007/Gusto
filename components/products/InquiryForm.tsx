'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const inquiryTypes = [
  { id: 'quote', label: '询价' },
  { id: 'tech', label: '技术咨询' },
  { id: 'dealer', label: '经销商合作' },
  { id: 'other', label: '其他' },
];

export default function InquiryForm({ productName }: { productName?: string }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-8 text-center">
        <span className="text-5xl mb-4 block">✅</span>
        <h3 className="text-xl font-bold text-white mb-2">感谢您的咨询！</h3>
        <p className="text-gray-400 text-sm">我们的技术团队会在 1-2 个工作日内与您联系。</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-6 sm:p-8 space-y-5">
      <h3 className="text-xl font-bold text-white font-display">咨询<span className="text-[var(--color-primary)]">表单</span></h3>
      {productName && <p className="text-sm text-gray-400">产品：{productName}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">姓名 *</label>
          <input type="text" required className="w-full bg-[#0a0a0f] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[var(--color-primary)] focus:outline-none transition-colors" placeholder="您的姓名" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-300 mb-1.5">电话 *</label>
          <input type="tel" required className="w-full bg-[#0a0a0f] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[var(--color-primary)] focus:outline-none transition-colors" placeholder="您的电话" />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-300 mb-1.5">邮箱 *</label>
        <input type="email" required className="w-full bg-[#0a0a0f] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[var(--color-primary)] focus:outline-none transition-colors" placeholder="your@email.com" />
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-300 mb-1.5">咨询类型</label>
        <div className="flex flex-wrap gap-2">
          {inquiryTypes.map((t) => (
            <label key={t.id} className="flex items-center gap-1.5 text-sm text-gray-400 cursor-pointer hover:text-white transition-colors">
              <input type="radio" name="type" className="accent-[var(--color-primary)]" defaultChecked={t.id === 'quote'} />
              {t.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-300 mb-1.5">留言</label>
        <textarea rows={4} className="w-full bg-[#0a0a0f] border border-[var(--color-border)] rounded-lg px-4 py-2.5 text-sm text-white placeholder-gray-600 focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-none" placeholder="请描述您的需求..." />
      </div>

      <button type="submit" className="w-full py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold rounded-lg transition-colors duration-300">
        提交咨询
      </button>
    </form>
  );
}
