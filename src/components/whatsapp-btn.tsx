
const WhatsAppButton = () => {
    const phoneNumber = '8107091860325';
    const message = 'Olá Eike, vi o seu portfólio e gostaria de falar com você!';
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (
        <button color="green" >
            Enviar mensagem no WhatsApp
        </button>
    );
};

export default WhatsAppButton;
