export function formatDate(date: Date | null): string {
    if (!date) {
        return "Present";
    }

    return date.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "short",
    });
}
