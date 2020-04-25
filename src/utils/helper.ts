/**
 *
 * @param ms number
 *
 * Make setTimeout to Promise
 */
export async function wait(ms: number): Promise<typeof setTimeout> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
