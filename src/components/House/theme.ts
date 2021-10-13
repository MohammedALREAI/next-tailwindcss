const theme: Record<string, any> = {};

(theme.arrow = {
    backgroundColor: 'red',
    fill: '#222',
    opacity: 0.6,
    transition: 'opacity 200ms',
    marginLeft: 300,
}),
    (theme.arrow__size__medium = {
        borderRadius: 40,
        height: 40,
        marginTop: -20,
        marginLeft: 300,
    }),
    (theme.arrow__direction__left = { marginLeft: 300, background: 'blue' }),
    (theme.arrow__direction__right = { marginRight: 10, background: 'blue' }),
    (theme.close = {
        fill: '#d40000',
        opacity: 0.6,
        transition: 'all 200ms',
    });
export { theme };
