import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

type IconProps = {
    type: keyof typeof Icons
    className?: string
}

export const Icons = {
    DUMBBELL: 'DUMBBELL',
    RUNNING_MAN: 'RUNNING_MAN',
    FIRE: 'FIRE',
    HEARTBEAT: 'HEARTBEAT',
    TRAINER: 'TRAINER',
    TICK: 'TICK',
    QUOTES: 'QUOTES',
    ARROW_LEFT: 'ARROW_LEFT',
    ARROW_RIGHT: 'ARROW_RIGHT',
} as const

const Icon: React.FC<IconProps> = ({ type, className }) => {
    switch (type) {
        case Icons.DUMBBELL:
            return (
                <svg
                    width='16'
                    height='15'
                    viewBox='0 0 16 15'
                    xmlns='http://www.w3.org/2000/svg'
                    className={className}>
                    <path d='M12.3812 3.41487L10.1103 1.2853C10.0359 1.21502 9.9475 1.15924 9.85006 1.12117C9.75262 1.0831 9.64811 1.0635 9.54255 1.0635C9.437 1.0635 9.33248 1.0831 9.23505 1.12117C9.13761 1.15924 9.04917 1.21502 8.97484 1.2853C8.82591 1.4258 8.74232 1.61585 8.74232 1.81395C8.74232 2.01204 8.82591 2.20209 8.97484 2.34259L10.67 3.93226L4.1932 10.006L2.49804 8.41634C2.34822 8.27668 2.14556 8.19829 1.93432 8.19829C1.72307 8.19829 1.52041 8.27668 1.3706 8.41634C1.29565 8.48605 1.23616 8.56898 1.19557 8.66036C1.15497 8.75173 1.13407 8.84974 1.13407 8.94873C1.13407 9.04772 1.15497 9.14573 1.19557 9.2371C1.23616 9.32848 1.29565 9.41141 1.3706 9.48112L3.61748 11.5882L5.86437 13.6953C5.93843 13.7661 6.02674 13.8225 6.12419 13.8611C6.22164 13.8997 6.3263 13.9198 6.43209 13.9202C6.59091 13.9211 6.74641 13.8776 6.87876 13.7952C7.01111 13.7129 7.11432 13.5955 7.17522 13.4579C7.23612 13.3204 7.25197 13.1689 7.22073 13.0229C7.18949 12.8769 7.11258 12.7429 6.99981 12.638L5.32864 11.0708L11.8054 4.99704L13.5006 6.58672C13.5751 6.65614 13.6636 6.71111 13.7608 6.74849C13.858 6.78587 13.9621 6.80494 14.0671 6.80459C14.1722 6.80424 14.2762 6.78449 14.3731 6.74646C14.47 6.70844 14.558 6.65288 14.632 6.58297C14.7061 6.51305 14.7647 6.43015 14.8045 6.33899C14.8444 6.24783 14.8647 6.1502 14.8644 6.05167C14.864 5.95315 14.8429 5.85566 14.8024 5.76476C14.7618 5.67387 14.7026 5.59136 14.628 5.52193L12.3812 3.41487ZM1.3706 11.5957C1.22003 11.4545 1.01581 11.3752 0.802876 11.3752C0.58994 11.3752 0.385725 11.4545 0.235157 11.5957C0.0845885 11.7369 1.5865e-09 11.9284 0 12.1281C-1.5865e-09 12.3278 0.0845885 12.5193 0.235157 12.6605L2.49804 14.7825C2.57275 14.852 2.66136 14.907 2.75878 14.9443C2.85621 14.9816 2.96052 15.0006 3.06576 15C3.17099 15.0006 3.27531 14.9816 3.37273 14.9443C3.47015 14.907 3.55876 14.852 3.63348 14.7825C3.70842 14.7128 3.76791 14.6299 3.8085 14.5385C3.8491 14.4471 3.87 14.3491 3.87 14.2501C3.87 14.1512 3.8491 14.0531 3.8085 13.9618C3.76791 13.8704 3.70842 13.7875 3.63348 13.7178L1.3706 11.5957ZM15.7635 2.34259L13.5006 0.220523C13.426 0.150609 13.3375 0.0951496 13.2401 0.0573121C13.1427 0.0194747 13.0383 0 12.9329 0C12.8274 0 12.723 0.0194747 12.6256 0.0573121C12.5282 0.0951496 12.4397 0.150609 12.3652 0.220523C12.2906 0.290438 12.2315 0.373439 12.1911 0.464786C12.1508 0.556134 12.13 0.65404 12.13 0.752914C12.13 0.851788 12.1508 0.949694 12.1911 1.04104C12.2315 1.13239 12.2906 1.21539 12.3652 1.2853L14.628 3.40737C14.7024 3.47765 14.7908 3.53344 14.8882 3.5715C14.9857 3.60957 15.0902 3.62917 15.1958 3.62917C15.3013 3.62917 15.4058 3.60957 15.5033 3.5715C15.6007 3.53344 15.6891 3.47765 15.7635 3.40737C15.8384 3.33766 15.8979 3.25473 15.9385 3.16335C15.9791 3.07198 16 2.97397 16 2.87498C16 2.77599 15.9791 2.67798 15.9385 2.58661C15.8979 2.49523 15.8384 2.4123 15.7635 2.34259Z' />
                </svg>
            )
        case Icons.RUNNING_MAN:
            return (
                <svg
                    width='16'
                    height='17'
                    viewBox='0 0 16 17'
                    xmlns='http://www.w3.org/2000/svg'
                    className={className}>
                    <path d='M9.25149 3.5206C9.47237 3.16294 9.8423 2.94938 10.2122 3.23412L11.5429 4.09183C12.1337 4.52068 11.7638 5.02071 11.6165 5.23601L8.29074 10.4551C8.14349 10.6687 7.92081 10.7399 7.69993 10.5975C7.69993 10.5975 7.6263 10.5263 6.66556 9.95336C5.70482 9.38214 5.9257 8.5227 6.44288 7.665L9.25149 3.5206Z' />
                    <path d='M12.0667 0C13.0621 0 13.8667 0.806087 13.8667 1.79927C13.8667 2.7942 13.0603 3.59854 12.0667 3.59854C11.0714 3.59854 10.2667 2.79245 10.2667 1.79927C10.265 0.806087 11.0714 0 12.0667 0Z' />
                    <path d='M9.97746 3.10001L7.20057 2.16333C6.98232 2.09155 6.68955 2.09155 6.54228 2.16333L3.39987 3.82134C2.9616 4.03844 2.81433 4.54266 3.03435 4.90333C3.17985 5.19221 3.39987 5.33577 3.69264 5.33577C3.83814 5.33577 3.98541 5.33577 4.13091 5.26399L6.98055 3.82134L9.46467 4.68623C9.90293 4.82979 10.3412 4.61445 10.4885 4.182C10.634 3.67602 10.4157 3.24357 9.97746 3.10001Z' />
                    <path d='M5.3539 9.67883L4.41385 10.969H1.01385C0.507804 10.969 0 11.399 0 11.9005C0 12.4751 0.434005 12.9051 1.01209 12.9051H4.99194C5.3539 12.9051 5.64382 12.7623 5.85995 12.4037L6.8 11.0421C6.72972 11.0404 5.4277 10.1803 5.3539 9.67883Z' />
                    <path d='M11.2044 10.8572L7.69352 8.35736C7.25489 8.07112 6.59604 8.14224 6.3048 8.6436C6.01179 9.07209 6.0846 9.71396 6.59782 10.0002L9.37703 12.0004L7.6953 15.6434C7.47509 16.1431 7.6953 16.7155 8.20674 16.9289C8.35236 17 8.49976 17 8.64538 17C9.0112 17 9.37703 16.7867 9.52265 16.4293L11.4974 12.0004C11.7158 11.643 11.5702 11.1417 11.2044 10.8572Z' />
                    <path d='M15.3746 7.67116L12.66 7.0347L11.8525 4.63298C11.7064 4.20924 11.2661 3.99652 10.8258 4.13891C10.3856 4.27958 10.1646 4.70503 10.3125 5.12876L11.2661 7.95422C11.3392 8.23728 11.5602 8.44829 11.8525 8.51863L15.0092 9.29576H15.0823C15.5226 9.36609 15.8898 9.08475 15.9628 8.66102C16.1072 8.16523 15.8149 7.7415 15.3746 7.67116Z' />
                </svg>
            )
        case Icons.FIRE:
            return (
                <svg
                    width='12'
                    height='16'
                    viewBox='0 0 12 16'
                    xmlns='http://www.w3.org/2000/svg'
                    className={className}>
                    <path d='M10.3226 13.9301C9.09534 15.2434 7.39179 16 5.64653 16C5.18413 16 4.72174 15.9433 4.27326 15.8367C3.03558 15.5434 1.97869 14.8967 1.12691 13.9135C1.0991 13.8801 -1.25805 10.9803 0.928746 7.52058C1.04695 7.33726 1.17906 7.1706 1.28336 7.04395C2.23596 5.89402 3.16769 4.30413 2.6601 3.60085C2.62072 3.54516 2.59996 3.47929 2.60058 3.41201C2.60121 3.34473 2.62318 3.27922 2.66358 3.22421C2.74354 3.10755 2.89304 3.05422 3.0321 3.09088C3.16769 3.12088 4.21763 3.43753 4.44361 5.43072C4.67307 4.96409 4.87471 4.3408 4.82604 3.63085C4.75303 2.55425 4.13767 1.53099 2.99386 0.584388C2.93401 0.53482 2.89375 0.467037 2.87983 0.392398C2.8659 0.31776 2.87916 0.2408 2.91737 0.174416C2.99386 0.0377589 3.16422 -0.0322363 3.31719 0.0144272C3.39715 0.0344258 10.8267 2.19428 9.70027 9.57711C10.1348 9.13047 10.6181 8.26386 10.4999 6.6773C10.4895 6.52065 10.5903 6.38066 10.7433 6.33399C10.8997 6.28733 11.0666 6.35066 11.1465 6.48398C11.1709 6.52398 13.5176 10.507 10.3226 13.9301Z' />
                </svg>
            )
        case Icons.HEARTBEAT:
            return (
                <svg
                    width='20'
                    height='16'
                    viewBox='0 0 20 16'
                    xmlns='http://www.w3.org/2000/svg'
                    className={className}>
                    <path d='M19 6.31132H16.5C16.3677 6.31187 16.2368 6.33867 16.1149 6.39017C15.9931 6.44166 15.8826 6.51683 15.79 6.61132L14.55 7.90132L11.75 4.71132C11.6565 4.61141 11.5434 4.53177 11.4179 4.47732C11.2923 4.42287 11.1569 4.39477 11.02 4.39477C10.8831 4.39477 10.7477 4.42287 10.6222 4.47732C10.4966 4.53177 10.3836 4.61141 10.29 4.71132L8.59001 6.41132H7.00001C6.7348 6.41132 6.48044 6.51668 6.2929 6.70422C6.10537 6.89175 6.00001 7.14611 6.00001 7.41132C6.00001 7.67654 6.10537 7.93089 6.2929 8.11843C6.48044 8.30597 6.7348 8.41132 7.00001 8.41132H9.00001C9.13162 8.41208 9.26208 8.38686 9.38392 8.33709C9.50576 8.28733 9.61657 8.214 9.71001 8.12132L11 6.78132L13.8 9.97132C13.8903 10.0743 14.0009 10.1576 14.1247 10.2161C14.2486 10.2746 14.3831 10.307 14.52 10.3113C14.6516 10.3121 14.7821 10.2869 14.9039 10.2371C15.0258 10.1873 15.1366 10.114 15.23 10.0213L16.93 8.31132H19C19.2652 8.31132 19.5196 8.20597 19.7071 8.01843C19.8947 7.83089 20 7.57654 20 7.31132C20 7.04611 19.8947 6.79175 19.7071 6.60422C19.5196 6.41668 19.2652 6.31132 19 6.31132ZM11.61 11.6113L9.71001 13.5113C9.61705 13.6051 9.50645 13.6794 9.38459 13.7302C9.26273 13.781 9.13202 13.8071 9.00001 13.8071C8.868 13.8071 8.73729 13.781 8.61543 13.7302C8.49358 13.6794 8.38297 13.6051 8.29001 13.5113L3.08001 8.30132C2.73713 7.95865 2.46513 7.55177 2.27955 7.10393C2.09398 6.6561 1.99846 6.17608 1.99846 5.69132C1.99846 5.20656 2.09398 4.72655 2.27955 4.27871C2.46513 3.83088 2.73713 3.424 3.08001 3.08132C3.77167 2.39189 4.70843 2.00476 5.68501 2.00476C6.66159 2.00476 7.59835 2.39189 8.29001 3.08132C8.38297 3.17505 8.49358 3.24945 8.61543 3.30021C8.73729 3.35098 8.868 3.37712 9.00001 3.37712C9.13202 3.37712 9.26273 3.35098 9.38459 3.30021C9.50645 3.24945 9.61705 3.17505 9.71001 3.08132C10.4127 2.41304 11.3453 2.04037 12.315 2.04037C13.2847 2.04037 14.2173 2.41304 14.92 3.08132C15.1428 3.30707 15.3376 3.55889 15.5 3.83132C15.6456 4.03154 15.8603 4.17062 16.1026 4.22167C16.3448 4.27272 16.5974 4.2321 16.8114 4.10767C17.0254 3.98324 17.1856 3.78385 17.2611 3.54808C17.3366 3.3123 17.322 3.05691 17.22 2.83132C16.9728 2.42087 16.6774 2.0415 16.34 1.70132C15.391 0.741174 14.1311 0.150426 12.786 0.0349788C11.4409 -0.0804685 10.0988 0.286933 9.00001 1.07132C8.15087 0.459617 7.14924 0.0943988 6.10565 0.0159735C5.06206 -0.0624518 4.0171 0.148965 3.08607 0.626892C2.15504 1.10482 1.37416 1.83067 0.829583 2.72435C0.28501 3.61804 -0.00207453 4.6448 1.12854e-05 5.69132C-0.000288296 6.43541 0.147178 7.17216 0.433854 7.85881C0.72053 8.54546 1.14071 9.16834 1.67001 9.69132L6.88001 14.9013C7.44251 15.4631 8.20501 15.7787 9.00001 15.7787C9.79501 15.7787 10.5575 15.4631 11.12 14.9013L13 13.0213C13.1863 12.834 13.2908 12.5805 13.2908 12.3163C13.2908 12.0521 13.1863 11.7987 13 11.6113C12.8135 11.4311 12.5644 11.3303 12.305 11.3303C12.0457 11.3303 11.7965 11.4311 11.61 11.6113Z' />
                </svg>
            )
        case Icons.TRAINER:
            return (
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='100'
                    height='425'
                    viewBox='0 0 100 425'
                    preserveAspectRatio='xMidYMid meet'
                    className={className}>
                    <g transform='translate(-180,425) scale(0.1,-0.1)' stroke='none'>
                        <path d='M2205 4034 c-138 -29 -241 -107 -301 -230 -26 -54 -29 -68 -29 -164 0 -99 2 -110 33 -172 37 -76 114 -153 188 -188 196 -92 429 -9 526 187 31 64 33 74 33 173 0 93 -3 111 -27 163 -75 161 -263 263 -423 231z' />
                        <path d='M1775 3045 c-134 -42 -243 -136 -303 -262 l-37 -78 -3 -635 c-1 -349 0 -645 3 -657 14 -58 102 -123 166 -123 49 0 118 39 147 83 l27 41 5 494 5 494 24 19 c35 28 92 25 122 -7 l24 -26 5 -371 5 -372 294 -3 c204 -1 298 1 307 9 11 9 13 79 13 352 -1 422 -4 383 26 412 30 31 83 33 116 6 l24 -19 5 -494 5 -493 25 -35 c30 -43 45 -56 89 -75 82 -36 179 4 220 90 21 44 21 54 21 637 -1 473 -4 605 -15 652 -41 171 -171 309 -342 361 -65 20 -916 20 -978 0z' />
                        <path d='M603 2263 c-13 -2 -32 -16 -43 -30 -19 -24 -20 -40 -20 -298 0 -206 -3 -275 -13 -283 -6 -6 -33 -10 -59 -10 -56 0 -86 -15 -98 -48 -15 -39 -12 -61 14 -91 21 -24 34 -29 88 -33 l63 -5 3 -278 c3 -310 5 -321 67 -333 46 -8 73 3 96 39 18 31 19 58 19 658 0 419 -4 636 -11 657 -6 19 -23 36 -44 46 -18 9 -35 15 -37 15 -1 -1 -13 -4 -25 -6z' />
                        <path d='M945 2256 c-17 -7 -36 -25 -43 -40 -9 -20 -12 -183 -12 -667 l0 -641 29 -29 c37 -36 79 -38 118 -5 l28 24 5 284 5 283 88 3 87 3 0 79 c0 49 -4 82 -12 86 -6 4 -43 8 -82 9 -39 1 -74 3 -78 3 -4 1 -8 130 -10 287 -3 269 -4 285 -23 304 -28 26 -64 32 -100 17z' />
                        <path d='M3514 2255 c-17 -7 -35 -21 -40 -31 -5 -11 -11 -145 -14 -299 l-5 -280 -73 -1 c-104 -3 -102 0 -102 -93 l0 -80 88 -3 87 -3 5 -283 5 -284 28 -24 c39 -33 81 -31 118 5 l29 29 0 651 0 650 -22 24 c-29 32 -65 39 -104 22z' />
                        <path d='M3883 2263 c-13 -2 -32 -16 -43 -30 -20 -25 -20 -39 -20 -680 l0 -654 25 -24 c30 -31 83 -33 116 -6 24 19 24 19 29 308 l5 288 60 6 c75 7 94 15 106 46 15 39 11 70 -13 97 -19 21 -34 26 -79 29 -30 2 -61 7 -67 11 -9 5 -12 83 -12 285 0 275 0 278 -22 298 -26 24 -53 32 -85 26z' />
                        <path d='M1963 1458 c-6 -7 -13 -32 -16 -55 -13 -104 -98 -210 -209 -258 -76 -33 -67 -15 -113 -235 -14 -69 -32 -152 -40 -185 -8 -33 -28 -129 -45 -213 -28 -136 -30 -159 -20 -202 14 -57 66 -122 118 -147 49 -23 146 -23 194 0 73 35 108 93 137 232 11 55 30 141 40 190 11 50 26 124 35 165 9 41 27 127 41 190 13 63 34 158 45 210 11 52 22 105 25 118 5 21 10 22 111 22 75 0 106 -4 108 -12 2 -7 8 -35 14 -63 16 -74 42 -195 52 -240 5 -22 25 -116 45 -210 20 -93 43 -201 51 -240 8 -38 20 -92 26 -120 18 -87 37 -146 59 -176 48 -68 151 -103 237 -79 83 22 162 122 162 204 0 18 -13 93 -29 167 -17 73 -42 190 -56 259 -15 69 -31 143 -36 165 -5 22 -14 69 -21 104 l-11 63 -71 32 c-48 22 -86 49 -117 83 -59 63 -80 103 -94 178 l-11 60 -301 3 c-233 2 -303 -1 -310 -10z' />
                    </g>
                </svg>
            )
        case Icons.TICK:
            return (
                <svg
                    version='1.0'
                    xmlns='http://www.w3.org/2000/svg'
                    width='50pt'
                    height='50pt'
                    viewBox='0 0 50 50'
                    preserveAspectRatio='xMidYMid meet'
                    className={className}>
                    <g transform='translate(0,50) scale(0.1,-0.1)' stroke='none'>
                        <path d='M195 470 c-55 -9 -96 -32 -134 -76 -44 -49 -53 -77 -53 -155 0 -78 23 -130 78 -178 49 -44 77 -53 155 -53 80 0 131 23 182 82 35 41 57 102 57 159 0 24 -4 31 -20 31 -15 0 -20 -7 -20 -27 0 -135 -125 -237 -249 -203 -46 12 -105 59 -126 99 -75 146 58 319 218 282 62 -14 67 -14 67 4 0 29 -81 48 -155 35z' />
                        <path d='M348 333 l-107 -107 -30 28 c-18 17 -36 26 -45 23 -24 -9 -20 -19 29 -67 l45 -44 120 119 c110 110 133 142 105 152 -6 2 -58 -45 -117 -104z' />
                    </g>
                </svg>
            )

        case Icons.QUOTES:
            return (
                <svg
                    version='1.1'
                    id='Capa_1'
                    xmlns='http://www.w3.org/2000/svg'
                    xmlnsXlink='http://www.w3.org/1999/xlink'
                    viewBox='0 0 57 57'
                    xmlSpace='preserve'
                    className={className}>
                    <g>
                        <circle cx='18.5' cy='31.5' r='5.5' />
                        <path d='M18.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S22.084,38,18.5,38z M18.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S20.981,27,18.5,27z' />
                    </g>
                    <g>
                        <circle cx='35.5' cy='31.5' r='5.5' />
                        <path d='M35.5,38c-3.584,0-6.5-2.916-6.5-6.5s2.916-6.5,6.5-6.5s6.5,2.916,6.5,6.5S39.084,38,35.5,38z M35.5,27c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5s4.5-2.019,4.5-4.5S37.981,27,35.5,27z' />
                    </g>
                    <path d='M13,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-6.617,0-12,5.383-12,12C14,31.553,13.553,32,13,32z' />
                    <path d='M30,32c-0.553,0-1-0.447-1-1c0-7.72,6.28-14,14-14c0.553,0,1,0.447,1,1s-0.447,1-1,1 c-6.617,0-12,5.383-12,12C31,31.553,30.553,32,30,32z' />
                </svg>
            )

        case Icons.ARROW_LEFT:
            return <FaArrowLeft className={className} />

        case Icons.ARROW_RIGHT:
            return <FaArrowRight className={className} />
    }
}

export default Icon
