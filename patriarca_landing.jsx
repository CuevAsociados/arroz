import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, PackageSearch, X } from "lucide-react"; // Iconos

const palette = {
  bgDeep: "from-emerald-950 via-emerald-900 to-emerald-950",
  bgSoft: "bg-emerald-50",
  textDeep: "text-emerald-950",
  textSoft: "text-emerald-700",
  accent: "#C9A227", // dorado elegante
};

export default function ElPatriarcaLanding() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`min-h-screen w-full bg-gradient-to-b ${palette.bgDeep} text-white`}>
      
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-25 pointer-events-none" style={{
          background: `radial-gradient(700px 400px at 85% 10%, ${palette.accent}22, transparent 60%)`,
        }} />
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              El Patriarca:
              <span className="block font-extrabold" style={{ color: palette.accent }}>
                arroz envejecido, rendidor y de calidad
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-emerald-100 text-lg">
              Arroz envejecido, nutritivo y cuidadosamente seleccionado de calidad prémium para una mesa exigente.
            </p>

            {/* BOTONES PRINCIPALES */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              
              {/* BOTÓN QUIERO DISTRIBUIR */}
              <a
                href="https://wa.me/593992210706?text=Hola%20quiero%20ser%20distribuidor%20de%20El%20Patriarca"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-2xl px-6 py-3 bg-emerald-600 hover:bg-emerald-700 transition shadow"
              >
                <PackageSearch size={20} /> Quiero distribuir
              </a>

              {/* BOTÓN CONOCER PRODUCTO */}
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-2 rounded-2xl px-6 py-3 border border-white/20 hover:bg-white/10 transition"
              >
                <img src="/assets/arroz-patriarca.png" alt="El Patriarca – Arroz" className="h-6 w-6 object-contain" /> Conocer el producto
              </button>
            </div>

            {/* SELLITOS */}
            <div className="mt-8 flex items-center gap-6">
              <img src="/assets/sello-producto-seleccionado.png" alt="Producto seleccionado" className="h-10 w-auto object-contain" />
              <img src="/assets/hecho-en-ecuador.png" alt="Hecho en Ecuador" className="h-10 w-auto object-contain" />
              <div className="text-sm text-emerald-200">Grano largo • Proceso de selección • Tipo exportación</div>
            </div>

            {/* CORREO AL COSTADO */}
            <div className="mt-6 text-emerald-200 text-sm">
              📧 Escríbenos: <span className="underline underline-offset-2">cueva_asociados@outlook.com</span>
            </div>

          </motion.div>

          {/* Tarjeta con botón Solicitar cotización */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.15 }} className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-white/5 blur-2xl" />
            <div className="relative rounded-[2rem] bg-white p-6 md:p-10 shadow-2xl">
              <div className="grid gap-6 md:grid-cols-2 items-center">
                <img src="/assets/mascota-patriarca.png" alt="El Patriarca – Mascota" className="w-full h-64 object-contain" />
                <div>
                  <h3 className={`text-2xl font-semibold ${palette.textDeep}`}>Nuestro arroz</h3>
                  <ul className={`mt-4 space-y-3 text-base ${palette.textSoft}`}>
                    <li>• Envejecido para un grano más suelto y sabroso.</li>
                    <li>• Selección estricta: rendimiento superior en cocción.</li>
                    <li>• Nutritivo y consistente en cada lote.</li>
                    <li>• Disponible en Costa y Sierra.</li>
                  </ul>
                </div>
              </div>

              {/* BOTÓN SOLICITAR COTIZACIÓN */}
              <div id="producto" className="mt-8 rounded-3xl border border-emerald-100/60 p-5 md:p-6 bg-gradient-to-br from-white to-emerald-50">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h4 className={`text-xl font-bold ${palette.textDeep}`}>El Patriarca 25 lb – Grano largo</h4>
                    <p className={`${palette.textSoft} mt-1`}>Consistencia, sabor y rendimiento en cada saco. Perfecto para familias y negocios Horeca.</p>
                  </div>
                  <a
                    href="https://wa.me/593992210706?text=Hola%20quiero%20cotizar%20El%20Patriarca%2025lb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl px-5 py-3"
                    style={{ backgroundColor: palette.accent, color: "#132d1f" }}
                  >
                    <MessageCircle size={20} /> Solicitar cotización
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MODAL QUIENES SOMOS + PRODUCTO */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-8 relative text-emerald-900 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-emerald-900 hover:text-emerald-700"
            >
              <X size={24} />
            </button>
            
            {/* TEXTO ARROZ ENVEJECIDO */}
            <h2 className="text-3xl font-bold mb-6">Nuestro arroz</h2>
            <p className="leading-8 text-lg text-emerald-800/90 mb-8">
              Nuestro arroz es el resultado de años de experiencia y perfeccionamiento en la industria arrocera. Cada grano pasa por un <strong>proceso de selección minuciosa</strong>, donde solo se eligen los mejores lotes. Posteriormente es <strong>envejecido bajo condiciones controladas</strong>, lo que permite que adquiera una textura suelta, un sabor más intenso y un aroma que lo diferencia claramente de un arroz común. Este proceso asegura que el producto final sea <strong>rendidor, consistente y de calidad superior</strong>, capaz de cumplir con las exigencias de hogares, restaurantes y cadenas de distribución que valoran la excelencia.
            </p>

            {/* TEXTO QUIENES SOMOS */}
            <h2 className="text-3xl font-bold mb-6">¿Quiénes somos?</h2>
            <p className="leading-8 text-lg text-emerald-800/90 mb-4">
              Cueva & Asociados nació hace más de 50 años gracias a la visión de un fundador que dedicó su vida al comercio y alquiler de materiales de alta resistencia para la industria marítima. Su esfuerzo y compromiso marcaron el inicio de una historia basada en valores sólidos: trabajo, honestidad y excelencia.
            </p>
            <p className="leading-8 text-lg text-emerald-800/90 mb-4">
              Hoy, ese legado se mantiene vivo y ha tomado un nuevo rumbo bajo la dirección exclusiva de sus actuales representantes, quienes junto con su familia han transformado la empresa hacia la producción, distribución y exportación de alimentos de primera necesidad, con especial énfasis en el arroz, bajo la marca <strong>El Patriarca</strong>.
            </p>
            <p className="leading-8 text-lg text-emerald-800/90">
              Este cambio no es solo una evolución empresarial, sino la reafirmación de una herencia que se convierte en futuro, ofreciendo a los hogares un producto que simboliza tradición, confianza y calidad.
            </p>
          </div>
        </div>
      )}

      {/* ... resto de tu código ... */}
    </div>
  );
}
