define([], () => {
    setTimeout(() => {
        throw Error('some error');
    }, 10);
});
