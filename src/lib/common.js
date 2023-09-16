/**
 * Convert human readable quantity into the token's blockchain representation
 * @param {Float} satoshis
 * @param {Number} precision
 * @returns {Number}
 */
function blockchainFloat(satoshis, precision) {
    return satoshis * 10 ** precision;
}

/**
 * Copy the provided text to the user's clipboard
 * @param {String} text 
 */
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
      })
      .catch((error) => {
        console.error('Error copying text to clipboard:', error);
      });
  }

export {
    blockchainFloat,
    copyToClipboard
}