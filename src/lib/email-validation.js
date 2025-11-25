// List of popular free email carriers that should be blocked
const BLOCKED_EMAIL_DOMAINS = [
  // Major providers
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'mail.com',
  'protonmail.com',
  'proton.me',
  'zoho.com',
  'yandex.com',
  'gmx.com',
  'inbox.com',
  'live.com',
  'msn.com',

  // Regional variants
  'yahoo.co.uk',
  'yahoo.co.in',
  'yahoo.fr',
  'yahoo.de',
  'hotmail.co.uk',
  'hotmail.fr',
  'hotmail.de',
  'googlemail.com',

  // Other popular services
  'tutanota.com',
  'fastmail.com',
  'hey.com',
  'mail.ru',
  'qq.com',
  '163.com',
  '126.com',
  'sina.com',
  'sohu.com',

  // Temporary/disposable
  'tempmail.com',
  'guerrillamail.com',
  'mailinator.com',
  '10minutemail.com',
];

/**
 * Validates if an email address is a business email (not from popular carriers)
 * @param {string} email - The email address to validate
 * @returns {Object} - { isValid: boolean, error: string|null }
 */
export function validateBusinessEmail(email) {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }

  // Extract domain from email
  const domain = email.split('@')[1].toLowerCase();

  // Check if domain is in blocked list
  if (BLOCKED_EMAIL_DOMAINS.includes(domain)) {
    return {
      isValid: false,
      error: 'Please use your business email address. Personal email addresses are not accepted.'
    };
  }

  return { isValid: true, error: null };
}
