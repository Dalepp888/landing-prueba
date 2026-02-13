interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const faqItems: FAQItem[] = [
    {
        id: "1",
        question: "¿Es necesario tener tarjeta en USD?",
        answer: "No. Aceptamos transferencias en CUP, MLC y criptomonedas (USDT). Pensado para la economía cubana.",
    },
    {
        id: "2",
        question: "¿Qué pasa si el SMS no llega?",
        answer: "Solo cobramos por SMS entregados (confirmación de la red). Si falla, el crédito se devuelve a tu cuenta automáticamente",
    },
    {
        id: "3",
        question: "¿Puedo personalizar el Sender ID?",
        answer: "Sí, en los planes Team y superiores puedes registrar el nombre de tu negocio para que aparezca como remitente",
    },
    {
        id: "4",
        question: "¿Tienen plugin para WordPress/WooCommerce?",
        answer: "¡Sí! Tenemos un plugin oficial gratuito. Instalar, poner API Key y listo",
    },
];