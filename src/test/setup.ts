import '@testing-library/jest-dom/vitest'; // Vitest 用の拡張を読み込む
import { cleanup } from '@testing-library/react';
import { afterEach } from 'vitest';

// テストごとに DOM をクリーンアップする（メモリリーク防止）
afterEach(() => {
  cleanup();
});