import { useState, useEffect } from 'react';

export default function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : null,
      height: isClient ? window.innerHeight : null
    };
  }

  return getSize();
} 