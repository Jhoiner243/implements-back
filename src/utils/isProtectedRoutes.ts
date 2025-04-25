import { protectedRoutes } from "../constants/protectedRutas.constants";

export const isProtectedRoutes = (path: string) => {
    return protectedRoutes.some((route) => path.startsWith(route));
} 