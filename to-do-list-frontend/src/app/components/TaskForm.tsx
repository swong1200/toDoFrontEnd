import React from 'react';
import Link from 'next/link';

type Props = {};

export default function TaskForm({}: Props) {
  return (
    <div className="w-screen flex justify-center">
      <div className="flex flex-col w-96">
        <Link href="/">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 8H1M1 8L8 15M1 8L8 1"
              stroke="white"
              strokeWidth="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>

        <h2 className="text-commonBlue">Title</h2>
        <input type="text" />
        <h2 className="text-commonBlue">Color</h2>
        <div>Colors go here</div>
        <button className="flex flex-row w-3/4 h-20 bg-taskbutton rounded-lg text-white">
          Add Task
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.98367 1.45157C9.27559 1.45157 10.5385 1.83467 11.6127 2.55243C12.6869 3.27019 13.5241 4.29036 14.0185 5.48394C14.5129 6.67753 14.6423 7.99091 14.3902 9.25802C14.1382 10.5251 13.5161 11.689 12.6026 12.6026C11.689 13.5161 10.5251 14.1382 9.25801 14.3902C7.99091 14.6423 6.67753 14.5129 5.48394 14.0185C4.29036 13.5241 3.27018 12.6869 2.55243 11.6127C1.83467 10.5385 1.45157 9.27559 1.45157 7.98367C1.45826 6.25331 2.14861 4.59573 3.37217 3.37217C4.59573 2.14861 6.25331 1.45826 7.98367 1.45157ZM7.98367 -1.85292e-06C6.40605 0.00645208 4.86572 0.480166 3.55711 1.36134C2.24851 2.24251 1.2303 3.49163 0.631045 4.95101C0.031785 6.41039 -0.121666 8.01461 0.190064 9.56113C0.501794 11.1077 1.26473 12.5271 2.38256 13.6404C3.50038 14.7537 4.92298 15.5108 6.47076 15.8162C8.01855 16.1217 9.62212 15.9617 11.079 15.3564C12.536 14.7512 13.7809 13.7279 14.6567 12.4157C15.5326 11.1036 16 9.56129 16 7.98367C16 6.93248 15.7924 5.89165 15.3892 4.92089C14.9859 3.95013 14.3949 3.06856 13.6501 2.32678C12.9053 1.585 12.0213 0.99761 11.0489 0.598319C10.0765 0.199028 9.03484 -0.00430215 7.98367 -1.85292e-06Z"
              fill="#F2F2F2"
            />
            <path
              d="M11.7069 7.38126H8.49534V4.16965H7.41391V7.38126H4.19867V8.46268H7.41391V11.6743H8.49534V8.46268H11.7069V7.38126Z"
              fill="#F2F2F2"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
