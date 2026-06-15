'use client';

import { motion } from 'framer-motion';

interface Driver {
  id: string;
  name: string;
  nameZH: string;
  number: string;
  team: string;
  bio: string;
  achievements: string[];
  image: string;
}

interface DriverCardProps {
  driver: Driver;
  detailed?: boolean;
  index?: number;
}

export default function DriverCard({ driver, detailed = false, index = 0 }: DriverCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-400"
    >
      <div className="aspect-[3/4] bg-gradient-to-b from-gray-800 via-gray-850 to-gray-900 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.08),transparent_70%)]" />
        <span className="text-[160px] font-display font-bold text-gray-700/20 pointer-events-none select-none">#{driver.number}</span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-red-900/40 to-red-800/10 border-2 border-red-900/30 flex items-center justify-center text-4xl font-display font-bold text-[var(--color-primary)]">
            #{driver.number}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a1a2e] to-transparent" />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-3xl font-display font-bold text-[var(--color-primary)]">#{driver.number}</span>
          <div>
            <h3 className="text-lg font-bold text-white">{driver.name}</h3>
            <p className="text-sm text-gray-400">{driver.nameZH}</p>
          </div>
        </div>
        <p className="text-sm text-gray-400 mb-4 leading-relaxed">{driver.bio}</p>
        {detailed && (
          <div className="space-y-2 mb-4">
            <h4 className="text-xs font-semibold text-gray-300 uppercase tracking-wider">赛事成就</h4>
            {driver.achievements.map((a) => (
              <p key={a} className="text-xs text-gray-500 flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full mt-1.5 shrink-0" />
                {a}
              </p>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
