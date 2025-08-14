export const formatDate = (date) => {
    if (!date) return;

    const dateObj = new Date(date);
    const formatter = new Intl.DateTimeFormat('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return formatter.format(dateObj);
};
