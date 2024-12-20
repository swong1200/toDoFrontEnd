import React from 'react';

type Props = {};

export default function CreateButton({}: Props) {
  //     const style = {
  //         /* New Task */

  // /* Auto layout */
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // padding: 0px;
  // gap: 8px;

  // position: absolute;
  // width: 736px;
  // height: 52px;
  // left: calc(50% - 736px/2);
  // top: 173px;

  // /* Button */

  // /* Auto layout */
  // display: flex;
  // flex-direction: row;
  // justify-content: center;
  // align-items: center;
  // padding: 16px;
  // gap: 8px;

  // width: 736px;
  // height: 52px;

  // /* Blue Dark */
  // background: #1E6F9F;
  // border-radius: 8px;

  // /* Inside auto layout */
  // flex: none;
  // order: 0;
  // flex-grow: 1;

  // /* Criar */

  // width: 82px;
  // height: 20px;

  // font-family: 'Inter';
  // font-style: normal;
  // font-weight: 700;
  // font-size: 14px;
  // line-height: 140%;
  // /* identical to box height, or 20px */

  // /* Gray 100 */
  // color: #F2F2F2;

  // /* Inside auto layout */
  // flex: none;
  // order: 0;
  // flex-grow: 0;

  // /* plus */

  // width: 16px;
  // height: 16px;

  // /* Inside auto layout */
  // flex: none;
  // order: 1;
  // flex-grow: 0;

  // /* Layer 2 */

  // position: absolute;
  // left: 0.2%;
  // right: 0%;
  // top: 0%;
  // bottom: 0.2%;

  // /* Layer 1 */

  // position: absolute;
  // left: 0.2%;
  // right: 0%;
  // top: 0%;
  // bottom: 0.2%;

  // /* Vector */

  // position: absolute;
  // left: 7.62%;
  // right: 7.64%;
  // top: 7.62%;
  // bottom: 7.64%;

  // /* Vector */

  // position: absolute;
  // left: 0.2%;
  // right: 0%;
  // top: 0%;
  // bottom: 0.2%;

  // /* Gray 100 */
  // background: #F2F2F2;

  // /* Vector */
  // position: absolute;
  // left: 26.24%;
  // right: 26.83%;
  // top: 26.06%;
  // bottom: 27.04%;

  // /* Gray 100 */
  // background: #F2F2F2;

  //     }
  return (
    <div>
      <button className="flex flex-row w-3/4 h-20 bg-taskbutton rounded-lg -mt-10 text-white">
      Create Task
        <svg
          width="736"
          height="52"
          viewBox="0 0 736 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          
          
          <g clipPath="url(#clip0_1_213)">
            <path
              d="M412.984 19.4516C414.276 19.4516 415.539 19.8347 416.613 20.5524C417.687 21.2702 418.524 22.2904 419.019 23.484C419.513 24.6775 419.642 25.9909 419.39 27.258C419.138 28.5251 418.516 29.689 417.603 30.6026C416.689 31.5161 415.525 32.1382 414.258 32.3903C412.991 32.6423 411.678 32.5129 410.484 32.0185C409.29 31.5241 408.27 30.6869 407.552 29.6127C406.835 28.5385 406.452 27.2756 406.452 25.9837C406.458 24.2533 407.149 22.5957 408.372 21.3722C409.596 20.1486 411.253 19.4583 412.984 19.4516ZM412.984 18C411.406 18.0065 409.866 18.4802 408.557 19.3613C407.249 20.2425 406.23 21.4916 405.631 22.951C405.032 24.4104 404.878 26.0146 405.19 27.5611C405.502 29.1077 406.265 30.5272 407.383 31.6404C408.5 32.7537 409.923 33.5108 411.471 33.8162C413.019 34.1217 414.622 33.9617 416.079 33.3564C417.536 32.7512 418.781 31.7279 419.657 30.4158C420.533 29.1036 421 27.5613 421 25.9837C421 24.9325 420.792 23.8917 420.389 22.9209C419.986 21.9501 419.395 21.0686 418.65 20.3268C417.905 19.585 417.021 18.9976 416.049 18.5983C415.077 18.199 414.035 17.9957 412.984 18Z"
              fill="#F2F2F2"
            />
            <path
              d="M416.707 25.3813H413.495V22.1696H412.414V25.3813H409.199V26.4627H412.414V29.6743H413.495V26.4627H416.707V25.3813Z"
              fill="#F2F2F2"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_213">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="translate(405 18)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </div>
  );
}
