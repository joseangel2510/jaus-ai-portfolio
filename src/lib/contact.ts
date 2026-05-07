const RAW_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "528130966833";
const LINKEDIN_URL =
  process.env.NEXT_PUBLIC_LINKEDIN_URL ??
  "https://www.linkedin.com/in/joseangelus/";

const DEFAULT_WHATSAPP_MESSAGE =
  "Hola José, vi tu sitio y quiero hablar sobre un proyecto.";

function buildWhatsAppUrl(message = DEFAULT_WHATSAPP_MESSAGE) {
  const number = RAW_WHATSAPP.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function formatWhatsAppDisplay() {
  const digits = RAW_WHATSAPP.replace(/\D/g, "");
  if (digits.length >= 12 && digits.startsWith("52")) {
    const rest = digits.slice(2);
    return `+52 ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6)}`;
  }
  return `+${digits}`;
}

export const contact = {
  whatsappNumber: RAW_WHATSAPP,
  whatsappDisplay: formatWhatsAppDisplay(),
  whatsappUrl: buildWhatsAppUrl(),
  buildWhatsAppUrl,
  linkedinUrl: LINKEDIN_URL,
};
