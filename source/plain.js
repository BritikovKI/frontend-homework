const plain = (arr = []) => arr.reduce((accum, current) => {
    return Array.isArray(current) ? accum.concat(plain(current)) : accum.concat(current)
}, []);
