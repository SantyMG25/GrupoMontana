import Button from "@/components/ui/Button";
import { FaWhatsapp } from "react-icons/fa6";

export default function WtpButton() {
    return (
        <a
            href="https://wa.me/57NUMERO?text=Hola,%20quiero%20cotizar%20un%20proyecto."
            target="_blank"
            rel="noopener noreferrer"
        >
            <Button variant="whatsapp" className="flex items-center gap-2">
                <FaWhatsapp className="text-xl " />
                Solicitar Asesoría
            </Button>
        </a>
    )
}