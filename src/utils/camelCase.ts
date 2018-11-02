export default function camelCase(name: string) {
    return name.replace(/\-(\w)/g, function (str, letter) {
        return letter.toUpperCase();
    });
}