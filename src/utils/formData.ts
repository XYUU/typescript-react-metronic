export default function formData(params) {
    const encode = encodeURIComponent;
    if (params instanceof Object) {
        const pair = [];
        for (const name in params) {
            pair.push([encode(name), encode(params[name])].join('='));
        }
        return pair.join('&');
    }
    return encode(params);
}