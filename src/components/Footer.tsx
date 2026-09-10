import React, { useState } from "react";
import { PRODUCT_CONFIG } from "../config";
import { X, Mail, ShieldAlert } from "lucide-react";

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<"terms" | "privacy" | "contact" | null>(null);

  const closeModal = () => setModalType(null);

  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 text-slate-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Info */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-emerald-700 flex items-center justify-center text-white font-bold text-sm">
              ⚽
            </div>
            <div>
              <span className="text-base font-extrabold text-slate-900 tracking-tight font-display">
                FÚTBOL<span className="text-emerald-600">+</span>
              </span>
              <p className="text-[11px] text-slate-500">
                La biblioteca profesional de ejercicios de fútbol
              </p>
            </div>
          </div>

          {/* Legal and Support Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-medium text-slate-600">
            <button
              onClick={() => setModalType("terms")}
              className="hover:text-emerald-600 transition"
              id="footer-terms-btn"
            >
              Términos y Condiciones
            </button>
            <button
              onClick={() => setModalType("privacy")}
              className="hover:text-emerald-600 transition"
              id="footer-privacy-btn"
            >
              Política de Privacidad
            </button>
            <button
              onClick={() => setModalType("contact")}
              className="hover:text-emerald-600 transition"
              id="footer-contact-btn"
            >
              Contacto
            </button>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-slate-400">
          <p>
            © {new Date().getFullYear()} Fútbol+. Todos los derechos reservados.
          </p>
          <p className="max-w-xl">
            Este sitio web no forma parte del sitio web de Meta, Facebook Inc. o Google. Adicionalmente, este sitio NO está respaldado por Meta ni Google de ninguna manera.
          </p>
        </div>
      </div>

      {/* Modal Dialog for Terms / Privacy / Contact */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 text-slate-800 shadow-2xl border border-slate-200 relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {modalType === "terms" && (
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">
                  Términos y Condiciones
                </h3>
                <div className="text-xs space-y-2.5 text-slate-600 leading-relaxed">
                  <p>
                    Bienvenido a Fútbol+. Al adquirir acceso a nuestro producto digital, aceptas los siguientes términos de servicio:
                  </p>
                  <p>
                    <strong>1. Licencia de Uso:</strong> El acceso al material, ejercicios y bonos es personal e intransferible para el comprador. Queda prohibida la reventa, redistribución masiva o comercialización no autorizada.
                  </p>
                  <p>
                    <strong>2. Naturaleza del Producto:</strong> Fútbol+ es una plataforma web directa de consulta didáctica y deportiva para entrenadores y jugadores.
                  </p>
                  <p>
                    <strong>3. Entrega Digital:</strong> La entrega del acceso es electrónica e inmediata tras la confirmación del pago en la pasarela externa segura.
                  </p>
                </div>
              </div>
            )}

            {modalType === "privacy" && (
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">
                  Política de Privacidad
                </h3>
                <div className="text-xs space-y-2.5 text-slate-600 leading-relaxed">
                  <p>
                    En Fútbol+ nos tomamos muy en serio la privacidad de tus datos personales:
                  </p>
                  <p>
                    <strong>1. Datos Recopilados:</strong> Únicamente se solicita el correo electrónico necesario para el envío de tu acceso al producto.
                  </p>
                  <p>
                    <strong>2. Seguridad del Pago:</strong> Todos los datos de facturación son procesados por pasarelas certificadas con cifrado SSL de 256 bits. Fútbol+ nunca almacena números de tarjeta ni datos bancarios.
                  </p>
                  <p>
                    <strong>3. Confidencialidad:</strong> No compartimos ni vendemos tu información a terceros bajo ninguna circunstancia.
                  </p>
                </div>
              </div>
            )}

            {modalType === "contact" && (
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-3">
                  Atención y Contacto
                </h3>
                <div className="text-xs space-y-3 text-slate-600 leading-relaxed">
                  <p>
                    ¿Tienes alguna duda sobre tu acceso o necesitas soporte técnico con Fútbol+? Estamos a tu disposición:
                  </p>
                  <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 flex items-center gap-2.5 font-medium">
                    <Mail className="w-4 h-4 text-emerald-700" />
                    <span>{PRODUCT_CONFIG.supportEmail}</span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Tiempo medio de respuesta: menos de 24 horas en días laborables.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
