import * as React from "react"
import { parsePhoneNumber, getCountries, getCountryCallingCode } from 'libphonenumber-js'
import { cn } from "../../lib/utils"
import { Input } from "./input"

const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬' },
  { code: 'AE', name: 'UAE', flag: '🇦🇪' },
];

const PhoneInput = React.forwardRef(({ value, onChange, error, className }, ref) => {
  const [selectedCountry, setSelectedCountry] = React.useState(COUNTRIES[0]);
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [showDropdown, setShowDropdown] = React.useState(false);
  const dropdownRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handlePhoneChange = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);

    try {
      const callingCode = getCountryCallingCode(selectedCountry.code);
      const fullNumber = `+${callingCode}${number.replace(/\D/g, '')}`;
      const parsed = parsePhoneNumber(fullNumber, selectedCountry.code);

      if (parsed && parsed.isValid()) {
        onChange?.(parsed.formatInternational());
      } else {
        onChange?.(fullNumber);
      }
    } catch (err) {
      onChange?.(`+${getCountryCallingCode(selectedCountry.code)}${number.replace(/\D/g, '')}`);
    }
  };

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowDropdown(false);

    // Update the full phone number with new country code
    if (phoneNumber) {
      try {
        const callingCode = getCountryCallingCode(country.code);
        const fullNumber = `+${callingCode}${phoneNumber.replace(/\D/g, '')}`;
        const parsed = parsePhoneNumber(fullNumber, country.code);

        if (parsed && parsed.isValid()) {
          onChange?.(parsed.formatInternational());
        } else {
          onChange?.(fullNumber);
        }
      } catch (err) {
        onChange?.(`+${getCountryCallingCode(country.code)}${phoneNumber.replace(/\D/g, '')}`);
      }
    }
  };

  return (
    <div className={cn("relative", className)}>
      <div className="flex gap-2">
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 h-10 px-3 rounded-md border border-[var(--color-input)] bg-[var(--color-background)] hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-foreground)] transition-colors"
          >
            <span className="text-lg">{selectedCountry.flag}</span>
            <span className="text-sm text-[var(--color-muted-foreground)]">
              +{getCountryCallingCode(selectedCountry.code)}
            </span>
            <svg
              className={cn("w-4 h-4 transition-transform", showDropdown && "rotate-180")}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 w-64 max-h-60 overflow-y-auto bg-[var(--color-popover)] border border-[var(--color-border)] rounded-md shadow-lg z-50">
              {COUNTRIES.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 text-sm hover:bg-[var(--color-accent)] transition-colors text-left",
                    selectedCountry.code === country.code && "bg-[var(--color-accent)]"
                  )}
                >
                  <span className="text-lg">{country.flag}</span>
                  <span className="flex-1">{country.name}</span>
                  <span className="text-[var(--color-muted-foreground)]">+{getCountryCallingCode(country.code)}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <Input
          ref={ref}
          type="tel"
          value={phoneNumber}
          onChange={handlePhoneChange}
          placeholder="Phone number"
          className="flex-1"
        />
      </div>
      {error && (
        <p className="text-sm text-[var(--color-destructive)] mt-1">{error}</p>
      )}
    </div>
  );
});

PhoneInput.displayName = "PhoneInput"

export { PhoneInput }
