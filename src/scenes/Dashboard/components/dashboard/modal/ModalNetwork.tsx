import { useEffect } from 'react';
import { ethers } from 'ethers';

interface ModalProps {
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  useEffect(() => {
    const handleChangeNetwork = async () => {
      try {
        if (typeof window.ethereum === 'undefined') {
          console.log('Ethereum not available');
          return;
        }

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const network = await provider.getNetwork();

        if (network.chainId === parseInt('0x507')) {
          console.log('Already on the desired network');
          closeModal();
          return;
        }

        const switchResult = await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: '0x507', // Replace with the desired chain ID
              chainName: 'Moonbase Alphanet', // Replace with the desired chain name
              rpcUrls: ['https://rpc.api.moonbase.moonbeam.network'], // Replace with the desired RPC endpoint
              // Replace with the desired block explorer URL
            },
          ],
        });

        if (switchResult) {
          console.log('Network switched successfully');
          window.location.reload();
          closeModal();
        } else {
          console.log('Network switch canceled by user');
          window.location.reload();
        }
      } catch (error) {
        console.error('Failed to switch network:', error);
      }
    };

    const changeNetworkLink = document.getElementById('change-network-link');
    if (changeNetworkLink) {
      changeNetworkLink.addEventListener('click', handleChangeNetwork);
    }

    return () => {
      if (changeNetworkLink) {
        changeNetworkLink.removeEventListener('click', handleChangeNetwork);
      }
    };
  }, [closeModal]);

  return (
    <div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="inline-block align-bottom rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">
                  Network Change Required
                </h2>
                <p className="mb-4">
                  The current network is not supported. Please change your
                  network to Moonbase Alphanet.
                </p>
                {/* <a
                  id="change-network-link"
                  href="#"
                  className="text-blue-500 hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    closeModal();
                  }}
                >
                  Change Network
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
