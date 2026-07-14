import { describe, expect, it } from 'vitest';
import { conversionHint } from './conversion-hint.js';

describe('conversionHint', () => {
  it('returns a reliable published conversion', () => {
    expect(conversionHint('footwear-adult', 'EU', '42', 'UK')).toBe('8');
  });

  it('does not invent a conversion for unreliable, unknown or identical pairs', () => {
    expect(conversionHint('footwear-kids', 'EU', '28', 'US')).toBeNull();
    expect(conversionHint('ski-boots', 'EU', '42', 'UK')).toBeNull();
    expect(conversionHint('footwear-adult', 'EU', '42', 'EU')).toBeNull();
  });
});
