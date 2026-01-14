import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Siapa saja yang dapat menggunakan Arsana?",
    a: "Arsana ditujukan untuk siswa tunarungu dengan pendampingan orang tua dan guru agar proses belajar berjalan lebih optimal.",
  },
  {
    q: "Apa keunggulan Arsana dibandingkan platform belajar lainnya?",
    a: "Arsana menghadirkan video pembelajaran dengan bahasa isyarat, teks penjelasan, materi visual interaktif, serta navigasi yang ramah bagi siswa tunarungu.",
  },
  {
    q: "Bagaimana peran AI dalam proses pembelajaran di Arsana?",
    a: "AI pada Arsana membantu mengidentifikasi apakah siswa memahami materi melalui pola interaksi, progres belajar, dan hasil latihan, sehingga orang tua dan guru dapat memperoleh gambaran awal perkembangan belajar siswa.",
  },
  {
    q: "Bagaimana Arsana berkontribusi terhadap pendidikan inklusif?",
    a: "Arsana mendukung tercapainya SDGs tujuan ke-4 dengan membuka akses pendidikan yang lebih adil, setara, dan ramah bagi siswa tunarungu melalui pemanfaatan teknologi digital dan kecerdasan buatan.",
  },
];

export default function SupportFAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="pt-48 pb-20 relative overflow-hidden">
      {/* Container */}
      <div className="relative max-w-360 mx-auto px-8 md:px-16 lg:px-24 xl:px-32 z-10">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked <span className="text-cyan-500">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Jawaban untuk pertanyaan yang paling sering diajukan oleh pengguna kami.
          </p>
        </motion.div>

        {/* FAQ LIST */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = active === i;

            return (
              <motion.div
                key={i}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`rounded-3xl border bg-white shadow-sm overflow-hidden transition-all duration-300
                  ${isOpen ? "border-cyan-400" : "border-gray-100 shadow-sm hover:border-cyan-200"}
                `}
              >
                {/* HEADER */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex justify-between items-center px-8 py-6 text-left"
                >
                  <span className={`font-bold text-lg md:text-xl transition-colors duration-300 ${isOpen ? "text-cyan-600" : "text-gray-800"}`}>
                    {faq.q}
                  </span>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ml-4 transition-all duration-300
                      ${isOpen ? "bg-cyan-100 text-cyan-600" : "bg-gray-50 text-gray-400 group-hover:bg-cyan-50 group-hover:text-cyan-500"}
                    `}
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </button>

                {/* CONTENT */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 pt-0 text-gray-600 leading-relaxed text-lg border-t border-dashed border-gray-100 mt-2">
                        <br />
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}