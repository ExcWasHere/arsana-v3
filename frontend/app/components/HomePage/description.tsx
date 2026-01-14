export default function IndexFeatures() {
  return (
    <section className="relative min-h-screen overflow-hidden py-24 lg:py-32">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32 max-w-360 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-10 mb-20 lg:mb-32">
          <div className="lg:w-2/3">
            <h2 className="text-sm font-bold tracking-widest text-cyan-600 uppercase mb-4">
              Tentang Platform
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Belajar Pakai Caramu, <br />
              <span className="text-cyan-500">Arsana Siap Temenin Kamu</span>
            </h1>
          </div>
          <div className="lg:w-1/3 pb-2">
            <p className="text-lg text-gray-600 leading-relaxed text-justify lg:text-left border-l-4 border-cyan-200 pl-6">
               Arsana adalah platform pembelajaran digital inklusif yang dirancang khusus untuk mendukung siswa tunarungu melalui pendekatan visual, bahasa isyarat, dan teknologi AI.
            </p>
          </div>
        </div>

        {/* Feature Section */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Image Side */}
          <div className="relative order-2 lg:order-1 group">
            <div className="absolute inset-0 bg-cyan-200 rounded-3xl transform rotate-3 scale-[1.02] transition-transform duration-500 group-hover:rotate-2 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-teal-100 rounded-3xl transform -rotate-2 scale-[1.02] transition-transform duration-500 group-hover:-rotate-1 group-hover:scale-[1.04]" />

            <img
              src="favicon.ico"
              alt="TemuIn Banner"
              className="relative w-full h-125 object-cover rounded-3xl shadow-xl transition-transform duration-500 hover:-translate-y-2 bg-white"
            />

            {/* Floating decoration */}
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-cyan-100 rounded-full blur-2xl opacity-60 z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mengapa harus pilih <span className="text-cyan-500">Arsana</span>?
              </h2>
              <p className="text-gray-600 text-lg">
                Solusi lengkap untuk mendukung sahabat tunarungu dalam belajar.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  id: 1,
                  title: "Pembelajaran Visual Interaktif",
                  desc: "Materi disajikan dengan visual, teks, dan bahasa isyarat agar mudah dipahami.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 10h.01" />
                    </svg>
                  )
                },
                {
                  id: 2,
                  title: "Akses Gratis untuk Sahabat Tunarungu",
                  desc: "Materi belajar visual dan bahasa isyarat bisa diakses tanpa biaya.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )
                },
                {
                  id: 3,
                  title: "Pendampingan Berbasis AI",
                  desc: "AI membantu menyesuaikan materi sesuai kemampuan belajar siswa, mendeteksi apakah siswa memahami materi atau belum, dan memberikan feedback secara real-time.",
                  icon: (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  )
                }
              ].map((item) => (
                <div
                  key={item.id}
                  className="group relative flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-xs hover:border-cyan-200 hover:shadow-xl hover:shadow-cyan-100/40 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-teal-50 text-teal-500 group-hover:bg-linear-to-br group-hover:from-cyan-400 group-hover:to-teal-500 group-hover:text-white transition-all duration-300 shadow-xs">
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1 group-hover:text-cyan-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>

                  {/* Decorative faint number */}
                  <span className="absolute top-4 right-5 text-6xl font-black text-gray-50 opacity-[0.03] group-hover:opacity-[0.08] group-hover:text-cyan-500 transition-all duration-500 pointer-events-none select-none">
                    {item.id}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}