import ButtonWtp from "@/components/ui/ButtonWtp";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="space-y-6 text-gray-700">
      
      <div className="flex items-center gap-4">
        <FaPhoneAlt className="text-[#C5A059]" />
        <span>+57 311 374 3784</span>
      </div>

      <div className="flex items-center gap-4">
        <FaEnvelope className="text-[#C5A059]" />
        <span>correo@empresa.com</span>
      </div>

      <ButtonWtp />

    </div>
  );
}