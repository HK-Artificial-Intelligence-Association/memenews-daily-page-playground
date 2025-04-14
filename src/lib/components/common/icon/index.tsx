import { cn } from "@/lib/utils"

type IconProps = React.HTMLAttributes<SVGElement>

/**
 * 常用的产品类图标
 */
export const Icons = {
  memenews: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  ),
  email: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3.75 3C2.23122 3 1 4.23122 1 5.75V17.75C1 19.2688 2.23122 20.5 3.75 20.5H19.75C21.2688 20.5 22.5 19.2688 22.5 17.75V5.75C22.5 4.23122 21.2688 3 19.75 3H3.75ZM6.12803 7.10229C5.77024 6.89358 5.311 7.01443 5.10229 7.37222C4.89358 7.73001 5.01443 8.18925 5.37222 8.39796L10.3645 11.3101C11.2207 11.8096 12.2795 11.8096 13.1358 11.3101L18.128 8.39796C18.4858 8.18925 18.6067 7.73001 18.398 7.37222C18.1892 7.01443 17.73 6.89358 17.3722 7.10229L12.38 10.0144C11.9908 10.2415 11.5095 10.2415 11.1203 10.0144L6.12803 7.10229Z"
      />
    </svg>
  ),
  wechat: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={cn(
        props.className,
        "fill-green-500 text-neutral-800 dark:text-neutral-300",
      )}
    >
      <path d="M18.5753 13.7114C19.0742 13.7114 19.4733 13.2873 19.4733 12.8134C19.4733 12.3145 19.0742 11.9155 18.5753 11.9155C18.0765 11.9155 17.6774 12.3145 17.6774 12.8134C17.6774 13.3123 18.0765 13.7114 18.5753 13.7114ZM14.1497 13.7114C14.6485 13.7114 15.0476 13.2873 15.0476 12.8134C15.0476 12.3145 14.6485 11.9155 14.1497 11.9155C13.6508 11.9155 13.2517 12.3145 13.2517 12.8134C13.2517 13.3123 13.6508 13.7114 14.1497 13.7114ZM20.717 18.7516C20.5942 18.8253 20.5205 18.9482 20.5451 19.1202C20.5451 19.1693 20.5451 19.2185 20.5696 19.2676C20.6679 19.6854 20.8643 20.349 20.8643 20.3736C20.8643 20.4473 20.8889 20.4964 20.8889 20.5456C20.8889 20.6685 20.7907 20.7668 20.6679 20.7668C20.6187 20.7668 20.5942 20.7422 20.5451 20.7176L19.0961 19.882C18.9978 19.8329 18.875 19.7837 18.7522 19.7837C18.6786 19.7837 18.6049 19.7837 18.5558 19.8083C17.8681 20.0049 17.1559 20.1032 16.3946 20.1032C12.7352 20.1032 9.78815 17.6456 9.78815 14.5983C9.78815 11.5509 12.7352 9.09329 16.3946 9.09329C20.0539 9.09329 23.001 11.5509 23.001 14.5983C23.001 16.2448 22.1168 17.7439 20.717 18.7516ZM16.6737 8.09757C16.581 8.09473 16.488 8.09329 16.3946 8.09329C12.2199 8.09329 8.78815 10.9536 8.78815 14.5983C8.78815 15.1519 8.86733 15.6874 9.01626 16.1975H8.92711C8.04096 16.1975 7.15481 16.0503 6.3425 15.8296C6.26866 15.805 6.19481 15.805 6.12097 15.805C5.97327 15.805 5.82558 15.8541 5.7025 15.9277L3.95482 16.9334C3.90559 16.958 3.85635 16.9825 3.80712 16.9825C3.65943 16.9825 3.53636 16.8599 3.53636 16.7127C3.53636 16.6391 3.56097 16.59 3.58559 16.5164C3.6102 16.4919 3.83174 15.6824 3.95482 15.1918C3.95482 15.1427 3.97943 15.0691 3.97943 15.0201C3.97943 14.8238 3.88097 14.6766 3.75789 14.5785C2.05944 13.3765 1.00098 11.5858 1.00098 9.59876C1.00098 5.94369 4.5702 3 8.95173 3C12.7157 3 15.8802 5.16856 16.6737 8.09757ZM11.5199 8.51604C12.0927 8.51604 12.5462 8.03871 12.5462 7.4898C12.5462 6.91701 12.0927 6.46356 11.5199 6.46356C10.9471 6.46356 10.4937 6.91701 10.4937 7.4898C10.4937 8.06258 10.9471 8.51604 11.5199 8.51604ZM6.26045 8.51604C6.83324 8.51604 7.28669 8.03871 7.28669 7.4898C7.28669 6.91701 6.83324 6.46356 6.26045 6.46356C5.68767 6.46356 5.23421 6.91701 5.23421 7.4898C5.23421 8.06258 5.68767 8.51604 6.26045 8.51604Z"></path>
    </svg>
  ),
  dingding: (props: IconProps) => (
    <svg {...props} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#007FFF"
        d="M17.4662004,7.47474562 C17.4321515,7.62207529 17.3512853,7.83414072 17.2384983,8.09308378 L17.2406263,8.09308378 L17.227858,8.11763873 C16.5617761,9.61549039 14.8231533,12.5509225 14.8231533,12.5509225 C14.8231533,12.5509225 14.8210253,12.5442257 14.8146411,12.5330644 L14.3060354,13.4616877 L16.7554293,13.4616877 L12.0758314,20 L13.137732,15.5533226 L11.2097121,15.5533226 L11.8800502,12.613426 C11.3373956,12.7518266 10.6968504,12.9393371 9.93926198,13.1960479 C9.93926198,13.1960479 8.91353839,13.8277797 6.98339048,11.9816942 C6.98339048,11.9816942 5.68101946,10.7762696 6.43647977,10.4771457 C6.75781642,10.3499065 7.99421767,10.1869509 8.96886788,10.0485503 C10.2840072,9.86103985 11.092669,9.76282007 11.092669,9.76282007 C11.092669,9.76282007 7.03659191,9.82755583 6.07471004,9.66683255 C5.11282818,9.50834154 3.89132332,7.82074712 3.63170034,6.33852133 C3.63170034,6.33852133 3.22949753,5.5237436 4.49569158,5.90992592 C5.76188563,6.29610824 11.0054186,7.41000985 11.0054186,7.41000985 C11.0054186,7.41000985 4.18499522,5.21345838 3.73171903,4.67771412 C3.27844284,4.14196985 2.39529909,1.75344335 2.51021418,0.284611171 C2.51021418,0.284611171 2.5591595,-0.0814807412 2.91667311,0.0167390401 C2.91667311,0.0167390401 7.95804069,2.43651729 11.4054934,3.76248434 C14.8550742,5.08621912 17.8535068,5.76036398 17.4662004,7.47474562 Z"
      />
    </svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      className={cn(props.className, "fill-primary")}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  gitHub: (props: IconProps) => (
    <svg {...props} viewBox="0 0 438.549 438.549" fill="currentColor">
      <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
    </svg>
  ),
  dailypush: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
    </svg>
  ),
  rss: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M3 17C5.20914 17 7 18.7909 7 21H3V17ZM3 10C9.07513 10 14 14.9249 14 21H12C12 16.0294 7.97056 12 3 12V10ZM3 3C12.9411 3 21 11.0589 21 21H19C19 12.1634 11.8366 5 3 5V3Z"></path>
    </svg>
  ),
  weibo: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4.27799 8.59201C7.05085 5.8217 10.282 4.55876 11.4966 5.77587C12.0338 6.31312 12.0848 7.23996 11.741 8.34757C11.5628 8.9052 12.2655 8.5971 12.2655 8.5971C14.5062 7.66008 16.4618 7.60407 17.1747 8.62511C17.5541 9.16746 17.5184 9.93133 17.1671 10.8149C17.0041 11.2223 17.2154 11.2859 17.5261 11.3776C18.789 11.7697 20.1945 12.7144 20.1945 14.3822C20.1945 17.1448 16.2148 20.6205 10.2311 20.6205C5.66569 20.6205 1.00098 18.4078 1.00098 14.7692C1.00098 12.8671 2.20535 10.6672 4.27799 8.59201ZM16.4108 14.3338C16.174 11.9429 13.0294 10.2954 9.38829 10.657C5.74717 11.016 2.9845 13.2465 3.2213 15.6375C3.4581 18.0309 6.60271 19.6758 10.2438 19.3168C13.885 18.9552 16.6451 16.7247 16.4108 14.3338ZM6.16221 14.4382C6.91589 12.9104 8.87395 12.0473 10.6079 12.4979C12.4005 12.9614 13.3146 14.6521 12.5838 16.2969C11.8403 17.98 9.70148 18.8763 7.88856 18.2906C6.13674 17.7254 5.39579 15.9965 6.16221 14.4382ZM8.8765 15.0162C8.31378 14.7794 7.58556 15.0238 7.23672 15.5687C6.88279 16.1162 7.0483 16.7705 7.60847 17.0252C8.17628 17.2823 8.93252 17.0379 9.2839 16.4752C9.63019 15.9074 9.44686 15.2581 8.8765 15.0162ZM10.2642 14.4382C10.0478 14.3542 9.77787 14.456 9.65056 14.6699C9.52834 14.8838 9.59709 15.1282 9.81352 15.2173C10.0325 15.309 10.3151 15.2046 10.4424 14.9856C10.5647 14.7666 10.4857 14.5197 10.2642 14.4382ZM15.9576 2.92408C17.9258 2.50649 20.0545 3.12017 21.5008 4.71918C22.947 6.31822 23.3341 8.50034 22.7204 10.4228C22.5796 10.8639 22.1036 11.1075 21.6612 10.9626C21.2181 10.8174 20.9762 10.3438 21.1188 9.90078C21.5568 8.54108 21.2806 6.98652 20.2531 5.84971C19.2244 4.71154 17.712 4.27613 16.3115 4.57404C15.8558 4.67099 15.41 4.37994 15.3109 3.92475C15.2115 3.46897 15.5018 3.02078 15.9576 2.92408ZM16.584 5.84971C17.5414 5.64601 18.5802 5.94392 19.283 6.72307C19.9858 7.50222 20.1742 8.56655 19.8737 9.49847C19.7511 9.87865 19.3409 10.089 18.9596 9.96443C18.5777 9.83967 18.3714 9.43227 18.4962 9.04779C18.6464 8.59201 18.5522 8.07258 18.2085 7.69064C17.8622 7.31125 17.3555 7.16611 16.887 7.26542C16.4949 7.35199 16.1104 7.09991 16.0263 6.71034C15.9423 6.31822 16.1917 5.93316 16.584 5.84971Z"></path>
    </svg>
  ),
  feishu: (props: IconProps) => (
    <svg
      {...props}
      fill="none"
      width="100%"
      height="100%"
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 8c0 1 7 3.5 14.745 16.744 0 0 4.184-4.363 6.255-5.744 1.5-1 2.712-1.332 2.712-1.332C33.712 15.156 29.5 8 28 8H10Z"
        fill="#00D6B9"
      />
      <path
        d="M43.5 18.5c-1-.667-3.65-1.771-6.5-1.5a14.945 14.945 0 0 0-3.288.668S32.5 18 31 19c-2.07 1.38-6.255 5.744-6.255 5.744-1.428 1.397-3.05 2.732-5.245 3.756 0 0 7 3 11.5 3 5.063 0 7-3.5 7-3.5 1.5-3.305 3.5-7 5.5-9.5Z"
        fill="#163C9A"
      />
      <path
        d="M4 17.5v17c0 1 6 5.5 15 5.5 10 0 17.05-7.705 19-12 0 0-1.937 3.5-7 3.5-4.5 0-11.5-3-11.5-3-5.117-2.239-10.03-6.577-12.906-9.117C4.974 17.953 4 17.093 4 17.5Z"
        fill="#3370FF"
      />
    </svg>
  ),

  like: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 13"
      fill="currentColor"
    >
      <path d="M7.71164516,0.875163593 C8.04335755,0.52512827 8.5809604,0.52512827 8.91839197,0.869230791 C9.12428242,1.08281167 9.21007011,1.38538457 9.15287831,1.68202468 L8.60955629,4.39924803 L11.8408925,4.39924803 C13.070516,4.39924803 13.899797,5.70446449 13.419386,6.87915931 L11.5549336,11.3940217 C11.3719198,11.8271162 10.9601389,12.1118907 10.5026046,12.1118907 L5.35534334,12.1118907 C4.72623363,12.1118907 4.21150751,11.5779386 4.21150751,10.9253303 L4.21150751,4.99846104 C4.21150751,4.68402253 4.33161027,4.38144963 4.5432199,4.16193595 L7.71164516,0.875163593 Z M1.92383584,12.1118907 C1.29472613,12.1118907 0.78,11.5779386 0.78,10.9253303 L0.78,6.17908866 C0.78,5.52648043 1.29472613,4.99252824 1.92383584,4.99252824 C2.55294554,4.99252824 3.06767167,5.52648043 3.06767167,6.17908866 L3.06767167,10.9253303 C3.06767167,11.5779386 2.55294554,12.1118907 1.92383584,12.1118907 Z"></path>
    </svg>
  ),
  share: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 12 14"
    >
      <path d="M2.8350122,13.0981677 C3.14682459,13.4353028 3.68284415,13.0483632 3.46102262,12.6462659 C2.73582547,11.3316965 2.47195873,9.90883736 2.83975548,8.88028973 C3.25221242,7.72684942 4.43906282,7.04997732 6.54575716,7.02499185 L6.54575716,9.72311586 C6.54575716,10.0695834 6.96465515,10.2430907 7.20963874,9.99809511 L11.8760204,5.33148544 C12.0278794,5.17961904 12.0278824,4.93340376 11.8760271,4.78153365 L7.20964546,0.114695989 C6.96466461,-0.130308793 6.54575716,0.0431963661 6.54575716,0.389668525 L6.54575716,3.01713497 C0.499881813,3.10338513 -1.09199412,8.85224471 2.8350122,13.0981677 Z"></path>
    </svg>
  ),
  favorite: (props: IconProps) => (
    <svg
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 13"
    >
      <path d="M0.08,1.85377381 L0.08,11.9179871 C0.08,12.0797057 0.263125636,12.1701043 0.387696264,12.069879 L4.42714327,8.81987728 C4.63422824,8.65326375 4.92649445,8.65327582 5.13356617,8.81990645 L9.17229165,12.0698692 C9.29685991,12.1701093 9.48,12.079713 9.48,11.9179871 L9.48,1.85377381 C9.48,0.891758358 8.71454732,0.111890747 7.77031359,0.111890747 L1.78968641,0.111890747 C0.845452679,0.111890747 0.08,0.891758358 0.08,1.85377381 Z"></path>
    </svg>
  ),
  copy: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M8 10.75C8 9.23046 9.2324 7.99893 10.7519 8L19.7519 8.00635C21.27 8.00742 22.5 9.23832 22.5 10.7563V19.7486C22.5 21.2674 21.2688 22.4986 19.75 22.4986H10.75C9.23122 22.4986 8 21.2674 8 19.7486V10.75Z"></path>
      <path d="M3.75192 1C2.23239 0.998942 1 2.23047 1 3.75V14.7486C1 16.2674 2.23122 17.4986 3.75 17.4986H6.75V10.75C6.75 8.53976 8.54258 6.74844 10.7528 6.75L17.5 6.75476V3.75768C17.5 2.23964 16.27 1.00873 14.7519 1.00768L3.75192 1Z"></path>
    </svg>
  ),
  tabClose: (props: IconProps) => (
    <svg
      {...props}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"></path>
    </svg>
  ),
  tabOpen: (props: IconProps) => (
    <svg
      {...props}
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 1024 1024"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"></path>{" "}
    </svg>
  ),
  check: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  quote: (props: IconProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <rect x="0" fill="none" width="20" height="20" />

      <g>
        <path d="M8.54 12.74c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45L6.65 1.94C3.45 3.46.31 6.96.85 11.37 1.19 14.16 2.8 16 5.08 16c1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38zm9.43 0c0-.87-.24-1.61-.72-2.22-.73-.92-2.14-1.03-2.96-.85-.34-1.93 1.3-4.39 3.42-5.45l-1.63-2.28c-3.2 1.52-6.34 5.02-5.8 9.43.34 2.79 1.95 4.63 4.23 4.63 1 0 1.83-.29 2.48-.88.66-.59.98-1.38.98-2.38z" />
      </g>
    </svg>
  ),
  fire: (props: IconProps) => (
    <svg
      {...props}
      width="24"
      height="27"
      viewBox="0 0 24 27"
      fill="#FF3C11"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.59344 26.9075C4.81094 23.1575 5.74844 21 7.15594 19.0325C8.65594 16.7825 9.03094 14.625 9.03094 14.625C9.03094 14.625 10.2484 16.125 9.78094 18.5625C11.8434 16.22 12.2184 12.47 11.9359 11.0625C16.6234 14.345 18.6859 21.5625 15.9684 26.8125C30.4059 18.5625 19.5309 6.2825 17.6559 4.97C18.3109 6.375 18.4059 8.72 17.0934 9.845C14.9359 1.595 9.59344 0 9.59344 0C10.2484 4.22 7.34344 8.8125 4.53094 12.2825C4.43594 10.595 4.34344 9.47 3.40594 7.7825C3.21844 10.875 0.873438 13.3125 0.218438 16.4075C-0.626562 20.625 0.873439 23.6275 6.59344 26.9075Z" />
    </svg>
  ),
  lock: (props: IconProps) => (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17ZM11 14V18H13V14H11Z"></path>
    </svg>
  ),
}

export const Icons_Product = {
  memenews: (props: IconProps) => <Icons.memenews {...props} />,
  dingding: (props: IconProps) => <Icons.dingding {...props} />,
  wechat: (props: IconProps) => <Icons.wechat {...props} />,
  feishu: (props: IconProps) => <Icons.feishu {...props} />,
  email: (props: IconProps) => <Icons.email {...props} />,
  weibo: (props: IconProps) => <Icons.weibo {...props} />,
  twitter: (props: IconProps) => <Icons.twitter {...props} />,
  github: (props: IconProps) => <Icons.gitHub {...props} />,
  dailypush: (props: IconProps) => <Icons.dailypush {...props} />,
}
