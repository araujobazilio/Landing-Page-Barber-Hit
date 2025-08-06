/**
 * Declarações de tipos globais para a Landing Page Barber HIT
 */

/**
 * Função de rastreamento de conversão do Google Ads
 * Definida no index.html como um script global
 */
declare function gtag_report_conversion(url?: string): boolean;

/**
 * Interface para a função gtag do Google Analytics
 */
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
}
