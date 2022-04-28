import { ethers } from "ethers";

/**
 * Converts the unit Gwei to Wei using ether.js
 * @param gwei The gwei value to be converted
 * @returns wei the wei value
 * More info about ethereum units: https://docs.ethers.io/v5/api/utils/display-logic/#display-logic--units
 */
export function gweiToWei(gwei: string): string {
  const bn = ethers.utils.parseUnits(gwei, "gwei"); // The bigNumber represntation of the gwei value
  const wei = ethers.utils.formatUnits(bn, "wei"); // convertion from bigNumber => wei
  return wei;
}
