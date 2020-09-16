import { Image } from 'cloudinary-react';
import React from 'react';
import { useOnClickOutside } from '../hooks';

export default function Modal({ isOpen, setIsOpen, publicId, handleNext, handlePrev }) {
  const ref = React.useRef()
  useOnClickOutside(ref, () => setIsOpen(false))
  const content = isOpen ? (
    <div className="fixed z-10 inset-0">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-scroll shadow-xl transform transition-all max-w-xl h-auto sm:my-8 sm:align-middle sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline" ref={ref}>
          <button type="button" onClick={handlePrev} className="absolute inset-y-0 left-0 px-5 py-3 font-medium leading-snug border-none text-base text-white bg-black opacity-25 hover:opacity-100 transition duration-150 ease-in-out">
            &lt;
          </button>
          <Image
            cloudName="thesavagedev"
            publicId={publicId}
            className="border-none object-cover align-bottom m-0 p-0"
            alt="image"
            secure="true"
          />
          <button type="button" onClick={handleNext} className="absolute inset-y-0 right-0 px-5 py-3 font-medium leading-snug border-none text-base text-white bg-black opacity-25 hover:opacity-100 transition duration-150 ease-in-out">
            &gt;
          </button>
        </div>
      </div>
    </div>
  ) : null
  return content
}
