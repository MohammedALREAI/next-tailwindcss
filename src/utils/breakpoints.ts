import { useMediaQuery } from 'beautiful-react-hooks';

export function useScreenSm() {
    return useMediaQuery('(min-width: 640px)');
}

export function useScreenMd() {
    return useMediaQuery('(min-width: 768px)');
}

export function useScreenLg() {
    return useMediaQuery('(min-width: 1024px)');
}

export function useScreenXl() {
    return useMediaQuery('(min-width: 1280px)');
}

export function useScreenXxl() {
    return useMediaQuery('(min-width: 1536px)');
}
