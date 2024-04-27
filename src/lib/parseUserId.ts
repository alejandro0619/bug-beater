export default function parseUserFromImgUrl(url: string): [Error?, string?] {
    const regex = new RegExp(/(\d+)(?=\?|$)/)
    const match =  regex.exec(url)

    return match ? [undefined, match[0].toString()] : [new Error('Invalid url'), undefined]
}