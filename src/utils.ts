/**
 * Utilitários para a Landing Page Barber HIT
 */

/**
 * Retorna o link de afiliado padrão para os botões da landing page
 * @param {boolean} includeDP - Se deve incluir o parâmetro dp=1 no link
 * @returns {string} Link de afiliado formatado
 */
export const getAffiliateLink = (includeDP: boolean = true): string => {
  const baseLink = "https://go.hotmart.com/D101160980B";
  return includeDP ? `${baseLink}?dp=1` : baseLink;
};

/**
 * Cria um elemento de botão com link de afiliado
 * @param {string} text - Texto do botão
 * @param {string} className - Classes CSS para estilização
 * @param {boolean} includeDP - Se deve incluir o parâmetro dp=1 no link
 * @param {React.ReactNode} icon - Ícone opcional para o botão
 * @returns {JSX.Element} Elemento de botão com link
 */
export const createAffiliateButton = (
  text: string,
  className: string,
  includeDP: boolean = true,
  icon?: React.ReactNode
): JSX.Element => {
  return (
    <a 
      href={getAffiliateLink(includeDP)} 
      target="_blank" 
      rel="noopener noreferrer"
      className={className}
    >
      {icon && icon}
      {text}
    </a>
  );
};

/**
 * Registra cliques nos botões de afiliado para análise
 * @param {string} buttonLocation - Localização do botão na página
 */
export const trackAffiliateClick = (buttonLocation: string): void => {
  // Implementação futura para analytics
  console.log(`Clique no botão de afiliado: ${buttonLocation}`);
  
  // Aqui poderia ser integrado com Google Analytics, Facebook Pixel, etc.
};
