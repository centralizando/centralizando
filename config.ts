
export const SITE_CONFIG = {
  TITLE: "CENTRALIZANDO - Gestão de Elite para Barbeiros",
  BRAND_NAME: "CENTRALIZANDO",
  DESCRIPTION: "Sistema exclusivo para barbearias de alta performance com agendamento via WhatsApp e controle total."
};

export const CONFIG_VIDEOS = {
  // Substitua os IDs após 'embed/' pelos IDs reais dos seus vídeos do YouTube
  CLIENT_PAGE: "https://www.youtube.com/watch?v=fdFWSbTOfAQ",
  BARBER_PAGE: "https://www.youtube.com/watch?v=ReDSINTsjmU"
};

/**
 * CONFIGURAÇÃO DE CONTATO CENTRALIZADA
 * Altere apenas o valor da constante PHONE para atualizar o sistema inteiro.
 */
const PHONE = "5517996490503";

export const CONTACT_INFO = {
  PHONE_NUMBER: PHONE,
  // Representação amigável para exibição visual
  DISPLAY_PHONE: "(16) 99649-0503",
  DEFAULT_MESSAGE: `Olá! Quero saber mais sobre o seu sistema de agenda ${SITE_CONFIG.BRAND_NAME}`,
  /**
   * Gera o link direto para o WhatsApp com o número e mensagem configurados.
   */
  get WhatsAppLink() {
    return `https://api.whatsapp.com/send/?phone=${this.PHONE_NUMBER}&text=${encodeURIComponent(this.DEFAULT_MESSAGE)}`;
  }
};
