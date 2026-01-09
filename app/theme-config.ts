// ============================================
// THEME CONFIGURATION - Toggle by commenting/uncommenting
// ============================================

// A. PREMIUM DARK (Current: Deep Navy #000D1A, Gold accents, Glassmorphism)
export const THEME_A = {
  name: 'PREMIUM DARK',
  base: '#000D1A',
  baseLight: '#001A33',
  baseDark: '#000814',
  primary: '#D4AF37',
  primaryLight: '#FFD700',
  text: '#FFFFFF',
  textSecondary: '#E5E7EB',
  textMuted: '#9CA3AF',
  background: '#000D1A',
  backgroundSecondary: '#001A33',
  glass: 'rgba(0, 13, 26, 0.4)',
  glassStrong: 'rgba(0, 13, 26, 0.7)',
  glassBorder: 'rgba(212, 175, 55, 0.1)',
  overlay: 'rgba(0, 0, 0, 0.6)',
  meshGradient: 'linear-gradient(135deg, #000D1A 0%, #001A33 50%, #000814 100%)',
}

// B. CLEAN MEDICAL (Base: White/Light Gray #F8FAFC, Primary: Medical Blue #2563EB, Accents: Soft Teal)
export const THEME_B = {
  name: 'CLEAN MEDICAL',
  base: '#F8FAFC',
  baseLight: '#FFFFFF',
  baseDark: '#E2E8F0',
  primary: '#2563EB',
  primaryLight: '#3B82F6',
  text: '#0F172A',
  textSecondary: '#334155',
  textMuted: '#64748B',
  background: '#F8FAFC',
  backgroundSecondary: '#FFFFFF',
  glass: 'rgba(248, 250, 252, 0.8)',
  glassStrong: 'rgba(255, 255, 255, 0.95)',
  glassBorder: 'rgba(37, 99, 235, 0.2)',
  overlay: 'rgba(15, 23, 42, 0.5)',
  meshGradient: 'linear-gradient(135deg, #F8FAFC 0%, #E0F2FE 50%, #FFFFFF 100%)',
  accent: '#14B8A6', // Soft Teal
}

// C. MODERN TRUST (Base: Pure White, Primary: Navy Blue #001F3F, Accents: Bright Orange/Gold)
export const THEME_C = {
  name: 'MODERN TRUST',
  base: '#FFFFFF',
  baseLight: '#F9FAFB',
  baseDark: '#F3F4F6',
  primary: '#001F3F',
  primaryLight: '#003366',
  text: '#111827',
  textSecondary: '#374151',
  textMuted: '#6B7280',
  background: '#FFFFFF',
  backgroundSecondary: '#F9FAFB',
  glass: 'rgba(255, 255, 255, 0.9)',
  glassStrong: 'rgba(255, 255, 255, 0.95)',
  glassBorder: 'rgba(0, 31, 63, 0.15)',
  overlay: 'rgba(0, 0, 0, 0.4)',
  meshGradient: 'linear-gradient(135deg, #FFFFFF 0%, #F3F4F6 50%, #E5E7EB 100%)',
  accent: '#F97316', // Bright Orange
}

// ============================================
// ACTIVE THEME - Change this to switch themes
// ============================================
// Uncomment ONE theme below:

// export const ACTIVE_THEME = THEME_A  // PREMIUM DARK
export const ACTIVE_THEME = THEME_B  // CLEAN MEDICAL
// export const ACTIVE_THEME = THEME_C  // MODERN TRUST
