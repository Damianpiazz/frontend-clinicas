"use client";

import { useEffect, useState } from "react";

type Session = {
  user?: {
    name?: string;
    email?: string;
    image?: string;
  };
  accessToken?: string;
};

/**
 * Cache en memoria de la sesión
 *
 * Permite evitar múltiples requests a `/api/auth/session`
 * cuando varios componentes consumen este hook.
 *
 * Nota:
 * - Vive mientras dure el ciclo de vida de la app (reload limpia el cache)
 */
let cachedSession: Session | null = null;

/**
 * useSession
 *
 * Hook global para obtener la sesión actual del usuario desde Auth.js.
 *
 * Responsabilidad:
 * - Obtener la sesión desde `/api/auth/session`
 * - Exponer estado de autenticación
 * - Evitar múltiples requests mediante cache en memoria
 *
 * Cómo funciona:
 * 1. Inicializa el estado con el valor cacheado (si existe)
 * 2. Si no hay cache:
 *    - hace fetch al endpoint de sesión de Auth.js
 *    - guarda el resultado en memoria (cachedSession)
 *    - actualiza el estado local
 *
 * Qué retorna:
 * - session: objeto de sesión (user + accessToken)
 * - isAuthenticated: boolean basado en existencia de user
 * - loading: estado de carga inicial
 *
 * Limitaciones actuales:
 * - No hay revalidación automática (la sesión puede quedar desactualizada)
 * - No hay sincronización entre tabs
 * - No hay invalidación del cache al hacer logout/login
 *
 * TODO:
 * - Migrar a axios para unificar cliente HTTP
 * - Evaluar invalidación de cache para evitar sesión stale
 *   (ej: al hacer signOut o cuando expira el JWT)
 */

export function useSession() {
  const [session, setSession] = useState<Session | null>(cachedSession);
  const [loading, setLoading] = useState(!cachedSession);

  useEffect(() => {
    if (cachedSession) return;

    const fetchSession = async () => {
      try {
        const res = await fetch("/api/auth/session");
        const data = await res.json();

        cachedSession = data;
        setSession(data);
      } catch {
        setSession(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  return {
    session,
    isAuthenticated: !!session?.user,
    loading,
  };
}