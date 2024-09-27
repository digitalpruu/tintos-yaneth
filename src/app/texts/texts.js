const title = "Tintos Yaneth";
const email = "Yabetzubieta42@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los productos de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573222909974"; // Incluido el prefijo +57

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Tintos Yaneth, nos especializamos en ofrecer tintos, avena, aromática y más, brindando la mejor compañía para reducir el estrés, porque sabemos que una buena risa y una taza de tinto pueden hacer tu día mucho mejor.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "La risa reduce el estrés, más si es con buena compañía y una taza de tinto.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com", // Enlace base de Facebook
        instagram: "https://www.instagram.com", // Enlace base de Instagram
        tiktok: "https://www.tiktok.com", // Enlace base de TikTok
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
