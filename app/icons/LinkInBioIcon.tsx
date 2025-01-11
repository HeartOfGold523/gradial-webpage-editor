type IconProps = { size?: number };

export default function LinkInBioIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
      viewBox="0 0 32 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M28.152 0.612929C29.0108 0.612929 29.7544 0.927125 30.3828 1.55552C31.0112 2.16296 31.3568 2.90656 31.4196 3.78631V27.3196C31.4196 28.2203 31.1264 28.9953 30.5399 29.6447C29.9534 30.294 29.2307 30.6501 28.3719 30.7129H3.26764C2.40884 30.7129 1.66524 30.3987 1.03685 29.7704C0.408455 29.1629 0.0628393 28.4193 0 27.5396V4.00625C0 3.10555 0.29325 2.33054 0.87975 1.6812C1.46625 1.03186 2.1889 0.675767 3.04771 0.612929H28.152ZM30.1 7.14821H1.31963V27.3196C1.31963 27.8642 1.4872 28.3355 1.82234 28.7335C2.17843 29.1315 2.59736 29.3514 3.07913 29.3933H28.152C28.6547 29.3933 29.0946 29.2048 29.4716 28.8278C29.8487 28.4717 30.0581 28.0318 30.1 27.5081V7.14821ZM11.1226 11.0757C12.4212 11.0757 13.6257 11.4003 14.7358 12.0497C15.846 12.6781 16.7153 13.5473 17.3436 14.6575C17.993 15.7677 18.3177 16.9721 18.3177 18.2708C18.3177 19.3181 18.1082 20.3026 17.6893 21.2242C17.2703 22.1459 16.6943 22.9418 15.9612 23.6121L15.6784 23.8635C15.3642 24.1148 15.0919 24.3138 14.8615 24.4604L14.2017 24.8061L13.5104 25.0888L13.2277 25.1831L13.0706 25.2145L12.8821 25.2773L12.1594 25.403L11.5938 25.4659L11.1226 25.4973L10.2428 25.4344L9.70867 25.3716L8.89176 25.1517L8.70324 25.0574L8.57756 25.026L8.04343 24.8061L7.76065 24.649C7.55119 24.5442 7.25794 24.3662 6.8809 24.1148L6.56671 23.8635C5.74979 23.1932 5.11093 22.3763 4.65011 21.4127C4.18929 20.4283 3.95887 19.3914 3.95887 18.3022C3.95887 16.9826 4.27307 15.7781 4.90146 14.6889C5.5508 13.5788 6.42008 12.699 7.50929 12.0497C8.61946 11.4003 9.82388 11.0757 11.1226 11.0757ZM11.1226 20.2502C10.3475 20.2502 9.62488 20.4492 8.9546 20.8472C8.30526 21.2242 7.80254 21.7479 7.44646 22.4182L7.28936 22.7324L7.94917 23.2351L8.32621 23.455L8.6404 23.6121L9.1117 23.8006C9.32116 23.8844 9.47826 23.9368 9.58299 23.9577L10.2114 24.0834C10.4627 24.1253 10.6722 24.1462 10.8398 24.1462L11.1226 24.1777H11.2797L12.0966 24.0834L12.3165 24.0206L12.7564 23.9263L13.0392 23.832L13.4476 23.6435C13.5733 23.6016 13.678 23.5597 13.7618 23.5178L14.076 23.3607L14.3274 23.2037C14.3902 23.1827 14.474 23.1199 14.5787 23.0151L14.8301 22.858L14.9557 22.7009L14.9243 22.6381C14.6311 21.9888 14.1807 21.4546 13.5733 21.0357C12.9868 20.5958 12.3374 20.334 11.6253 20.2502L11.3739 20.2188L11.1226 20.2502ZM26.8324 20.2502C26.9999 20.2502 27.1361 20.3026 27.2408 20.4073C27.3665 20.4911 27.4503 20.6168 27.4922 20.7843V23.5178C27.4922 23.6854 27.4398 23.832 27.3351 23.9577C27.2304 24.0625 27.1047 24.1253 26.9581 24.1462L26.8324 24.1777H20.2971C20.1295 24.1777 19.9829 24.1253 19.8572 24.0206C19.7525 23.9158 19.6792 23.7902 19.6373 23.6435V20.8786C19.6373 20.732 19.6896 20.6063 19.7944 20.5016C19.8991 20.3759 20.0248 20.2921 20.1714 20.2502H26.8324ZM26.1726 21.5384H20.9569V22.858H26.1726V21.5384ZM11.1226 12.3953C10.0543 12.3953 9.0698 12.6571 8.16911 13.1808C7.26841 13.7044 6.55623 14.4166 6.03257 15.3173C5.50891 16.218 5.24708 17.2025 5.24708 18.2708C5.24708 19.5276 5.61364 20.6691 6.34677 21.6955C6.93327 20.6691 7.79207 19.9046 8.92318 19.4019C8.211 18.7316 7.85491 17.9147 7.85491 16.9511C7.85491 16.3646 8.00154 15.82 8.29479 15.3173C8.58804 14.8146 8.98602 14.4166 9.48873 14.1234C9.99145 13.8301 10.5361 13.6835 11.1226 13.6835C11.7091 13.6835 12.2537 13.8301 12.7564 14.1234C13.2591 14.4166 13.6571 14.8146 13.9503 15.3173C14.2436 15.82 14.3902 16.3646 14.3902 16.9511C14.3902 17.9147 14.0341 18.7316 13.3219 19.4019C14.453 19.8836 15.3223 20.6482 15.9298 21.6955C16.6629 20.6691 17.0294 19.5276 17.0294 18.2708C17.0294 17.2025 16.7571 16.218 16.2125 15.3173C15.6889 14.4166 14.9767 13.7044 14.076 13.1808C13.1753 12.6571 12.1908 12.3953 11.1226 12.3953ZM11.1226 15.0031C10.5989 15.0031 10.1381 15.1916 9.74009 15.5687C9.36305 15.9457 9.17454 16.4065 9.17454 16.9511C9.17454 17.4957 9.36305 17.967 9.74009 18.365C10.1381 18.7421 10.5989 18.9306 11.1226 18.9306C11.6672 18.9306 12.128 18.7421 12.505 18.365C12.903 17.967 13.102 17.4957 13.102 16.9511C13.102 16.4065 12.903 15.9457 12.505 15.5687C12.128 15.1916 11.6672 15.0031 11.1226 15.0031ZM26.8324 12.3953C26.9999 12.3953 27.1361 12.4477 27.2408 12.5524C27.3665 12.6362 27.4503 12.7619 27.4922 12.9294V15.6629C27.4922 15.8305 27.4398 15.9771 27.3351 16.1028C27.2304 16.2075 27.1047 16.2704 26.9581 16.2913L26.8324 16.3227H20.2971C20.1295 16.3227 19.9829 16.2704 19.8572 16.1657C19.7525 16.0609 19.6792 15.9352 19.6373 15.7886V13.0237C19.6373 12.8771 19.6896 12.7514 19.7944 12.6467C19.8991 12.521 20.0248 12.4372 20.1714 12.3953H26.8324ZM26.1726 13.6835H20.9569V15.0031H26.1726V13.6835ZM28.152 1.90113H3.26764C2.76493 1.90113 2.32505 2.08965 1.94802 2.46669C1.57098 2.82278 1.36152 3.27312 1.31963 3.81773V5.82859H30.1V4.00625C30.1 3.46164 29.922 2.99035 29.5659 2.59237C29.2307 2.19438 28.8223 1.97445 28.3405 1.93255L28.152 1.90113ZM3.26764 3.22076C3.45616 3.22076 3.61326 3.2836 3.73894 3.40928C3.86462 3.53495 3.92746 3.69205 3.92746 3.88057C3.92746 4.06909 3.86462 4.22619 3.73894 4.35187C3.61326 4.47754 3.45616 4.54038 3.26764 4.54038C3.07913 4.54038 2.92203 4.47754 2.79635 4.35187C2.67067 4.20524 2.60783 4.04814 2.60783 3.88057C2.60783 3.713 2.67067 3.56638 2.79635 3.4407C2.94297 3.29407 3.10007 3.22076 3.26764 3.22076ZM5.90689 3.22076C6.07446 3.22076 6.22109 3.2836 6.34677 3.40928C6.47245 3.53495 6.53529 3.69205 6.53529 3.88057C6.53529 4.06909 6.47245 4.22619 6.34677 4.35187C6.22109 4.47754 6.07446 4.54038 5.90689 4.54038C5.73932 4.54038 5.58222 4.47754 5.4356 4.35187C5.30992 4.20524 5.24708 4.04814 5.24708 3.88057C5.24708 3.713 5.30992 3.56638 5.4356 3.4407C5.56128 3.29407 5.71837 3.22076 5.90689 3.22076ZM8.51472 3.22076C8.70324 3.22076 8.86034 3.2836 8.98602 3.40928C9.1117 3.53495 9.17454 3.69205 9.17454 3.88057C9.17454 4.06909 9.1117 4.22619 8.98602 4.35187C8.86034 4.47754 8.70324 4.54038 8.51472 4.54038C8.32621 4.54038 8.16911 4.47754 8.04343 4.35187C7.91775 4.20524 7.85491 4.04814 7.85491 3.88057C7.85491 3.713 7.91775 3.56638 8.04343 3.4407C8.16911 3.29407 8.32621 3.22076 8.51472 3.22076Z" />
    </svg>
  );
}
