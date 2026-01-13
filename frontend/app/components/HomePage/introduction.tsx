export default function IndexHero() {
  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-150 h-150 bg-cyan-50/50 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-teal-50/50 rounded-full blur-3xl opacity-40 translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      <div
        className="relative w-full overflow-hidden pt-32 pb-16"
        style={{ minHeight: "90vh" }}
      >
        {/* Main Container */}
        <div className="relative max-w-360 mx-auto px-8 md:px-16 lg:px-24 xl:px-32 h-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
                  <span className="text-gray-900">Hai Kenalin!</span>
                  <br />
                  <span className="text-gray-900">Aku </span>
                  <span className="inline-block font-bold arsanaText">
                    Arsana
                  </span>
                </h1>
              </div>

              <p className="text-gray-700 text-lg lg:text-2xl leading-relaxed max-w-lg font-light italic">
                Platform Pembelajaran Digital
                <br />
                Untuk Sahabat Tunarungu
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-10 py-5 bg-linear-to-r from-cyan-400 to-teal-400 text-white font-bold rounded-full shadow-lg hover:shadow-cyan-200/50 transform hover:scale-105 transition-all duration-300">
                  Kepoin Arsana Lebih Dalam Yuk!
                </button>
              </div>
            </div>

         
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-xl">
                <div className="relative bg-white p-6 md:p-10 rounded-3xl overflow-hidden">
                  <img
                    src="../public/Group.png" 
                    alt="Ilustrasi Utama Arsana"
                    className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-orange-100 rounded-full blur-2xl opacity-60 -z-10"></div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .arsanaText {
          opacity: 0;
          background-image: linear-gradient(
            to right,
            #22d3ee,
            #14b8a6,
            #06b6d4,
            #22d3ee
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: fadeIn 1.8s ease-out forwards,
            gradientFlowContinuous 3s linear 1.8s infinite;
        }

        @keyframes fadeIn {
          0% { opacity: 0; background-position: 0% center; }
          100% { opacity: 1; background-position: 100% center; }
        }

        @keyframes gradientFlowContinuous {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </div>
  );
}