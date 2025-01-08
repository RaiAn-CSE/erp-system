// import { toast } from "@/hooks/use-toast";
// import { CheckCircle } from "@phosphor-icons/react";

// type ToastConfig = {
//   variant?: "destructive" | "default" | null;
//   description: any;
//   title?: string;
//   className?: string;
// };

// export const useToastNotification = (
//   message: string,
//   type?: "success",
//   title?: string,
//   variant?: "destructive" | "default" | null
// ) => {
//   const toastConfig: ToastConfig = {
//     description: (
//       <div className="flex items-center gap-2">
//         {type === "success" && (
//           <CheckCircle weight="fill" color="green" size={20} />
//         )}
//         {message}
//       </div>
//     ),
//     variant: variant || "default",
//     className: `top-4 right-1 fixed w-[300px]  ${
//       message.length > 50
//         ? "max-h-[200px] overflow-y-auto "
//         : "h-[1rem] w-[15rem]"
//     }`,
//   };

//   if (title) {
//     toastConfig.title = title;
//   }

//   return toast(toastConfig);
// };
