export default function IndexTips() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 max-w-360 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-4">
            Panduan Pengguna
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Tips to <span className="text-cyan-500">Use</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Arsana bantu kamu belajar step by step, tanpa ribet dan lebih mudah dipahami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">

          {[
            {
              title: "Pilih Kelas & Materi",
              desc: "Sesuaikan materi belajar dengan jenjang dan kebutuhan siswa.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              )
            },
            {
              title: "Belajar dengan Nyaman",
              desc: "Nikmati materi dengan video, teks, dan bahasa isyarat.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              )
            },
            {
              title: "Latihan & Evaluasi",
              desc: "Uji pemahaman melalui latihan interaktif yang memanfaatkan teknologi AI.",
              icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-100/40 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="relative mb-6">

                <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-cyan-50 to-teal-50 flex items-center justify-center text-teal-500 shadow-inner group-hover:from-cyan-500 group-hover:to-teal-500 group-hover:text-white transition-all duration-500">
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors whitespace-nowrap">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}