import { FaWhatsapp } from "react-icons/fa6";

export default function CtaWhatsappFloating() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=Hola,%20quiero%20cotizar%20un%20proyecto.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-green-500 w-13 h-13 text-white shadow-lg transition hover:bg-green-600 hover:scale-105"
    >
      <FaWhatsapp className="text-4xl" />
    </a>
  );
}