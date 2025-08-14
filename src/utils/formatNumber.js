export const formatNumber = (number) => {
    const formatter = Intl.NumberFormat('en', {
        notation: 'compact',
        compactDisplay: 'short',
    });

    return formatter.format(number);
};
