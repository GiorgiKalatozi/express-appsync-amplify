// @ts-ignore
import { v5 as uuidv5 } from 'uuid';
import { createHash } from 'node:crypto'

const sha256ToUuid = (sha: string): string => {
    const namespace = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
    const hashBuffer = Buffer.from(sha, 'hex');

    return uuidv5(hashBuffer, namespace);
}

export const generateSha256 = (data: string): string => {
    const sha = createHash('sha256').update(data).digest('hex')
    return sha256ToUuid(sha);
}