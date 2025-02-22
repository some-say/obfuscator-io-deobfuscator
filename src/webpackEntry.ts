import { Deobfuscator } from './deobfuscator/deobfuscator';
import { Config } from './deobfuscator/transformations/config';

/**
 * Entry point for the website to deobfuscate a script.
 * @param source The script.
 * @param config The config.
 * @returns The deobfuscated code.
 */
export function deobfuscate(source: string, config: Config): string {
    // parse function is added by external script in browser
    const ast = (globalThis as any).parser.parse(source);

    const deobfuscator = new Deobfuscator(ast, config);
    const output = deobfuscator.execute();

    return output;
}
