const title = "Tintos Yaneth";
const email = ""; // Información no proporcionada
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy muy interesado en tus productos de " + title + " y me gustaría recibir más información sobre ellos. Espero poder hablar pronto contigo para aclarar algunas dudas. ¡Gracias!"
);
const numeroWhatsApp = ""; // Información no proporcionada

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "Tintos Yaneth ofrece una variedad de productos para disfrutar y compartir momentos especiales. Nos especializamos en la venta de tintos, avena, aromáticas y otros productos que acompañan tus mejores momentos. Creemos que la risa reduce el estrés, y qué mejor manera de hacerlo que con una taza de tinto y buena compañía.",
        description2: "En Tintos Yaneth, estamos comprometidos en ofrecerte una experiencia única con nuestros productos. Cada taza está hecha con cuidado para asegurar que disfrutes de un sabor excepcional y de la comodidad que solo una buena bebida puede ofrecer."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email
    },
    footer: {
        slogan: {
            p1: "La risa reduce el estrés más si es con buena compañía y una taza de tinto",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/",
        instagram: "https://www.instagram.com/",
        tiktok: "https://www.tiktok.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`
    },
};

export default textos;
