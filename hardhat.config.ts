import '@nomiclabs/hardhat-ethers'
import './task/deploy-gemfab'
import { HardhatUserConfig } from 'hardhat/types';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.13',
    settings: {
      metadata: {
        bytecodeHash: 'none',
      },
      optimizer: {
        enabled: true,
        runs: 2_000,
        details: {
          yul: true,
        },
      },
    },
        compilers: [
            {
              version: "0.8.10",
              settings: {
                optimizer: {
                  enabled: true,
                  runs: 20000
                }
              },
            },
            {
              version: "0.5.12",
              settings: {
                optimizer: {
                  enabled: false,
                  runs: 200
                }
              },
            },
          ],
  },
  paths: {
    sources: './sol',
    tests: './test',
    cache: './cache',
    artifacts: './artifacts',
  },
};
export default config;
