import { Formik } from 'formik';
import { FC, useRef, useState } from 'react';

interface OTPInputProps {
  onSubmit?: (otp: string) => void;
}
const OTPInput: FC<OTPInputProps> = ({}) => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;

    setOtp(updatedOtp);

    // Move focus to the next input field
    if (e.target.value !== '' && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.key === 'Backspace' && otp[index] === '' && index > 0) {
      // Move focus to the previous input field on backspace press
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    // <Formik>
    <div className="w-[100%] flex flex-row justify-between">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(ref) => (inputRefs.current[index] = ref as HTMLInputElement)}
          type="number"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          className="w-[100%] max-w-[73px] h-[70px]  border-none bg-[#F3F3F3] rounded-[12px] text-4xl font-semibold text-center m-2 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          value={digit}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleInputKeyDown(e, index)}
        />
      ))}
    </div>
    // </Formik>
  );
};

export default OTPInput;
