export const SITE_CONFIG = {
  TITLE: "CENTRALIZANDO - Gestão de Elite para Barbeiros",
  BRAND_NAME: "CENTRALIZANDO",
  DESCRIPTION: "Sistema exclusivo para barbearias de alta performance com agendamento via WhatsApp e controle total."
};

export const CONFIG_VIDEOS = {
  // URLs do Vimeo conforme solicitado
  CLIENT_PAGE: "https://player.vimeo.com/video/1163782276?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479",
  BARBER_PAGE: "https://player.vimeo.com/video/1163785200?badge=0&autopause=0&player_id=0&app_id=58479"
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
