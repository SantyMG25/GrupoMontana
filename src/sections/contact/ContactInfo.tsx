import ButtonWtp from "@/components/ui/ButtonWtp";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || "Teléfono no disponible";
  const emailAddress = process.env.NEXT_PUBLIC_EMAIL || "Correo no disponible";

  return (
    <div className="space-y-6 text-gray-700">
      
      <div className="flex items-center gap-4">
        <FaPhoneAlt className="text-[#C5A059]" />
        <span>{phoneNumber}</span>
      </div>

      <div className="flex items-center gap-4">
        <FaEnvelope className="text-[#C5A059]" />
        <span>{emailAddress}</span>
      </div>

      <ButtonWtp />

    </div>
  );
}