import { FC } from "react";

const Buttons: FC = () => {
    return ( 
        <div className="my-8 min-h-0 shrink-0 grid-cols-2 gap-x-[16px] gap-y-[32px] pb-12 max-md:grid md:my-3 md:ml-14 md:flex md:max-h-[700px] md:shrink-1 md:flex-col md:flex-wrap">
            <button className="group z-10 flex w-[128px] cursor-pointer flex-col items-center justify-center gap-2 outline-none select-none order-[-1]" tabIndex={1}>
                <div className="flex h-[96px] w-[96px] items-center justify-center transition-[filter] will-change-[transform,opacity] group-hover:brightness-[80%] group-focus-visible:brightness-[80%] group-active:brightness-[60%]">
                    <img src="#" alt="About me folder" width={96} height={96} loading="lazy"/>
                </div>
                <div className="font-chicago text-app bg-icon-background text-icon-foreground aria-[selected=&quot;true&quot;]:bg-icon-background-selected aria-[selected=&quot;true&quot;]:text-icon-foreground-selected flex h-[26px] items-center pt-[3px] pr-[6px] pb-[1px] pl-[8px] leading-[22px] transition-colors group-hover:brightness-[95%] group-focus-visible:brightness-[80%] group-active:brightness-[80%]">
                    About me
                </div>
            </button>

            <button className="group z-10 flex w-[128px] cursor-pointer flex-col items-center justify-center gap-2 outline-none select-none order-[-1]" tabIndex={1}>
                <div className="flex h-[96px] w-[96px] items-center justify-center transition-[filter] will-change-[transform,opacity] group-hover:brightness-[80%] group-focus-visible:brightness-[80%] group-active:brightness-[60%]">
                    <img src="#" alt="Projects folder" width={96} height={96} loading="lazy"/>
                </div>
                <div className="font-chicago text-app bg-icon-background text-icon-foreground aria-[selected=&quot;true&quot;]:bg-icon-background-selected aria-[selected=&quot;true&quot;]:text-icon-foreground-selected flex h-[26px] items-center pt-[3px] pr-[6px] pb-[1px] pl-[8px] leading-[22px] transition-colors group-hover:brightness-[95%] group-focus-visible:brightness-[80%] group-active:brightness-[80%]">
                    Projects
                </div>
            </button>

            <button className="group z-10 flex w-[128px] cursor-pointer flex-col items-center justify-center gap-2 outline-none select-none order-[-1]" tabIndex={1}>
                <div className="flex h-[96px] w-[96px] items-center justify-center transition-[filter] will-change-[transform,opacity] group-hover:brightness-[80%] group-focus-visible:brightness-[80%] group-active:brightness-[60%]">
                    <img src="#" alt="Skills folder" width={96} height={96} loading="lazy"/>
                </div>
                <div className="font-chicago text-app bg-icon-background text-icon-foreground aria-[selected=&quot;true&quot;]:bg-icon-background-selected aria-[selected=&quot;true&quot;]:text-icon-foreground-selected flex h-[26px] items-center pt-[3px] pr-[6px] pb-[1px] pl-[8px] leading-[22px] transition-colors group-hover:brightness-[95%] group-focus-visible:brightness-[80%] group-active:brightness-[80%]">
                    Skills
                </div>
            </button>

            <button className="group z-10 flex w-[128px] cursor-pointer flex-col items-center justify-center gap-2 outline-none select-none order-[-1]" tabIndex={1}>
                <div className="flex h-[96px] w-[96px] items-center justify-center transition-[filter] will-change-[transform,opacity] group-hover:brightness-[80%] group-focus-visible:brightness-[80%] group-active:brightness-[60%]">
                    <img src="#" alt="Contact me folder" width={96} height={96} loading="lazy"/>
                </div>
                <div className="font-chicago text-app bg-icon-background text-icon-foreground aria-[selected=&quot;true&quot;]:bg-icon-background-selected aria-[selected=&quot;true&quot;]:text-icon-foreground-selected flex h-[26px] items-center pt-[3px] pr-[6px] pb-[1px] pl-[8px] leading-[22px] transition-colors group-hover:brightness-[95%] group-focus-visible:brightness-[80%] group-active:brightness-[80%]">
                    Contact me
                </div>
            </button>

            <button className="group z-10 flex w-[128px] cursor-pointer flex-col items-center justify-center gap-2 outline-none select-none order-[-1]" tabIndex={1}>
                <div className="flex h-[96px] w-[96px] items-center justify-center transition-[filter] will-change-[transform,opacity] group-hover:brightness-[80%] group-focus-visible:brightness-[80%] group-active:brightness-[60%]">
                    <img src="#" alt="Personal folder" width={96} height={96} loading="lazy"/>
                </div>
                <div className="font-chicago text-app bg-icon-background text-icon-foreground aria-[selected=&quot;true&quot;]:bg-icon-background-selected aria-[selected=&quot;true&quot;]:text-icon-foreground-selected flex h-[26px] items-center pt-[3px] pr-[6px] pb-[1px] pl-[8px] leading-[22px] transition-colors group-hover:brightness-[95%] group-focus-visible:brightness-[80%] group-active:brightness-[80%]">
                    Personal
                </div>
            </button>
        </div>
     );
};
 
export default Buttons;