/**
 * Checks whether we're in the Node.js or Browser enviroment
 *
 * @returns Answer to given question
 */
export default function isNodeEnv(): boolean {
  return (
    Object.prototype.toString.call(
      typeof process !== 'undefined' ? process : 0
    ) === '[object process]'
  );
}
