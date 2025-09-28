export const theme = {
    colors: {
        primary: "#4F46E5",
        secondary: "#6B7280",
        background: "#F9FAFB",
        text: "#111827",
        accent: "#3B82F6",
        muted: "#9CA3AF",
        border: "#52507a87",
        highlight: "#2563EB",
        error: "#EF4444",
        success: "#10B981",
        warning: "#F59E0B",
    }
} as const

export type ThemeColors = keyof typeof theme.colors;